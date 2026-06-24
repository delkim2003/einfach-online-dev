<?php
/**
 * Kontaktformular-Verarbeitung — einfach-online.dev
 *
 * Nimmt Formulardaten per POST entgegen, validiert sie und versendet
 * eine E-Mail via Zoho SMTP (smtp.zoho.eu:465 SSL).
 *
 * Keine Speicherung, keine Logs, keine Drittanbieter-Libraries.
 */

declare(strict_types=1);

// ── Konfiguration laden ─────────────────────────────────────────────────────
$configFile = __DIR__ . '/smtp-config.php';
if (file_exists($configFile)) {
    require_once $configFile;
} else {
    sendJson(false, 'Server-Konfiguration nicht gefunden.');
    exit;
}

// Nur POST erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJson(false, 'Methode nicht erlaubt.');
    exit;
}

// ── Honeypot-Prüfung ────────────────────────────────────────────────────────
if (!empty($_POST['website'])) {
    // Bot erkannt — silent ignorieren, Erfolg vortäuschen
    sendJson(true, 'Vielen Dank! Ihre Nachricht wurde versendet.');
    exit;
}

// ── Eingabedaten erfassen & trimmen ─────────────────────────────────────────
$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$package = trim($_POST['paket'] ?? '');
$message = trim($_POST['message'] ?? '');
$dsgvo   = trim($_POST['privacy'] ?? '');

// ── Validierung ─────────────────────────────────────────────────────────────
$errors = [];

if ($name === '') {
    $errors[] = 'Bitte geben Sie Ihren Namen ein.';
}

if ($email === '') {
    $errors[] = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
}

if ($message === '') {
    $errors[] = 'Bitte geben Sie eine Nachricht ein.';
}

if (!empty($errors)) {
    sendJson(false, implode(' ', $errors));
    exit;
}

// ── E-Mail-Betreff (UTF-8 Base64) ───────────────────────────────────────────
$subjectRaw = "Neue Anfrage von {$name} — einfach-online.dev";
$subjectEncoded = '=?UTF-8?B?' . base64_encode($subjectRaw) . '?=';

// ── E-Mail-Body (HTML + Text) ───────────────────────────────────────────────
$dsgvoText = ($dsgvo === 'on' || $dsgvo === '1' || $dsgvo === 'yes')
    ? 'Ja (zugestimmt)'
    : 'Keine Angabe';

$boundary = '----=_NextPart_' . md5(uniqid((string) random_int(0, PHP_INT_MAX), true));

$bodyText = "Neue Kontaktanfrage von einfach-online.dev\n"
          . "==========================================\n\n"
          . "Name:            {$name}\n"
          . "E-Mail:          {$email}\n"
          . "Paket-Auswahl:   {$package}\n"
          . "DSGVO-Status:    {$dsgvoText}\n\n"
          . "Nachricht:\n{$message}\n";

$bodyHtml = '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8">'
          . '<meta name="viewport" content="width=device-width,initial-scale=1"></head>'
          . '<body style="font-family:Arial,sans-serif;background:#f9fafb;padding:20px">'
          . '<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;'
          . 'box-shadow:0 2px 8px rgba(0,0,0,.1);overflow:hidden">'
          . '<div style="background:#2563eb;color:#fff;padding:20px 30px">'
          . '<h1 style="margin:0;font-size:20px">Neue Kontaktanfrage</h1>'
          . '<p style="margin:4px 0 0;font-size:13px;opacity:.85">einfach-online.dev</p>'
          . '</div>'
          . '<div style="padding:20px 30px">'
          . '<table style="width:100%;border-collapse:collapse">'
          . '<tr><td style="padding:8px 0;color:#6b7280;width:140px">Name:</td>'
          . '<td style="padding:8px 0;color:#111827">' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '</td></tr>'
          . '<tr><td style="padding:8px 0;color:#6b7280">E-Mail:</td>'
          . '<td style="padding:8px 0;color:#111827">'
          . '<a href="mailto:' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '" '
          . 'style="color:#2563eb">' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</a></td></tr>'
          . '<tr><td style="padding:8px 0;color:#6b7280">Paket:</td>'
          . '<td style="padding:8px 0;color:#111827">' . htmlspecialchars($package, ENT_QUOTES, 'UTF-8') . '</td></tr>'
          . '<tr><td style="padding:8px 0;color:#6b7280">DSGVO:</td>'
          . '<td style="padding:8px 0;color:#111827">' . htmlspecialchars($dsgvoText, ENT_QUOTES, 'UTF-8') . '</td></tr>'
          . '</table>'
          . '<hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0">'
          . '<p style="color:#111827;white-space:pre-wrap">'
          . htmlspecialchars($message, ENT_QUOTES, 'UTF-8') . '</p>'
          . '</div>'
          . '<div style="background:#f3f4f6;padding:12px 30px;font-size:12px;color:#9ca3af">'
          . 'Diese E-Mail wurde über das Kontaktformular von einfach-online.dev gesendet.'
          . '</div></div></body></html>';

