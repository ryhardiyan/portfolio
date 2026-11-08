/**
 * Application Navigation & Dynamic Glass Surface Controller
 */
const cachedApps = {};
let currentApp = 'home';

// Fetch template content asynchronously
async function loadAppTemplate(appName) {
    if (cachedApps[appName]) return cachedApps[appName];
    
    try {
        const response = await fetch(`frontend/html/${appName}_apps_mid.html`);
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const html = await response.text();
        cachedApps[appName] = html;
        return html;
    } catch (err) {
        console.warn(`Could not load via fetch (${err}), using inline fallback.`);
        return getFallbackContent(appName);
    }
}

// Fallback in case opened locally via file:// without http server
function getFallbackContent(appName) {
    if (appName === 'home') {
        return `
        <div class="home-dashboard-wrapper">
            <div class="home-hero-card">
                <div>
                    <div class="hero-profile-row">
                        <div class="hero-avatar-wrapper">
                            <img src="frontend/assets/profile.jpg" alt="Rahardiyan">
                            <div class="hero-status-pill"></div>
                        </div>
                        <div class="hero-titles">
                            <h2>Rahardiyan Yoga Pratama</h2>
                            <div class="hero-subtitle"><i class="fa-solid fa-code"></i> Backend & Web Developer</div>
                        </div>
                    </div>
                    <p class="hero-bio-text">Web & Backend Developer asal Boyolali, Jawa Tengah. Fokus pada sistem backend tangguh, arsitektur RESTful API, otomasi server Linux, dan aplikasi web modern.</p>
                    <div class="hero-stats-grid">
                        <div class="stat-item"><div class="stat-number">3+</div><div class="stat-label">Tahun Ngoding</div></div>
                        <div class="stat-item"><div class="stat-number">10+</div><div class="stat-label">Proyek</div></div>
                        <div class="stat-item"><div class="stat-number">99%</div><div class="stat-label">Uptime</div></div>
                    </div>
                </div>
                <div class="hero-action-row">
                    <button class="btn-primary" onclick="switchApp('project')"><i class="fa-solid fa-folder-open"></i> Lihat Portofolio</button>
                    <button class="btn-secondary" onclick="switchApp('biodata')"><i class="fa-solid fa-id-card"></i> CV & Riwayat</button>
                </div>
            </div>
            <div class="home-sidebar-col">
                <div class="side-card">
                    <div class="side-card-title"><span>TECH STACK</span><i class="fa-solid fa-microchip"></i></div>
                    <div class="tech-pills-wrap">
                        <span class="tech-tag"><i class="devicon-nodejs-plain colored"></i> Node.js</span>
                        <span class="tech-tag"><i class="devicon-express-original"></i> Express</span>
                        <span class="tech-tag"><i class="devicon-go-original-wordmark colored"></i> Go</span>
                        <span class="tech-tag"><i class="devicon-postgresql-plain colored"></i> PostgreSQL</span>
                        <span class="tech-tag"><i class="devicon-linux-plain colored"></i> Linux</span>
                    </div>
                </div>
                <div class="side-card">
                    <div class="side-card-title"><span>CONNECT & SOCIAL</span><i class="fa-solid fa-globe"></i></div>
                    <div class="social-links-grid">
                        <a class="social-button whatsapp" href="https://api.whatsapp.com/send/?phone=6282323780821" target="_blank"><i class="fab fa-whatsapp"></i><span>WhatsApp</span></a>
                        <a class="social-button github" href="https://github.com/ryhardiyan" target="_blank"><i class="fab fa-github"></i><span>GitHub</span></a>
                        <a class="social-button instagram" href="https://www.instagram.com/rahardiyanaa" target="_blank"><i class="fab fa-instagram"></i><span>Instagram</span></a>
                    </div>
                </div>
            </div>
        </div>`;
    }
    return `<div style="padding: 24px;">Konten sedang dimuat...</div>`;
}

async function switchApp(appName) {
    currentApp = appName;
    const contentSlot = document.getElementById('app-content-slot');
    if (!contentSlot) return;

    // Update active nav button
    document.querySelectorAll('.nav-tab').forEach((tab) => {
        tab.classList.remove('active');
    });
    const targetTab = document.getElementById(`spawn-app-${appName}`);
    if (targetTab) targetTab.classList.add('active');

    // Load content
    const html = await loadAppTemplate(appName);
    contentSlot.innerHTML = html;

    // Terminal autofocus
    if (appName === 'termux') {
        setTimeout(focusTerminalInput, 50);
    }
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
    switchApp('home');
});
