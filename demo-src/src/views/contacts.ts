import { contacts, getInitials, getAvatarColor } from '../data';

export function renderContacts(container: HTMLElement): void {
    const columns = [
        { key: 'name', label: 'NAME' },
        { key: 'email', label: 'EMAIL' },
        { key: 'company', label: 'COMPANY' },
        { key: 'jobTitle', label: 'JOB ROLE' },
        { key: 'phone', label: 'PHONE' },
        { key: 'location', label: 'LOCATION' }
    ];

    container.innerHTML = `
    <div class="contacts-view">
      <div class="contacts-toolbar">
        <button class="columns-btn" id="columns-btn">Columns ▾</button>
        <div class="toolbar-right">
          <button class="export-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export ▾
          </button>
          <button class="more-btn">⋯</button>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="contacts-table" id="contacts-table">
          <thead>
            <tr>
              <th class="th-check"><input type="checkbox" id="select-all" /></th>
              ${columns.map(col => `<th class="th-${col.key}">${col.label}</th>`).join('')}
            </tr>
          </thead>
          <tbody id="contacts-tbody">
          </tbody>
        </table>
      </div>
    </div>
  `;

    renderRows();
    setupSelectAll();
}

function renderRows(): void {
    const tbody = document.getElementById('contacts-tbody');
    if (!tbody) return;

    tbody.innerHTML = contacts.map((c, idx) => {
        const initials = getInitials(c);
        const color = getAvatarColor(c.firstName + c.lastName);
        const name = c.firstName + ' ' + c.lastName;

        return `
      <tr data-idx="${idx}">
        <td class="td-check"><input type="checkbox" class="row-check" /></td>
        <td class="td-name">
          <div class="name-cell">
            <div class="avatar-sm" style="background: ${color}">${initials}</div>
            <div class="name-info">
              <span class="contact-name">${name}</span>
              <span class="source-badge">${c.source}</span>
            </div>
          </div>
        </td>
        <td class="td-email">${c.email}</td>
        <td class="td-company">${c.company}</td>
        <td class="td-job">${c.jobTitle}</td>
        <td class="td-phone">${c.phone}</td>
        <td class="td-location">${c.location}</td>
      </tr>
    `;
    }).join('');
}

function setupSelectAll(): void {
    const selectAll = document.getElementById('select-all') as HTMLInputElement;
    if (!selectAll) return;

    selectAll.addEventListener('change', () => {
        const checks = document.querySelectorAll<HTMLInputElement>('.row-check');
        checks.forEach(cb => cb.checked = selectAll.checked);
    });
}
