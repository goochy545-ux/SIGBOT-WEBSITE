import './style.css';
import { renderDashboard } from './views/dashboard';
import { renderContacts } from './views/contacts';
import { renderMap } from './views/map';
import { openAddContactModal } from './views/addContact';

type View = 'dashboard' | 'contacts' | 'map';

function init(): void {
  const app = document.getElementById('app')!;
  app.innerHTML = `
    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-brand">SIGBOT</div>
      <nav class="sidebar-nav">
        <a href="#" class="nav-link active" data-view="dashboard">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          Dashboard
        </a>
        <a href="#" class="nav-link" data-view="contacts">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          Contacts
          <span class="nav-badge">+</span>
        </a>
        <a href="#" class="nav-link" data-view="map">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z"/></svg>
          Map
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="sidebar-section">
          <div class="section-title">EMAIL PROVIDERS</div>
          <div class="provider-list">
            <span class="provider-dot outlook"></span> Outlook
            <span class="provider-dot gmail"></span> Gmail
            <span class="provider-dot imap"></span> IMAP
          </div>
        </div>
        <div class="sidebar-link">✉ Feedback</div>
        <div class="sidebar-link">★ Light</div>
      </div>
    </aside>

    <!-- Main content area -->
    <main class="main-area">
      <header class="top-bar">
        <div class="top-bar-left">
          <button class="hamburger" id="hamburger-btn">☰</button>
          <span class="page-label" id="page-label">DASHBOARD</span>
          <div class="search-wrapper">
            <input type="text" placeholder="Search contacts.." class="search-input" />
          </div>
        </div>
        <div class="top-bar-right">
          <button class="btn-add-contact" id="btn-add-contact">+ Add Contact</button>
          <button class="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Add Data ▾
          </button>
          <div class="user-avatar">AG</div>
        </div>
      </header>

      <div class="content" id="content">
        <!-- Views render here -->
      </div>
    </main>
  `;

  // Setup navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = (link as HTMLElement).dataset.view as View;
      switchView(view);
    });
  });

  // Add Contact button
  document.getElementById('btn-add-contact')?.addEventListener('click', () => {
    openAddContactModal();
  });

  // Hamburger for mobile
  document.getElementById('hamburger-btn')?.addEventListener('click', () => {
    document.getElementById('sidebar')?.classList.toggle('open');
  });

  // Initial render
  switchView('dashboard');
}

function switchView(view: View): void {
  const content = document.getElementById('content')!;
  const label = document.getElementById('page-label')!;

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', (link as HTMLElement).dataset.view === view);
  });

  // Update page label
  label.textContent = view.toUpperCase();

  // Close mobile sidebar
  document.getElementById('sidebar')?.classList.remove('open');

  // Render view
  switch (view) {
    case 'dashboard':
      renderDashboard(content);
      break;
    case 'contacts':
      renderContacts(content);
      break;
    case 'map':
      renderMap(content);
      break;
  }
}

// Boot
document.addEventListener('DOMContentLoaded', init);