$body = "--{$boundary}\r\n"
      . "Content-Type: text/plain; charset=UTF-8\r\n"
      . "Content-Transfer-Encoding: 8bit\r\n\r\n"
      . $bodyText . "\r\n"
      . "--{$boundary}\r\n"
      . "Content-Type: text/html; charset=UTF-8\r\n"
      . "Content-Transfer-Encoding: 8bit\r\n\r\n"
      . $bodyHtml . "\r\n"
      . "--{$boundary}--\r\n";

// ── E-Mail-Header ───────────────────────────────────────────────────────────
$headers  = "From: {$name} <{$email}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";
$headers .= "X-Mailer: einfach-online.dev Contact Form\r\n";

// ── SimpleSMTP-Klasse ───────────────────────────────────────────────────────
class SimpleSMTP
{
    /** @var resource|false */
    private $socket = false;

    private int $timeout;

    private string $lastResponse = '';

    public function __construct(int $timeout = 30)
    {
        $this->timeout = $timeout;
    }

    /**
     * Verbindet via SSL mit dem SMTP-Server.
     */
    public function connect(string $host, int $port): void
    {
        $errno  = 0;
        $errstr = '';

        $this->socket = @fsockopen(
            "ssl://{$host}",
            $port,
            $errno,
            $errstr,
            $this->timeout
        );

        if ($this->socket === false) {
            throw new RuntimeException(
                "SMTP-Verbindung zu {$host}:{$port} fehlgeschlagen: [{$errno}] {$errstr}"
            );
        }

        $this->read(); // Begrüßungszeile lesen
    }

    /**
     * EHLO senden.
     */
    public function ehlo(string $hostname = 'localhost'): void
    {
        $this->write("EHLO {$hostname}");
        $this->read();
    }

    /**
     * AUTH LOGIN durchführen.
     */
    public function authLogin(string $username, string $password): void
    {
        $this->write('AUTH LOGIN');
        $this->read(); // 334 VXNlcm5hbWU6

        $this->write(base64_encode($username));
        $this->read(); // 334 UGFzc3dvcmQ6

        $this->write(base64_encode($password));
        $this->read(); // 235 Authentication successful
    }

    /**
     * MAIL FROM senden.
     */
    public function mailFrom(string $from): void
    {
        $this->write("MAIL FROM:<{$from}>");
        $this->read();
    }

    /**
     * RCPT TO senden.
     */
    public function rcptTo(string $to): void
    {
        $this->write("RCPT TO:<{$to}>");
        $this->read();
    }

    /**
     * DATA beginnen, Header + Body senden, mit <CRLF>.<CRLF> abschließen.
     */
    public function data(string $headers, string $body): void
    {
        $this->write('DATA');
        $this->read(); // 354 Start mail input

        $this->writeRaw("{$headers}\r\n{$body}\r\n.");
        $this->read(); // 250 OK
    }

    /**
     * QUIT senden und Verbindung schließen.
     */
    public function quit(): void
    {
        if ($this->socket !== false) {
            $this->write('QUIT');
            $this->read();
            fclose($this->socket);
            $this->socket = false;
        }
    }

    /**
     * Gibt die letzte Server-Antwort zurück.
     */
    public function getLastResponse(): string
    {
        return $this->lastResponse;
    }

    /**
     * Stellt sicher, dass die Verbindung geschlossen wird.
     */
    public function __destruct()
    {
        if ($this->socket !== false) {
            @fclose($this->socket);
            $this->socket = false;
        }
    }

