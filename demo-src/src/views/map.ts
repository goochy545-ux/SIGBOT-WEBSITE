import { contacts } from '../data';

declare const L: any;

let map: any = null;
let clusterGroup: any = null;

export function renderMap(container: HTMLElement): void {
    container.innerHTML = `
    <div class="map-view">
      <div id="map-container"></div>
      <div class="map-controls">
        <button class="map-control-btn active" id="heatmap-btn">🔥 Heatmap</button>
        <button class="map-control-btn" id="home-btn">home</button>
      </div>
    </div>
  `;

    requestAnimationFrame(() => initMap());
}

function initMap(): void {
    const container = document.getElementById('map-container');
    if (!container) return;

    // Clean up previous map instance
    if (map) {
        map.remove();
        map = null;
        clusterGroup = null;
    }

    map = L.map(container, {
        center: [49.0, -105.0],
        zoom: 4,
        zoomControl: false
    });

    // Dark CARTO tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Zoom controls - bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Marker cluster
    clusterGroup = L.markerClusterGroup({
        maxClusterRadius: 50,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        iconCreateFunction: (cluster: any) => {
            const count = cluster.getChildCount();
            return L.divIcon({
                html: `<div class="cluster-icon">${count}</div>`,
                className: 'custom-cluster',
                iconSize: L.point(40, 40)
            });
        }
    });

    // Add markers
    const orangeIcon = L.divIcon({
        html: '<div class="marker-dot"></div>',
        className: 'custom-marker',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
    });

    contacts.forEach(c => {
        if (c.latitude && c.longitude) {
            const marker = L.marker([c.latitude, c.longitude], { icon: orangeIcon });
            marker.bindPopup(`
        <div class="map-popup">
          <strong>${c.firstName} ${c.lastName}</strong><br>
          <span>${c.company}</span><br>
          <span>${c.jobTitle}</span>
        </div>
      `);
            clusterGroup.addLayer(marker);
        }
    });

    map.addLayer(clusterGroup);

    // Home button
    document.getElementById('home-btn')?.addEventListener('click', () => {
        map.setView([49.0, -105.0], 4);
    });
}
