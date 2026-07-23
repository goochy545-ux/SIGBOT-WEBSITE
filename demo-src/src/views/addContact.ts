export function openAddContactModal(): void {
    // Remove existing modal if any
    const existing = document.getElementById('add-contact-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'add-contact-modal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Add Contact</h2>
        <button class="modal-close" id="modal-close-btn">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-row">
          <div class="form-group">
            <label>FIRST NAME</label>
            <input type="text" placeholder="John" />
          </div>
          <div class="form-group">
            <label>LAST NAME</label>
            <input type="text" placeholder="Doe" />
          </div>
        </div>
        <div class="form-group full">
          <label>EMAIL</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div class="form-group full">
          <label>COMPANY</label>
          <input type="text" placeholder="Acme Inc" />
        </div>
        <div class="form-group full">
          <label>JOB TITLE</label>
          <input type="text" placeholder="Software Engineer" />
        </div>
        <div class="form-group full">
          <label>WEBSITE <span class="auto-scan-badge">✨ Auto-Scan</span></label>
          <input type="url" placeholder="www.example.com" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>PHONE</label>
            <input type="tel" placeholder="+1 555-0199" />
          </div>
          <div class="form-group">
            <label>MOBILE</label>
            <input type="tel" placeholder="+1 555-9999" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>SECTOR</label>
            <input type="text" placeholder="e.g. Construction" />
          </div>
          <div class="form-group">
            <label>BUSINESS TYPE</label>
            <input type="text" placeholder="e.g. Security Firm" />
          </div>
        </div>
        <div class="form-group full">
          <label>LOCATION / ADDRESS</label>
          <input type="text" placeholder="123 Main St, City" />
        </div>
        <div class="form-group full">
          <label>TAGS</label>
          <input type="text" placeholder="Add tags separated by commas (e.g. VIP, Client, Lead)" />
        </div>
        <div class="form-group full">
          <label>NOTES</label>
          <textarea placeholder="Add notes about this contact..." rows="3"></textarea>
        </div>
      </div>
    </div>
  `;

    document.body.appendChild(overlay);

    // Close handlers
    document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', handleEsc);
}

function closeModal(): void {
    const modal = document.getElementById('add-contact-modal');
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => modal.remove(), 200);
    }
    document.removeEventListener('keydown', handleEsc);
}

function handleEsc(e: KeyboardEvent): void {
    if (e.key === 'Escape') closeModal();
}
