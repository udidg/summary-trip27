/**
 * תכנון טיול קיץ 2027 – גל ואודי דגן
 * קובץ הלוגיקה והאינטראקטיביות (JavaScript)
 */

let currentActiveTab = 'tab-florida';

// --- מנוע הרינדור מתוך TRIP_DATA ---

function renderAll() {
  if (typeof TRIP_DATA === 'undefined') {
    console.error('TRIP_DATA is not loaded!');
    return;
  }
  renderDestinationHub();
  renderStickySwitcher();
  renderItineraries();
  renderCostsTable();
  renderFlightPills();
  renderPrinciples();
  renderDecisionBox();
  renderSideMenuContent();
}

function renderDestinationHub() {
  const container = document.getElementById('destinationCardsGrid');
  if (!container) return;

  container.innerHTML = TRIP_DATA.destinations.map(d => `
    <div class="dest-card ${d.id === currentActiveTab ? 'active' : ''}" data-tab="${d.id}" onclick="showTab('${d.id}', false)">
      <div>
        <div class="dest-card-top">
          <div class="dest-title-group">
            <span class="dest-icon">${d.icon}</span>
            <div>
              <div class="dest-name">${d.name}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">${d.sub}</div>
            </div>
          </div>
          <span class="dest-badge ${d.isCandidate ? 'candidate' : ''}">
            ${d.isCandidate ? d.candidateBadge : (d.id === currentActiveTab ? 'נבחר כעת ✓' : 'הקש לבחירה')}
          </span>
        </div>
        <div class="dest-desc">${d.desc}</div>
        <div class="dest-tags">
          ${d.tags.map(t => `<span class="dest-tag ${t.cls || ''}" ${t.style ? `style="${t.style}"` : ''}>${t.text}</span>`).join('')}
        </div>
      </div>
      <div class="dest-cta">
        <span>צפה במפרט המסלול</span>
        <span class="dest-cta-indicator">👈</span>
      </div>
    </div>
  `).join('');
}

function renderStickySwitcher() {
  const container = document.getElementById('stickySwitcher');
  if (!container) return;

  container.innerHTML = `
    <div class="sticky-pills-wrap">
      <button class="sticky-pill menu-trigger-pill" onclick="openSideMenu()" title="פתיחת תפריט ניווט מלא" style="background: #1e293b; color: white; border-color: #334155;">
        <span>☰ תפריט</span>
      </button>
      ${TRIP_DATA.destinations.map(d => `
        <button class="sticky-pill ${d.id === currentActiveTab ? 'active' : ''}" data-tab="${d.id}" onclick="showTab('${d.id}', true)">
          <span>${d.icon} ${d.shortName}</span>
          <span style="font-size: 0.75rem; opacity: 0.85;">(${d.costBadge})</span>
        </button>
      `).join('')}
    </div>
    <button class="sticky-top-jump" onclick="jumpToItineraryTop()" title="חזרה לראש המסלול המפורט">
      <span>🔝 לראש המסלול</span>
    </button>
  `;
}

