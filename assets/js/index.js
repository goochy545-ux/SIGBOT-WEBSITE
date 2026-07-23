// Simple fade in on scroll
    const cards = document.querySelectorAll('.feature-card, .cta-col');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = `all 0.6s ease ${index * 0.1}s`; // Stagger effect
      observer.observe(card);
    });

    (function () {
      // ─── CANVAS PARTICLE ANIMATION ───
      const canvas = document.getElementById('anim-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const stage = document.getElementById('flow-stage');

      function resizeCanvas() {
        canvas.width = stage.offsetWidth;
        canvas.height = stage.offsetHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const particles = [];
      const trails = [];
      const burstParticles = [];
      const GREEN = '#ffffff';

      class Particle {
        constructor(sx, sy, ex, ey, color) {
          this.x = sx; this.y = sy;
          this.startX = sx; this.startY = sy;
          this.endX = ex; this.endY = ey;
          this.color = color || GREEN;
          this.progress = 0;
          this.speed = 0.008 + Math.random() * 0.006;
          this.size = 3 + Math.random() * 3;
          this.alpha = 0;
          const midX = (sx + ex) / 2;
          const midY = (sy + ey) / 2 + (Math.random() - 0.5) * 80;
          this.cp = { x: midX, y: midY };
        }
        update() {
          this.progress += this.speed;
          if (this.progress >= 1) return true;
          const t = this.progress;
          this.x = (1 - t) * (1 - t) * this.startX + 2 * (1 - t) * t * this.cp.x + t * t * this.endX;
          this.y = (1 - t) * (1 - t) * this.startY + 2 * (1 - t) * t * this.cp.y + t * t * this.endY;
          if (t < 0.15) this.alpha = t / 0.15;
          else if (t > 0.85) this.alpha = (1 - t) / 0.15;
          else this.alpha = 1;
          return false;
        }
        draw() {
          ctx.save();
          ctx.globalAlpha = this.alpha * 0.9;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
          ctx.fill();
          ctx.restore();
        }
      }

      class TrailParticle {
        constructor(x, y, color) {
          this.x = x + (Math.random() - 0.5) * 6;
          this.y = y + (Math.random() - 0.5) * 6;
          this.color = color;
          this.alpha = 0.6;
          this.size = 1 + Math.random() * 2;
          this.vx = (Math.random() - 0.5);
          this.vy = (Math.random() - 0.5);
        }
        update() { this.alpha -= 0.04; this.x += this.vx; this.y += this.vy; return this.alpha <= 0; }
        draw() {
          ctx.save(); ctx.globalAlpha = this.alpha;
          ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color; ctx.fill(); ctx.restore();
        }
      }

      function drawConnectors() {
        const pipelineEl = document.getElementById('pipeline');
        const stageRect = stage.getBoundingClientRect();
        const pipeRect = pipelineEl.getBoundingClientRect();
        const pipeCX = pipeRect.left - stageRect.left + pipeRect.width / 2;
        const pipeCY = pipeRect.top - stageRect.top + pipeRect.height / 2;

        document.querySelectorAll('.email-icon-card').forEach(card => {
          const r = card.getBoundingClientRect();
          const sx = r.right - stageRect.left;
          const sy = r.top - stageRect.top + r.height / 2;
          ctx.save(); ctx.beginPath(); ctx.moveTo(sx, sy);
          ctx.quadraticCurveTo((sx + pipeCX) / 2, sy, pipeCX - 30, pipeCY);
          ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
        });

        document.querySelectorAll('.anim-contact-card').forEach(card => {
          const r = card.getBoundingClientRect();
          const ex = r.left - stageRect.left;
          const ey = r.top - stageRect.top + r.height / 2;
          ctx.save(); ctx.beginPath(); ctx.moveTo(pipeCX + 30, pipeCY);
          ctx.quadraticCurveTo((pipeCX + ex) / 2, ey, ex, ey);
          ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
        });
      }

      function drawBursts() {
        for (let i = burstParticles.length - 1; i >= 0; i--) {
          const p = burstParticles[i];
          p.x += p.vx; p.y += p.vy;
          p.vx *= 0.92; p.vy *= 0.92; p.alpha -= 0.04;
          if (p.alpha <= 0) { burstParticles.splice(i, 1); continue; }
          ctx.save(); ctx.globalAlpha = p.alpha;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color; ctx.shadowBlur = 10; ctx.shadowColor = p.color;
          ctx.fill(); ctx.restore();
        }
      }

      function spawnBurst(el, color) {
        const stageRect = stage.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const cx = r.left - stageRect.left + r.width / 2;
        const cy = r.top - stageRect.top + r.height / 2;
        for (let i = 0; i < 16; i++) {
          const angle = (i / 16) * Math.PI * 2;
          const speed = 2 + Math.random() * 3;
          burstParticles.push({ x: cx, y: cy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, alpha: 1, size: 2 + Math.random() * 3, color });
        }
      }

      function animLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawConnectors();
        for (let i = trails.length - 1; i >= 0; i--) { if (trails[i].update()) trails.splice(i, 1); else trails[i].draw(); }
        for (let i = particles.length - 1; i >= 0; i--) {
          if (particles[i].update()) { particles.splice(i, 1); }
          else { particles[i].draw(); if (Math.random() < 0.3) trails.push(new TrailParticle(particles[i].x, particles[i].y, particles[i].color)); }
        }
        drawBursts();
        requestAnimationFrame(animLoop);
      }
      animLoop();

      // ─── SEQUENCE ANIMATION ───
      const emailCards = document.querySelectorAll('.email-icon-card');
      const contactCards = document.querySelectorAll('.anim-contact-card');
      let statCount = 0;
      const COLORS = ['#EA4335', '#0078D4', '#4FC3F7', '#6001D2'];

      function spawnParticlesFromTo(fromEl, toEl, color, count) {
        const stageRect = stage.getBoundingClientRect();
        const pipelineEl = document.getElementById('pipeline');
        const pipeRect = pipelineEl.getBoundingClientRect();
        const fromR = fromEl.getBoundingClientRect();
        const sx = fromR.right - stageRect.left;
        const sy = fromR.top - stageRect.top + fromR.height / 2;
        const pipeCX = pipeRect.left - stageRect.left + pipeRect.width / 2;
        const pipeCY = pipeRect.top - stageRect.top + pipeRect.height / 2;
        const toR = toEl.getBoundingClientRect();
        const ex = toR.left - stageRect.left;
        const ey = toR.top - stageRect.top + toR.height / 2;

        for (let i = 0; i < count; i++) { setTimeout(() => particles.push(new Particle(sx, sy, pipeCX, pipeCY, color)), i * 60); }
        setTimeout(() => { for (let i = 0; i < count; i++) { setTimeout(() => particles.push(new Particle(pipeCX, pipeCY, ex, ey, GREEN)), i * 60); } }, 800);
      }

      function runStep(idx) {
        const eCard = emailCards[idx];
        const cCard = contactCards[idx];
        const color = COLORS[idx];
        emailCards.forEach(c => c.classList.remove('active'));
        eCard.classList.add('active');
        spawnBurst(eCard, color);
        spawnParticlesFromTo(eCard, cCard, color, 12);
        setTimeout(() => {
          cCard.classList.add('visible');
          spawnBurst(cCard, GREEN);
          setTimeout(() => {
            cCard.classList.add('new-flash');
            statCount++;
            animateCounter(statCount * 247);
            setTimeout(() => cCard.classList.remove('new-flash'), 1200);
          }, 200);
        }, 1400);
      }

      function animateCounter(target) {
        const el = document.getElementById('stat-contacts');
        const current = parseInt(el.textContent.replace(/,/g, '')) || 0;
        const diff = target - current;
        const steps = 30;
        let step = 0;
        const interval = setInterval(() => {
          step++;
          el.textContent = Math.round(current + (diff * step / steps)).toLocaleString();
          if (step >= steps) clearInterval(interval);
        }, 30);
      }

      function runSequence() {
        const delay = 2200;
        emailCards.forEach(c => c.classList.remove('active'));
        contactCards.forEach(c => { c.classList.remove('visible', 'new-flash'); });
        statCount = 0;
        document.getElementById('stat-contacts').textContent = '0';
        for (let i = 0; i < emailCards.length; i++) { setTimeout(() => runStep(i), i * delay); }
        setTimeout(() => setTimeout(runSequence, 2000), emailCards.length * delay + 1000);
      }
      setTimeout(runSequence, 800);

      // ─── PIPELINE PULSE ───
      const pipelineBox = document.querySelector('.pipeline-box');
      setInterval(() => {
        pipelineBox.style.boxShadow = '0 0 60px rgba(255,255,255,0.12), inset 0 0 30px rgba(255,255,255,0.03)';
        setTimeout(() => { pipelineBox.style.boxShadow = '0 0 40px rgba(255,255,255,0.06), inset 0 0 30px rgba(255,255,255,0.02)'; }, 400);
      }, 1800);

      // ─── SIGNATURE FIELD HIGHLIGHT ───
      const sigFields = ['demo-name', 'demo-title', 'demo-company', 'demo-phone', 'demo-email'].map(id => document.getElementById(id));
      let sigIdx = 0;
      setInterval(() => {
        sigFields.forEach(f => { if (f) { f.style.background = 'rgba(255,255,255,0.06)'; f.style.boxShadow = 'none'; } });
        if (sigFields[sigIdx]) {
          sigFields[sigIdx].style.background = 'rgba(255,255,255,0.18)';
          sigFields[sigIdx].style.boxShadow = '0 0 10px rgba(255,255,255,0.12)';
          setTimeout(() => { if (sigFields[sigIdx]) { sigFields[sigIdx].style.background = 'rgba(255,255,255,0.06)'; sigFields[sigIdx].style.boxShadow = 'none'; } }, 700);
        }
        sigIdx = (sigIdx + 1) % sigFields.length;
      }, 900);
    })();