    // ── Interne Methoden ────────────────────────────────────────────────

    private function write(string $command): void
    {
        if ($this->socket === false) {
            throw new RuntimeException('Keine SMTP-Verbindung.');
        }

        $result = @fwrite($this->socket, $command . "\r\n");

        if ($result === false) {
            throw new RuntimeException('Fehler beim Schreiben auf den SMTP-Socket.');
        }
    }

    /**
     * Sendet Rohdaten ohne automatisches CRLF (für DATA-Body und Abschluss-Punkt).
     */
    private function writeRaw(string $data): void
    {
        if ($this->socket === false) {
            throw new RuntimeException('Keine SMTP-Verbindung.');
        }

        $result = @fwrite($this->socket, $data);

        if ($result === false) {
            throw new RuntimeException('Fehler beim Schreiben auf den SMTP-Socket.');
        }
    }

    /**
     * Liest SMTP-Antwort(en) bis alle Zeilen empfangen wurden
     * (Multiline-Antworten mit Bindestrich-Code).
     */
    private function read(): string
    {
        if ($this->socket === false) {
            throw new RuntimeException('Keine SMTP-Verbindung.');
        }

        $this->lastResponse = '';
        $isMultiline = false;
        $codePrefix   = '';

        while (true) {
            $line = @fgets($this->socket, 515);
            if ($line === false) {
                throw new RuntimeException('SMTP-Server hat die Verbindung unerwartet beendet.');
            }

            $this->lastResponse .= $line;

            // Prüfe, ob letzte Zeile einer (Multiline-)Antwort
            if (!$isMultiline) {
                // Erste Zeile: Code + Leerzeichen => single-line, Code + '-' => multiline
                if (strlen($line) >= 4 && $line[3] === '-') {
                    $isMultiline  = true;
                    $codePrefix   = substr($line, 0, 3);
                    continue;
                }

                // Code + Leerzeichen (oder kürzere Zeile) => single-line, fertig
                break;
            }

            // In Multiline-Antwort: prüfe auf Code + Leerzeichen
            if (strlen($line) >= 4 && substr($line, 0, 3) === $codePrefix && $line[3] === ' ') {
                break;
            }
        }

        // Prüfe auf SMTP-Fehler (Codes 4xx/5xx)
        $code = (int) substr($this->lastResponse, 0, 3);
        if ($code >= 400) {
            throw new RuntimeException("SMTP-Fehler {$code}: " . rtrim((string) substr($this->lastResponse, 4)));
        }

        return $this->lastResponse;
    }
}

// ── E-Mail versenden ────────────────────────────────────────────────────────
try {
    $smtp = new SimpleSMTP(30);

    $smtp->connect(SMTP_HOST, SMTP_PORT);
    $smtp->ehlo('einfach-online.dev');
    $smtp->authLogin(SMTP_USER, SMTP_PASS);

    // Absender = SMTP-User (der authentifizierte Account)
    $smtp->mailFrom(SMTP_USER);

    // Empfänger = info@einfach-online.dev
    $smtp->rcptTo(SMTP_USER);

    // BCC: Kopie an den Absender (Bestätigung)
    // SMTP implementiert BCC durch zusätzliches RCPT TO ohne Header-Eintrag
    $smtp->rcptTo($email);

    $smtp->data($headers, $body);
    $smtp->quit();

    sendJson(true, 'Vielen Dank! Ihre Nachricht wurde versendet. '
                  . 'Sie erhalten eine Kopie an Ihre E-Mail-Adresse. '
                  . 'Ihre Daten werden nicht gespeichert (DSGVO-konform).');

} catch (RuntimeException $e) {
    sendJson(false, 'Die Nachricht konnte leider nicht versendet werden. '
                  . 'Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt an '
                  . SMTP_USER . '.');
} catch (\Throwable $e) {
    sendJson(false, 'Ein unerwarteter Fehler ist aufgetreten. '
                  . 'Bitte versuchen Sie es später erneut.');
}

// ── JSON-Antwort ────────────────────────────────────────────────────────────
function sendJson(bool $success, string $message): void
{
    header('Content-Type: application/json; charset=UTF-8');
    header('X-Content-Type-Options: nosniff');

    echo json_encode(
        ['success' => $success, 'message' => $message],
        JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR
    );
}
