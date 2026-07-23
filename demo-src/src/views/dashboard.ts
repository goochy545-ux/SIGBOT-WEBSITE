import { contacts, getTopCompany, getTopRole, getTimeAgo, getInitials, getAvatarColor } from '../data';

export function renderDashboard(container: HTMLElement): void {
    const recentContacts = [...contacts]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5);

    const topCompany = getTopCompany();
    const topRole = getTopRole();

    container.innerHTML = `
    <div class="dashboard-view">
      <!-- Stat Cards -->
      <div class="stat-cards">
        <div class="stat-card">
          <div class="stat-label">TOTAL CONTACTS</div>
          <div class="stat-value">${contacts.length}</div>
          <div class="stat-trend positive">↑ 100% this week</div>
          <div class="stat-icon">👥</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOP COMPANY</div>
          <div class="stat-value company-name">${topCompany}</div>
          <div class="stat-trend">Most frequent</div>
          <div class="stat-icon">🏢</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOP ROLE</div>
          <div class="stat-value role-name">${topRole}</div>
          <div class="stat-trend">Most frequent</div>
          <div class="stat-icon">💼</div>
        </div>
      </div>

      <!-- Recently Added -->
      <div class="widget recently-added">
        <h3>RECENTLY ADDED</h3>
        <div class="recent-list">
          ${recentContacts.map(c => {
        const initials = getInitials(c);
        const color = getAvatarColor(c.firstName + c.lastName);
        const name = c.firstName + ' ' + c.lastName;
        return `
              <div class="recent-item">
                <div class="recent-left">
                  <div class="avatar" style="background: ${color}">${initials}</div>
                  <div class="recent-info">
                    <div class="recent-name">${name}</div>
                    <div class="recent-meta">${c.company} · ${getTimeAgo(c.createdAt)}</div>
                  </div>
                </div>
              </div>
            `;
    }).join('')}
        </div>
      </div>

      <!-- Growth Timeline -->
      <div class="widget growth-timeline">
        <h3>GROWTH TIMELINE</h3>
        <div class="chart-container">
          <canvas id="growth-chart"></canvas>
        </div>
      </div>
    </div>
  `;

    // Draw chart
    requestAnimationFrame(() => drawGrowthChart());
}

function drawGrowthChart(): void {
    const canvas = document.getElementById('growth-chart') as HTMLCanvasElement;
    if (!canvas) return;

    const container = canvas.parentElement!;
    canvas.width = container.clientWidth;
    canvas.height = 200;

    const ctx = canvas.getContext('2d')!;
    const w = canvas.width;
    const h = canvas.height;
    const pad = { top: 20, right: 20, bottom: 30, left: 40 };

    // Generate data points from contacts
    const now = Date.now();
    const dayMs = 86400000;
    const days = 30;
    const counts: number[] = [];

    for (let i = days; i >= 0; i--) {
        const dayEnd = now - i * dayMs;
        const count = contacts.filter(c => new Date(c.createdAt).getTime() <= dayEnd).length;
        counts.push(count);
    }

    const maxVal = Math.max(...counts, 10);
    const yTicks = [0, Math.round(maxVal * 0.25), Math.round(maxVal * 0.5), Math.round(maxVal * 0.75), maxVal];

    // Grid lines and y-axis labels
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#9ca3af';
    ctx.textAlign = 'right';

    yTicks.forEach(tick => {
        const y = pad.top + (1 - tick / maxVal) * (h - pad.top - pad.bottom);
        ctx.beginPath();
        ctx.moveTo(pad.left, y);
        ctx.lineTo(w - pad.right, y);
        ctx.stroke();
        ctx.fillText(String(tick), pad.left - 8, y + 4);
    });

    // Draw line
    const stepX = (w - pad.left - pad.right) / (counts.length - 1);

    // Area fill
    ctx.beginPath();
    counts.forEach((val, i) => {
        const x = pad.left + i * stepX;
        const y = pad.top + (1 - val / maxVal) * (h - pad.top - pad.bottom);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.lineTo(pad.left + (counts.length - 1) * stepX, h - pad.bottom);
    ctx.lineTo(pad.left, h - pad.bottom);
    ctx.closePath();
    ctx.fillStyle = 'rgba(74, 222, 128, 0.08)';
    ctx.fill();

    // Line
    ctx.beginPath();
    counts.forEach((val, i) => {
        const x = pad.left + i * stepX;
        const y = pad.top + (1 - val / maxVal) * (h - pad.top - pad.bottom);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#4ade80';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dots
    counts.forEach((val, i) => {
        if (i % 5 !== 0 && i !== counts.length - 1) return;
        const x = pad.left + i * stepX;
        const y = pad.top + (1 - val / maxVal) * (h - pad.top - pad.bottom);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#4ade80';
        ctx.fill();
    });
}