function renderItineraries() {
  const container = document.getElementById('itinerarySection');
  if (!container) return;

  container.innerHTML = TRIP_DATA.destinations.map(d => `
    <div id="${d.id}" class="tab-content ${d.id === currentActiveTab ? 'active' : ''}">
      ${d.candidateBanner ? `
        <div style="background: #fefce8; border: 1.5px solid #fde047; padding: 16px 20px; border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; gap: 14px;">
          <span style="font-size: 2.2rem; flex-shrink: 0;">${d.candidateBanner.icon}</span>
          <div>
            <h4 style="color: #854d0e; font-size: 1.08rem; margin-bottom: 4px; font-weight: 800;">${d.candidateBanner.title}</h4>
            <p style="color: #a16207; font-size: 0.88rem; margin: 0; line-height: 1.5;">${d.candidateBanner.desc}</p>
          </div>
        </div>
      ` : ''}

      <h3 style="margin-bottom: 6px;">${d.title}</h3>
      <p style="color: var(--text-muted); margin-bottom: 20px;">${d.subtitle}</p>

      <!-- Flight Filter Box -->
      <div class="tab-flight-box" ${d.flightBox.boxStyle ? `style="${d.flightBox.boxStyle}"` : ''}>
        <div class="tab-flight-header">
          <span ${d.flightBox.titleStyle ? `style="${d.flightBox.titleStyle}"` : ''}>${d.flightBox.title}</span>
          <span class="tab-flight-badge" ${d.flightBox.badgeStyle ? `style="${d.flightBox.badgeStyle}"` : ''}>${d.flightBox.badge}</span>
        </div>
        <div class="tab-flight-desc" ${d.flightBox.descStyle ? `style="${d.flightBox.descStyle}"` : ''}>
          ${d.flightBox.desc}
        </div>
        ${d.flightBox.timingNote ? `
          <div class="tab-flight-timing" ${d.flightBox.timingStyle ? `style="${d.flightBox.timingStyle}"` : ''}>
            <span style="font-size: 1.1rem; line-height: 1;">⏰</span>
            <div>${d.flightBox.timingNote}</div>
          </div>
        ` : ''}
        <a href="${d.flightBox.url}" target="_blank" rel="noopener" class="tab-flight-btn" ${d.flightBox.btnStyle ? `style="${d.flightBox.btnStyle}"` : ''}>
          ${d.flightBox.btnText}
        </a>
        ${d.flightBox.secondaryBtn ? `
          <a href="${d.flightBox.secondaryBtn.url}" target="_blank" rel="noopener" class="tab-flight-btn" ${d.flightBox.secondaryBtn.btnStyle ? `style="${d.flightBox.secondaryBtn.btnStyle}"` : ''}>
            ${d.flightBox.secondaryBtn.btnText}
          </a>
        ` : ''}
      </div>

      <!-- Extra Feature Showcases -->
      ${(d.extraFeatureBoxes || []).join('\n')}

      <!-- Itinerary Blocks -->
      ${d.blocks.map(b => `
        <div class="itinerary-block">
          <div class="block-header">
            <span class="block-badge" ${b.badgeStyle ? `style="${b.badgeStyle}"` : ''}>${b.badge}</span>
            <span class="block-title">${b.title}</span>
            <span class="block-meta">${b.meta}</span>
            ${b.photoKey ? `
              <button class="photo-btn" onclick="openPhotoModal('${b.photoKey}')">${b.photoBtnText || '📸 הצג תמונות'}</button>
            ` : ''}
          </div>
          <div class="day-list">
            ${b.days.map(day => `
              <div class="day-card ${day.cardClass || ''}" ${day.cardStyle ? `style="${day.cardStyle}"` : ''}>
                <div class="day-title">
                  <span>${day.title}</span>
                  ${day.tag ? `<span class="drive-tag ${day.tagClass || ''}">${day.tag}</span>` : ''}
                </div>
                <div class="day-desc">${day.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderCostsTable() {
  const wrapper = document.getElementById('costsTableWrapper');
  if (!wrapper) return;

  const ct = TRIP_DATA.costsTable;
  wrapper.innerHTML = `
    <table class="comparison-table">
      <thead>
        <tr>
          ${ct.headers.map((h, i) => i === 0 ? `
            <th style="width: 20%;">${h.name}</th>
          ` : `
            <th ${h.isCandidate ? 'style="background: #fefce8; border-bottom: 2px solid #eab308;"' : ''}>
              ${h.icon} ${h.name}<br>
              <button class="table-jump-btn" ${h.isCandidate ? 'style="background: #fef08a; color: #854d0e; border-color: #fde047;"' : ''} onclick="showTab('${h.tabId}', true)">צפה במסלול 👈</button>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        ${ct.rows.map(r => `
          <tr ${r.rowStyle ? `style="${r.rowStyle}"` : ''} class="${r.isTotalUSD ? 'total-row' : ''} ${r.isTotalILS ? 'total-row-ils' : ''}">
            <td>
              <strong>${r.category}</strong>
              ${r.catSub ? `<br><span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">${r.catSub}</span>` : ''}
            </td>
            ${r.cols.map(c => `
              <td ${c.style ? `style="${c.style}"` : ''}>
                ${c.text}
                ${c.linkText ? `<br><a href="${c.url}" target="_blank" rel="noopener" class="table-flight-link" ${c.linkStyle ? `style="${c.linkStyle}"` : ''}>${c.linkText}</a>` : ''}
              </td>
            `).join('')}
          </tr>
        `).join('')}
        <tr style="background: #f8fafc;">
          <td><strong>ניווט ישיר לתוכנית יומית</strong></td>
          ${TRIP_DATA.destinations.map(d => `
            <td>
              <button class="table-jump-btn" ${d.isCandidate ? 'style="background: #fef08a; color: #854d0e; border-color: #fde047;"' : ''} onclick="showTab('${d.id}', true)">פתיחת ${d.shortName} 👈</button>
            </td>
          `).join('')}
        </tr>
      </tbody>
    </table>
  `;
}

function renderFlightPills() {
  const wrapper = document.getElementById('flightLinksWrapper');
  if (!wrapper) return;

  wrapper.innerHTML = `
    <div class="flight-links-grid">
      ${TRIP_DATA.flightPills.map(p => `
        <a href="${p.url}" target="_blank" rel="noopener" class="flight-pill" ${p.style ? `style="${p.style}"` : ''}>
          ${p.label}
        </a>
      `).join('')}
    </div>
  `;
}

function renderPrinciples() {
  const wrapper = document.getElementById('principlesWrapper');
  if (!wrapper) return;

  wrapper.innerHTML = `
    <div class="formula-grid">
      ${TRIP_DATA.principles.map(p => `
        <div class="formula-item ${p.cls || ''}" ${p.style ? `style="${p.style}"` : ''}>
          <strong>${p.title}</strong>
          <span>${p.desc}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderDecisionBox() {
  const box = document.getElementById('decisionCard');
  if (!box) return;

  box.innerHTML = `
    <h3>${TRIP_DATA.conclusion.title}</h3>
    <p>
      ${TRIP_DATA.conclusion.points.join('<br>\n')}
    </p>
    <div class="actions-bar">
      <button class="btn btn-print" onclick="window.print()">🖨️ הדפסה / שמירה כ-PDF לשיתוף</button>
    </div>
  `;
}

function renderSideMenuContent() {
  const destList = document.getElementById('sideMenuDestinations');
  if (destList) {
    destList.innerHTML = TRIP_DATA.destinations.map(d => `
      <button class="menu-dest-item ${d.isCandidate ? 'candidate' : ''} ${d.id === currentActiveTab ? 'active' : ''}" data-tab="${d.id}" onclick="navigateToTab('${d.id}')">
        <div class="menu-dest-item-main">
          <span class="menu-dest-icon">${d.icon}</span>
          <div>
            <div class="menu-dest-name">${d.name} ${d.isCandidate ? '(אופציה חדשה)' : ''}</div>
            <div class="menu-dest-sub">${d.sub}</div>
          </div>
        </div>
        <div>
          <span class="menu-dest-badge ${d.isCandidate ? 'candidate' : ''}">${d.costBadge}</span>
        </div>
      </button>
    `).join('');
  }

  const flightGrid = document.getElementById('sideMenuFlights');
  if (flightGrid) {
    flightGrid.innerHTML = TRIP_DATA.flightPills.map(p => `
      <a href="${p.url}" target="_blank" rel="noopener" class="menu-flight-link" ${p.style ? `style="${p.style}"` : ''}>
        <span>${p.label}</span>
      </a>
    `).join('');
  }

  const costGrid = document.getElementById('sideMenuCostsGrid');
  if (costGrid) {
    costGrid.innerHTML = TRIP_DATA.destinations.map(d => `
      <div class="menu-cost-box" ${d.isCandidate ? 'style="background: #fefce8; border-color: #fde047;"' : ''}>
        <div class="name" ${d.isCandidate ? 'style="color: #854d0e;"' : ''}>${d.icon} ${d.shortName}</div>
        <div class="cost" ${d.isCandidate ? 'style="color: #b45309;"' : (d.id === 'tab-austria' ? 'style="color: #16a34a;"' : '')}>${d.costBadge}</div>
      </div>
    `).join('');
  }
}

// --- לוגיקת אינטראקטיביות, טאבים ומודאלים ---

function showTab(tabId, shouldScroll = false) {
  currentActiveTab = tabId;

  // Tabs
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  // Destination cards
  document.querySelectorAll('.dest-card').forEach(el => {
    const isTarget = el.getAttribute('data-tab') === tabId;
    el.classList.toggle('active', isTarget);
    const badge = el.querySelector('.dest-badge');
    if (badge && !badge.classList.contains('candidate')) {
      badge.textContent = isTarget ? 'נבחר כעת ✓' : 'הקש לבחירה';
    }
  });

  // Sticky pills
  document.querySelectorAll('.sticky-pill').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-tab') === tabId);
  });

  // Side menu items
  updateSideMenuActiveTab(tabId);

  // Update URL hash
  if (history.replaceState) {
    history.replaceState(null, null, '#' + tabId);
  }

  // Smooth scroll if requested
  if (shouldScroll) {
    const sec = document.getElementById('itinerarySection');
    if (sec) {
      const yOffset = -20;
      const y = sec.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}

function jumpToItineraryTop() {
  const sec = document.getElementById('itinerarySection');
  if (sec) {
    const yOffset = -15;
    const y = sec.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// Side Menu Drawer Controls
function openSideMenu() {
  const drawer = document.getElementById('sideMenu');
  const backdrop = document.getElementById('sideMenuBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('menu-open');
  }
}

function closeSideMenu() {
  const drawer = document.getElementById('sideMenu');
  const backdrop = document.getElementById('sideMenuBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
}

function navigateToTab(tabId) {
  closeSideMenu();
  showTab(tabId, true);
}

function navigateToSection(sectionId) {
  closeSideMenu();
  const el = document.getElementById(sectionId);
  if (el) {
    const yOffset = -20;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function updateSideMenuActiveTab(tabId) {
  document.querySelectorAll('.menu-dest-item').forEach(item => {
    if (item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Photo Modal Functions
function openPhotoModal(stageKey) {
  const photosData = (typeof TRIP_DATA !== 'undefined' && TRIP_DATA.stagePhotos) ? TRIP_DATA.stagePhotos : {};
  const stage = photosData[stageKey];
  if (!stage) return;

  document.getElementById('modalTitle').textContent = stage.title;
  const gallery = document.getElementById('modalGallery');
  gallery.innerHTML = '';

  stage.photos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.title}" loading="lazy" class="gallery-img">
      <div class="gallery-info">
        <h4 class="gallery-photo-title">${photo.title}</h4>
        <p class="gallery-desc">${photo.desc}</p>
      </div>
    `;
    gallery.appendChild(card);
  });

  const modal = document.getElementById('photoModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
  const modal = document.getElementById('photoModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnBg(event) {
  if (event.target === document.getElementById('photoModal')) {
    closePhotoModal();
  }
}

// Keyboard ESC listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePhotoModal();
    closeSideMenu();
  }
});

// Mobile touch swipe listener
let touchStartX = 0;
let touchEndX = 0;
const sideMenuEl = document.getElementById('sideMenu');
if (sideMenuEl) {
  sideMenuEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  sideMenuEl.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 60) {
      closeSideMenu();
    }
  }, { passive: true });
}

// Initialization on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  renderAll();

  // Check URL hash
  const hash = window.location.hash.replace('#', '');
  if (hash && (hash === 'tab-florida' || hash === 'tab-ny-pa' || hash === 'tab-austria' || hash === 'tab-korea')) {
    showTab(hash, false);
  } else {
    showTab('tab-florida', false);
  }
});
