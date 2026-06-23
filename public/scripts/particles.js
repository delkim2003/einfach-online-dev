(function(){
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrame;
  let isMobile = window.innerWidth < 768;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    isMobile = window.innerWidth < 768;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = isMobile ? Math.random() * 3 + 1.5 : Math.random() * 4 + 1.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      const colors = [
        {r:155,g:89,b:246},{r:155,g:89,b:246},
        {r:77,g:124,b:255},{r:77,g:124,b:255},{r:77,g:124,b:255},
        {r:41,g:197,b:246},{r:41,g:197,b:246}
      ];
      const c = colors[Math.floor(Math.random() * colors.length)];
      this.r = c.r; this.g = c.g; this.b = c.b;
      this.opacity = isMobile ? Math.random() * 0.6 + 0.3 : Math.random() * 0.9 + 0.3;
      this.life = Math.random() * 500;
      this.maxLife = Math.random() * 400 + 200;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.015 + 0.008;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      this.pulse += this.pulseSpeed;
      if (this.life > this.maxLife || this.x < -100 || this.x > canvas.width + 100 || this.y < -100 || this.y > canvas.height + 100) {
        this.reset();
      }
    }
    draw() {
      const pulseOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
      const glowSize = this.size * 4;
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize);
      gradient.addColorStop(0, `rgba(${this.r},${this.g},${this.b},${pulseOpacity * 0.6})`);
      gradient.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.min(this.r + 50, 255)},${Math.min(this.g + 50, 255)},${Math.min(this.b + 50, 255)},${pulseOpacity})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    const count = isMobile ? 65 : 150;
    particles = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    const connectionDist = isMobile ? 120 : 180;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDist) {
          const opacity = (1 - dist / connectionDist) * 0.2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${Math.floor((particles[i].r + particles[j].r)/2)},${Math.floor((particles[i].g + particles[j].g)/2)},${Math.floor((particles[i].b + particles[j].b)/2)},${opacity})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }
    }
    animFrame = requestAnimationFrame(animate);
  }

  // Maus-Interaktion: sanfter Push
  let mouseX = -1000, mouseY = -1000;
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    particles.forEach(p => {
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120 && dist > 0) {
        const force = (120 - dist) / 120 * 0.8;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force;
      }
    });
  });
  canvas.addEventListener('mouseleave', () => { mouseX = -1000; mouseY = -1000; });
  window.addEventListener('resize', () => { resize(); init(); });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    init();
    animate();
  }
})();