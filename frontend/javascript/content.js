/**
 * Application Content Registry & Sections Renderer
 * Complete data for Rahardiyan Yoga Pratama (RyharDev)
 */

const SECTIONS = {
    // 01. HOME
    home: `
    <div class="section-container">
        <div class="home-grid-layout">
            <!-- Left Hero Column -->
            <div class="hero-main-card">
                <div>
                    <div class="hero-user-row">
                        <div class="hero-avatar-frame">
                            <img src="frontend/assets/profile.jpg" alt="Rahardiyan Yoga Pratama">
                            <div class="hero-online-dot" title="Available for Projects"></div>
                        </div>
                        <div class="hero-title-box">
                            <h1>Rahardiyan Yoga Pratama</h1>
                            <div class="hero-tagline">
                                <i class="fa-solid fa-code"></i>
                                <span>Web Developer · JavaScript Developer · Bot Developer</span>
                            </div>
                            <div class="hero-meta-subtitle">Central Java, Indonesia · Independent Developer</div>
                        </div>
                    </div>

                    <p class="hero-headline-desc">
                        Halo! Saya <strong>Rahardiyan (RyharDev)</strong>. Membangun pengalaman digital, aplikasi yang bermanfaat, sistem otomasi, dan solusi berbasis web. Berfokus pada arsitektur sistem yang stabil, kode yang bersih, dan pemecahan masalah praktis dalam kehidupan sehari-hari.
                    </p>

                    <div class="hero-stats-row">
                        <div class="hero-stat-box">
                            <div class="stat-val">3+</div>
                            <div class="stat-desc">Tahun Ngoding</div>
                        </div>
                        <div class="hero-stat-box">
                            <div class="stat-val">10+</div>
                            <div class="stat-desc">Proyek Dibuat</div>
                        </div>
                        <div class="hero-stat-box">
                            <div class="stat-val">99.9%</div>
                            <div class="stat-desc">Dedikasi Solusi</div>
                        </div>
                    </div>
                </div>

                <div class="hero-action-buttons">
                    <button class="btn-modern" onclick="navigateSection('projects')">
                        <i class="fa-solid fa-layer-group"></i> Jelajahi Proyek
                    </button>
                    <button class="btn-glass-sub" onclick="openProjectModal('lutopup')">
                        <i class="fa-solid fa-star"></i> Proyek Unggulan (LUTOPUP)
                    </button>
                    <button class="btn-glass-sub" onclick="navigateSection('about')">
                        <i class="fa-solid fa-user"></i> Tentang Saya
                    </button>
                </div>
            </div>

            <!-- Right Column Cards -->
            <div class="home-side-col">
                <!-- Quick Info Box -->
                <div class="glass-box">
                    <div class="box-heading">
                        <i class="fa-solid fa-id-badge"></i>
                        <h3>Informasi Pengembang</h3>
                    </div>
                    <div class="biodata-kv-list">
                        <div class="kv-row">
                            <span class="kv-key">Nama Lengkap</span>
                            <span class="kv-val">Rahardiyan Yoga Pratama</span>
                        </div>
                        <div class="kv-row">
                            <span class="kv-key">Alias / Panggilan</span>
                            <span class="kv-val">RyharDev (@ryhardev)</span>
                        </div>
                        <div class="kv-row">
                            <span class="kv-key">Domisili</span>
                            <span class="kv-val">Boyolali, Jawa Tengah</span>
                        </div>
                        <div class="kv-row">
                            <span class="kv-key">Bidang</span>
                            <span class="kv-val">Web & Software Development</span>
                        </div>
                        <div class="kv-row">
                            <span class="kv-key">Portofolio Live</span>
                            <span class="kv-val"><a href="https://rahardiyan.is-a.ceo/" target="_blank" style="color:var(--secondary); text-decoration:none;">rahardiyan.is-a.ceo</a></span>
                        </div>
                    </div>
                </div>

                <!-- Connect & Social Card -->
                <div class="glass-box">
                    <div class="box-heading">
                        <i class="fa-solid fa-share-nodes"></i>
                        <h3>Hubungi & Terhubung</h3>
                    </div>
                    <div class="social-grid-buttons">
                        <a class="social-card-btn whatsapp" href="https://api.whatsapp.com/send/?phone=6282323780821&text=Assalamualaikum+Mas" target="_blank" rel="noopener">
                            <i class="fab fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>
                        <a class="social-card-btn github" href="https://github.com/ryhardiyan" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a class="social-card-btn instagram" href="https://www.instagram.com/rahardiyanaa" target="_blank" rel="noopener">
                            <i class="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a class="social-card-btn email" href="mailto:ryhardev@gmail.com">
                            <i class="fa-solid fa-envelope"></i>
                            <span>Email</span>
                        </a>
                        <a class="social-card-btn facebook" href="https://www.facebook.com/rahardiyana" target="_blank" rel="noopener">
                            <i class="fab fa-facebook"></i>
                            <span>Facebook</span>
                        </a>
                        <a class="social-card-btn linkedin" href="https://github.com/ryhardiyan" target="_blank" rel="noopener">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    // 02. ABOUT
    about: `
    <div class="section-container">
        <div class="section-banner">
            <div class="banner-title-box">
                <h2>02. About Me — Tentang Saya</h2>
                <p>Mengenal lebih dalam identitas, latar belakang, filosofi kerja, dan minat personal.</p>
            </div>
            <button class="btn-modern" onclick="window.print()"><i class="fa-solid fa-print"></i> Cetak Profil</button>
        </div>

        <div class="about-grid">
            <!-- A. Introduction -->
            <div class="glass-box">
                <div class="box-heading">
                    <i class="fa-solid fa-user-tie"></i>
                    <h3>A. Introduction (Pengantar)</h3>
                </div>
                <p style="font-size: 0.9rem; line-height: 1.65; color: var(--text-sub);">
                    Halo! Saya <strong>Rahardiyan Yoga Pratama</strong>, seorang independent developer dari Jawa Tengah, Indonesia. Saya memiliki ketertarikan mendalam dalam pengembangan website, aplikasi berbasis JavaScript, backend development, bot automation, serta teknologi jaringan komputer.<br><br>
                    Saya senang mempelajari teknologi baru, mengeksplorasi berbagai tools modern, dan membangun proyek nyata yang dapat memberikan kemudahan dan manfaat nyata dalam kehidupan sehari-hari.
                </p>
            </div>

            <!-- B. Background -->
            <div class="glass-box">
                <div class="box-heading">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <h3>B. Background (Latar Belakang)</h3>
                </div>
                <ul class="env-items-list">
                    <li>Belajar teknologi secara mandiri (self-taught developer).</li>
                    <li>Sangat tertarik pada pengembangan software dan aplikasi web modern.</li>
                    <li>Mengeksplorasi ekosistem JavaScript, TypeScript, dan Node.js.</li>
                    <li>Aktif mengembangkan bot WhatsApp dan sistem otomatisasi transaksi.</li>
                    <li>Memiliki ketertarikan kuat pada konfigurasi server Linux dan jaringan komputer.</li>
                    <li>Senang melakukan riset eksperimen teknis dan arsitektur data.</li>
                </ul>
            </div>

            <!-- C. Working Philosophy -->
            <div class="glass-box">
                <div class="box-heading">
                    <i class="fa-solid fa-compass"></i>
                    <h3>C. Working Philosophy (Filosofi Kerja)</h3>
                </div>
                <div class="philosophy-list">
                    <div class="philo-item">
                        <div>
                            <strong>1. Learn by Doing</strong>
                            <p>Teori menjadi bermakna saat diwujudkan ke dalam baris kode nyata.</p>
                        </div>
                    </div>
                    <div class="philo-item">
                        <div>
                            <strong>2. Keep Experimenting</strong>
                            <p>Eksplorasi tanpa henti untuk menemukan pendekatan terbaik.</p>
                        </div>
                    </div>
                    <div class="philo-item">
                        <div>
                            <strong>3. Build Useful Things</strong>
                            <p>Menciptakan software yang menyelesaikan masalah riil pengguna.</p>
                        </div>
                    </div>
                    <div class="philo-item">
                        <div>
                            <strong>4. Focus on Practical Solutions</strong>
                            <p>Mengutamakan efisiensi, stabilitas sistem, dan kemudahan pemeliharaan.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- D. Personal Interests & Languages -->
            <div class="glass-box">
                <div class="box-heading">
                    <i class="fa-solid fa-heart"></i>
                    <h3>D. Personal Interests & Bahasa</h3>
                </div>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">Minat Personal & Hal yang Disukai:</p>
                <div class="interests-cloud">
                    <span class="interest-tag"><i class="fa-solid fa-code"></i> Programming & Tech</span>
                    <span class="interest-tag"><i class="fa-solid fa-palette"></i> Web Design</span>
                    <span class="interest-tag"><i class="fa-solid fa-server"></i> Server & Networking</span>
                    <span class="interest-tag"><i class="fa-solid fa-robot"></i> Bot Automation</span>
                    <span class="interest-tag"><i class="fa-solid fa-brain"></i> Eksplorasi AI</span>
                    <span class="interest-tag"><i class="fa-solid fa-gamepad"></i> Gaming</span>
                </div>
                
                <p style="font-size:0.85rem; color:var(--text-muted); margin: 18px 0 10px 0;">Penguasaan Bahasa:</p>
                <div class="biodata-kv-list">
                    <div class="kv-row">
                        <span class="kv-key">Bahasa Utama</span>
                        <span class="kv-val">Bahasa Indonesia (Native)</span>
                    </div>
                    <div class="kv-row">
                        <span class="kv-key">Bahasa Inggris</span>
                        <span class="kv-val">English (Basic / Technical Reading)</span>
                    </div>
                    <div class="kv-row">
                        <span class="kv-key">Bahasa Mandarin</span>
                        <span class="kv-val">Mandarin (Currently Learning)</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    // 03. SKILLS
    skills: `
    <div class="section-container">
        <div class="section-banner">
            <div class="banner-title-box">
                <h2>03. Skills & Keahlian Teknis</h2>
                <p>Teknologi, bahasa pemrograman, framework, dan tools yang digunakan dalam pengembangan.</p>
            </div>
        </div>

        <div class="skills-masonry">
            <!-- 1. Web Developer -->
            <div class="skill-category-card">
                <div class="box-heading">
                    <i class="fa-brands fa-html5"></i>
                    <h3>Web Developer (Frontend)</h3>
                </div>
                <div class="skill-pills-container">
                    <span class="tech-chip"><i class="devicon-html5-plain colored"></i> HTML5</span>
                    <span class="tech-chip"><i class="devicon-css3-plain colored"></i> CSS3</span>
                    <span class="tech-chip"><i class="devicon-javascript-plain colored"></i> JavaScript ES6+</span>
                    <span class="tech-chip"><i class="fa-solid fa-mobile-screen"></i> Responsif Design</span>
                    <span class="tech-chip"><i class="fa-solid fa-sitemap"></i> DOM Manipulasi</span>
                    <span class="tech-chip"><i class="devicon-tailwindcss-plain colored"></i> Tailwind CSS</span>
                    <span class="tech-chip"><i class="devicon-nextjs-plain"></i> Next.js 16</span>
                    <span class="tech-chip"><i class="devicon-react-original colored"></i> React 19</span>
                </div>
            </div>

            <!-- 2. Backend Developer -->
            <div class="skill-category-card">
                <div class="box-heading">
                    <i class="fa-solid fa-server"></i>
                    <h3>Backend Developer</h3>
                </div>
                <div class="skill-pills-container">
                    <span class="tech-chip"><i class="devicon-nodejs-plain colored"></i> Node.js</span>
                    <span class="tech-chip"><i class="devicon-express-original"></i> Express.js</span>
                    <span class="tech-chip"><i class="fa-solid fa-code"></i> JSON & HTTP/S</span>
                    <span class="tech-chip"><i class="fa-solid fa-network-wired"></i> REST API</span>
                    <span class="tech-chip"><i class="devicon-vuejs-plain colored"></i> Vue.js</span>
                    <span class="tech-chip"><i class="fa-solid fa-bolt"></i> Bun.js</span>
                    <span class="tech-chip"><i class="devicon-mongodb-plain colored"></i> MongoDB</span>
                    <span class="tech-chip"><i class="devicon-sqlite-plain colored"></i> SQLite</span>
                </div>
            </div>

            <!-- 3. Bot Development & Automation -->
            <div class="skill-category-card">
                <div class="box-heading">
                    <i class="fa-solid fa-robot"></i>
                    <h3>Bot Development & Automation</h3>
                </div>
                <div class="skill-pills-container">
                    <span class="tech-chip"><i class="fa-brands fa-whatsapp"></i> WhatsApp Bot</span>
                    <span class="tech-chip"><i class="fa-solid fa-cart-shopping"></i> LUTOPUP Automation</span>
                    <span class="tech-chip"><i class="fa-brands fa-telegram"></i> Telegram Bot API</span>
                    <span class="tech-chip"><i class="fa-solid fa-qrcode"></i> Dynamic QRIS Gateway</span>
                    <span class="tech-chip"><i class="fa-solid fa-link"></i> Okeconnect H2H Integration</span>
                    <span class="tech-chip"><i class="fa-solid fa-envelope"></i> Nodemailer Automation</span>
                </div>
            </div>

            <!-- 4. Tools & Development Environment -->
            <div class="skill-category-card">
                <div class="box-heading">
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                    <h3>Tools & Environment</h3>
                </div>
                <div class="skill-pills-container">
                    <span class="tech-chip"><i class="devicon-git-plain colored"></i> Git</span>
                    <span class="tech-chip"><i class="devicon-github-original"></i> GitHub</span>
                    <span class="tech-chip"><i class="fa-solid fa-terminal"></i> Termux CLI</span>
                    <span class="tech-chip"><i class="devicon-linux-plain"></i> Linux Environment</span>
                    <span class="tech-chip"><i class="devicon-vercel-plain"></i> Vercel Cloud</span>
                    <span class="tech-chip"><i class="devicon-vscode-plain colored"></i> VS Code</span>
                </div>
            </div>

            <!-- 5. Networking & Infrastructure -->
            <div class="skill-category-card">
                <div class="box-heading">
                    <i class="fa-solid fa-network-wired"></i>
                    <h3>Networking & Infrastructure</h3>
                </div>
                <div class="skill-pills-container">
                    <span class="tech-chip"><i class="fa-solid fa-ethernet"></i> TCP/IP Protocol</span>
                    <span class="tech-chip"><i class="fa-solid fa-globe"></i> DNS Configuration</span>
                    <span class="tech-chip"><i class="fa-solid fa-lock"></i> HTTP / HTTPS Security</span>
                    <span class="tech-chip"><i class="fa-solid fa-shield-virus"></i> VPN Tunneling</span>
                    <span class="tech-chip"><i class="fa-solid fa-tower-broadcast"></i> Router Networking</span>
                    <span class="tech-chip"><i class="fa-solid fa-sliders"></i> Mikrotik RouterOS</span>
                </div>
            </div>

            <!-- Currently Learning -->
            <div class="skill-category-card" style="border-color: rgba(6, 182, 212, 0.3);">
                <div class="box-heading">
                    <i class="fa-solid fa-seedling" style="color:var(--secondary);"></i>
                    <h3>Currently Learning (Sedang Dipelajari)</h3>
                </div>
                <div class="skill-pills-container">
                    <span class="tech-chip"><i class="devicon-go-plain colored"></i> Golang Microservices</span>
                    <span class="tech-chip"><i class="devicon-docker-plain colored"></i> Docker Containerization</span>
                    <span class="tech-chip"><i class="fa-solid fa-brain"></i> AI Agent Workflows</span>
                    <span class="tech-chip"><i class="fa-solid fa-language"></i> Mandarin Language</span>
                </div>
            </div>
        </div>
    </div>
    `,

    // 04. PROJECTS
    projects: `
    <div class="section-container">
        <div class="section-banner">
            <div class="banner-title-box">
                <h2>04. Projects — Portofolio Karya</h2>
                <p>Koleksi sistem web, payment gateway, otomasi bot, dan aplikasi yang telah dibangun.</p>
            </div>
            <a href="https://github.com/ryhardiyan" target="_blank" rel="noopener" class="btn-modern">
                <i class="fab fa-github"></i> Buka GitHub
            </a>
        </div>

        <!-- FEATURED PROJECT BANNER: LUTOPUP -->
        <div class="featured-project-banner">
            <div class="featured-content">
                <span class="featured-badge"><i class="fa-solid fa-star"></i> FEATURED SHOWCASE</span>
                <h3>LUTOPUP — Premium Top-Up Platform & Payment Gateway</h3>
                <p>
                    Platform transaksi digital berbasis Next.js 16 untuk pembelian produk game, pulsa, token listrik, dan dompet digital dengan sistem pembayaran otomatis QRIS dinamis dan integrasi provider H2H Okeconnect.
                </p>
                <div class="project-stack-wrap" style="margin-bottom: 16px;">
                    <span>Next.js 16</span>
                    <span>React 19</span>
                    <span>JavaScript ES6+</span>
                    <span>MongoDB</span>
                    <span>SQLite</span>
                    <span>Tailwind CSS</span>
                    <span>Node.js</span>
                    <span>Dynamic QRIS</span>
                </div>
                <div style="display:flex; gap:10px;">
                    <button class="btn-modern" onclick="openProjectModal('lutopup')">
                        <i class="fa-solid fa-circle-info"></i> Baca Dokumentasi Lengkap
                    </button>
                </div>
            </div>
            <div style="font-size: 5rem; color: rgba(255,255,255,0.15); display: flex; align-items:center; justify-content:center;">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>

        <!-- OTHER PROJECTS GRID -->
        <div class="projects-grid">
            <!-- Project 2 -->
            <div class="project-card" onclick="openProjectModal('hotspot')">
                <div>
                    <div class="project-card-top">
                        <span class="project-category-tag">Networking & Backend</span>
                        <i class="fa-solid fa-wifi" style="color:var(--primary);"></i>
                    </div>
                    <h4>WiFi Hotspot Network Monitor</h4>
                    <p>Sistem pemantauan router hotspot mikrotik secara real-time, pencatatan log koneksi pelanggan, dan integrasi alert.</p>
                </div>
                <div class="project-stack-wrap">
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>SQLite</span>
                    <span>Mikrotik API</span>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="project-card" onclick="openProjectModal('whatsapp-bot')">
                <div>
                    <div class="project-card-top">
                        <span class="project-category-tag">Bot & Automation</span>
                        <i class="fa-brands fa-whatsapp" style="color:#25d366;"></i>
                    </div>
                    <h4>Multi-Service WhatsApp Bot</h4>
                    <p>Bot otomasi WhatsApp untuk customer service, pengecekan status pesanan, notifikasi transaksi instan, dan utility harian.</p>
                </div>
                <div class="project-stack-wrap">
                    <span>Node.js</span>
                    <span>Baileys / WS</span>
                    <span>REST API</span>
                    <span>JSON</span>
                </div>
            </div>

            <!-- Project 4 -->
            <div class="project-card" onclick="openProjectModal('portfolio-web')">
                <div>
                    <div class="project-card-top">
                        <span class="project-category-tag">Frontend & UI/UX</span>
                        <i class="fa-solid fa-desktop" style="color:var(--secondary);"></i>
                    </div>
                    <h4>Personal Glassmorphism Portfolio</h4>
                    <p>Website portofolio interaktif tanpa sisa ruang kosong, dynamic ambient lighting, embedded terminal, dan responsive layout.</p>
                </div>
                <div class="project-stack-wrap">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>GitHub Pages</span>
                </div>
            </div>
        </div>
    </div>
    `,

    // 05. EXPERIENCE
    experience: `
    <div class="section-container">
        <div class="section-banner">
            <div class="banner-title-box">
                <h2>05. Experience & Development Journey</h2>
                <p>Riwayat aktivitas, freelance work, dan perjalanan pengembangan proyek secara mandiri.</p>
            </div>
        </div>

        <div class="glass-box">
            <div class="timeline-vertical">
                <div class="timeline-entry">
                    <span class="timeline-badge">2025 - SEKARANG</span>
                    <div class="timeline-role">Independent Developer & Freelance Software Builder</div>
                    <div class="timeline-org">Boyolali, Jawa Tengah (Remote)</div>
                    <div class="timeline-desc">
                        Fokus membangun aplikasi web full-stack, sistem payment gateway, otomasi WhatsApp bot, dan manajemen konfigurasi server jaringan bagi klien lokal maupun proyek pribadi berjangka panjang.
                    </div>
                </div>

                <div class="timeline-entry">
                    <span class="timeline-badge">2024 - 2025</span>
                    <div class="timeline-role">Lead Developer — Platform LUTOPUP</div>
                    <div class="timeline-org">E-Commerce & Payment Gateway System</div>
                    <div class="timeline-desc">
                        Merancang dan mengimplementasikan arsitektur dual-database (MongoDB & SQLite), integrasi API H2H Okeconnect, sistem proteksi manipulasi harga, dan dynamic QRIS settlement.
                    </div>
                </div>

                <div class="timeline-entry">
                    <span class="timeline-badge">2023 - 2024</span>
                    <div class="timeline-role">Network & Automation Enthusiast</div>
                    <div class="timeline-org">Self-directed Research</div>
                    <div class="timeline-desc">
                        Eksplorasi ekosistem Linux, konfigurasi router Mikrotik, setup DNS, VPN, serta scripting otomasi Termux untuk monitoring server.
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    // 06. EDUCATION
    education: `
    <div class="section-container">
        <div class="section-banner">
            <div class="banner-title-box">
                <h2>06. Education & Learning Path</h2>
                <p>Pendidikan formal faktual dan jalur pembelajaran mandiri yang telah ditempuh.</p>
            </div>
        </div>

        <div class="edu-grid">
            <!-- Formal Education -->
            <div class="glass-box">
                <div class="box-heading">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <h3>Pendidikan Formal</h3>
                </div>
                <div class="timeline-vertical">
                    <div class="timeline-entry">
                        <span class="timeline-badge">2023 - 2025</span>
                        <div class="timeline-role">SMK Negeri 01 Nogosari</div>
                        <div class="timeline-org">Boyolali, Jawa Tengah</div>
                        <div class="timeline-desc">Pendidikan Menengah Kejuruan dengan minat pada teknologi perangkat lunak dan jaringan.</div>
                    </div>
                    <div class="timeline-entry">
                        <span class="timeline-badge">2019 - 2023</span>
                        <div class="timeline-role">SMP Negeri 01 Ngemplak</div>
                        <div class="timeline-org">Boyolali, Jawa Tengah</div>
                        <div class="timeline-desc">Pendidikan Sekolah Menengah Pertama.</div>
                    </div>
                    <div class="timeline-entry">
                        <span class="timeline-badge">2014 - 2019</span>
                        <div class="timeline-role">SD Negeri 03 Manggung</div>
                        <div class="timeline-org">Ngemplak, Boyolali</div>
                        <div class="timeline-desc">Pendidikan Dasar.</div>
                    </div>
                </div>
            </div>

            <!-- Self-Learning Path -->
            <div class="glass-box">
                <div class="box-heading">
                    <i class="fa-solid fa-book-open-reader"></i>
                    <h3>Pembelajaran Mandiri (Self-Learning)</h3>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">
                    Bidang yang dipelajari secara mendalam melalui dokumentasi resmi, riset source code, dan implementasi proyek nyata:
                </p>
                <div class="self-learning-list">
                    <div class="learning-chip"><i class="fa-solid fa-check"></i> JavaScript Development</div>
                    <div class="learning-chip"><i class="fa-solid fa-check"></i> Node.js Ecosystem</div>
                    <div class="learning-chip"><i class="fa-solid fa-check"></i> Backend & API Development</div>
                    <div class="learning-chip"><i class="fa-solid fa-check"></i> Modern Web Technologies</div>
                    <div class="learning-chip"><i class="fa-solid fa-check"></i> Linux & Termux Environment</div>
                    <div class="learning-chip"><i class="fa-solid fa-check"></i> Computer Networking</div>
                    <div class="learning-chip"><i class="fa-solid fa-check"></i> Database Fundamentals</div>
                    <div class="learning-chip"><i class="fa-solid fa-check"></i> AI & Bot Automation</div>
                </div>
            </div>
        </div>
    </div>
    `,

    // 07. ENVIRONMENT
    environment: `
    <div class="section-container">
        <div class="section-banner">
            <div class="banner-title-box">
                <h2>07. Development Environment & Interactive Terminal</h2>
                <p>Sistem operasi, perangkat kerja, environment server, dan terminal interaktif langsung.</p>
            </div>
        </div>

        <div class="env-grid">
            <div class="env-card">
                <div class="env-card-header"><i class="fa-solid fa-laptop"></i> OS & Workstation</div>
                <ul class="env-items-list">
                    <li>Linux OS & Windows Environment</li>
                    <li>Termux Mobile Linux CLI</li>
                    <li>Dual-monitor Setup for Productivity</li>
                </ul>
            </div>
            <div class="env-card">
                <div class="env-card-header"><i class="fa-solid fa-code"></i> Dev Tools & Editors</div>
                <ul class="env-items-list">
                    <li>VS Code with Modern Extensions</li>
                    <li>Git Version Control & CLI</li>
                    <li>Postman / REST API Testing Tools</li>
                </ul>
            </div>
            <div class="env-card">
                <div class="env-card-header"><i class="fa-solid fa-cloud"></i> Server & Deployment</div>
                <ul class="env-items-list">
                    <li>Vercel Edge Network Deployment</li>
                    <li>Cloudflare DNS & Proxy Protection</li>
                    <li>Mikrotik RouterOS Lab</li>
                </ul>
            </div>
        </div>

        <!-- Embedded Interactive Terminal -->
        <div class="glass-box" style="padding: 0; overflow: hidden; height: 320px; display: flex; flex-direction: column;">
            <div style="background: rgba(255,255,255,0.05); padding: 8px 16px; display: flex; align-items:center; justify-content:space-between; border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;"><i class="fa-solid fa-terminal"></i> ryhardev@boyolali-server: ~ (bash)</span>
                <span style="color:#10b981; font-size: 0.75rem; font-weight:700;">● SHELL READY</span>
            </div>
            <div id="termux-screen" style="flex:1; background: #080c14; padding: 16px; font-family: var(--font-mono); font-size: 0.86rem; overflow-y: auto; color:#e2e8f0;" onclick="focusTerminalInput()">
                <div style="color: #38bdf8; margin-bottom: 8px;">
RyharDev CLI Emulator [Version 2026.1]
Ketik 'help' untuk daftar instruksi yang dapat dijalankan.
                </div>
                <div id="termux-history"></div>
                <div style="display: flex; align-items:center; gap: 8px; margin-top: 6px;">
                    <span style="color:#10b981; font-weight:700;">ryhardev@portfolio:~$</span>
                    <input type="text" id="termux-input" autocomplete="off" spellcheck="false" onkeydown="onTermuxKeyDown(event)" style="flex:1; background:transparent; border:none; outline:none; color:#ffffff; font-family:var(--font-mono); font-size:0.86rem;">
                </div>
            </div>
        </div>
    </div>
    `,

    // 08. SERVICES
    services: `
    <div class="section-container">
        <div class="section-banner">
            <div class="banner-title-box">
                <h2>08. Services & Collaboration</h2>
                <p>Layanan teknis yang ditawarkan dan ketersediaan untuk menerima proyek kolaborasi.</p>
            </div>
            <div class="status-pulse-badge">
                <span class="pulse-dot"></span>
                <span class="status-text">OPEN FOR FREELANCE & CONTRACT</span>
            </div>
        </div>

        <div class="services-grid">
            <div class="service-card">
                <div>
                    <div class="service-icon-box"><i class="fa-solid fa-globe"></i></div>
                    <h4>Web Development</h4>
                    <p>Pembuatan website modern, landing page responsif, dan dashboard administrasi interaktif dengan performa optimal di semua ukuran layar.</p>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=6282323780821&text=Halo+saya+ingin+konsultasi+website" target="_blank" class="btn-glass-sub" style="justify-content:center;">Konsultasi Web</a>
            </div>

            <div class="service-card">
                <div>
                    <div class="service-icon-box"><i class="fa-solid fa-server"></i></div>
                    <h4>Backend & REST API</h4>
                    <p>Pembangunan RESTful API yang aman, arsitektur database terstruktur (MongoDB/SQLite/PostgreSQL), validasi data, dan integrasi payment gateway.</p>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=6282323780821&text=Halo+saya+ingin+konsultasi+backend" target="_blank" class="btn-glass-sub" style="justify-content:center;">Konsultasi API</a>
            </div>

            <div class="service-card">
                <div>
                    <div class="service-icon-box"><i class="fa-solid fa-robot"></i></div>
                    <h4>Bot Automation</h4>
                    <p>Pengembangan bot WhatsApp, webhook Telegram, integrasi H2H payment, dan skrip otomasi proses bisnis yang berjalan 24/7 tanpa henti.</p>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=6282323780821&text=Halo+saya+ingin+konsultasi+bot" target="_blank" class="btn-glass-sub" style="justify-content:center;">Konsultasi Bot</a>
            </div>
        </div>

        <!-- FAQ Box -->
        <div class="glass-box">
            <div class="box-heading">
                <i class="fa-solid fa-circle-question"></i>
                <h3>Frequently Asked Questions (FAQ)</h3>
            </div>
            <div class="philosophy-list">
                <div class="philo-item">
                    <div>
                        <strong>Bagaimana proses pengerjaan proyek?</strong>
                        <p>Dimulai dari diskusi kebutuhan fitur, perancangan skema sistem/UI, tahap coding iteratif, pengujian fungsionalitas, hingga deployment ke server live.</p>
                    </div>
                </div>
                <div class="philo-item">
                    <div>
                        <strong>Apakah proyek yang dibuat dilengkapi source code & dokumentasi?</strong>
                        <p>Ya, seluruh proyek diserahkan dengan source code terstruktur, file konfigurasi, dan panduan penggunaan sistem yang jelas.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    // 09. CONTACT
    contact: `
    <div class="section-container">
        <div class="section-banner">
            <div class="banner-title-box">
                <h2>09. Contact — Hubungi Saya</h2>
                <p>Silakan kirim pesan atau hubungi langsung melalui saluran komunikasi resmi di bawah ini.</p>
            </div>
        </div>

        <div class="contact-grid">
            <!-- Left Contact Info Cards -->
            <div class="contact-info-list">
                <a href="https://github.com/ryhardiyan" target="_blank" rel="noopener" class="contact-item-card">
                    <div class="contact-icon"><i class="fab fa-github"></i></div>
                    <div>
                        <div class="contact-label">GitHub Profile</div>
                        <div class="contact-val">github.com/ryhardiyan</div>
                    </div>
                </a>

                <a href="mailto:ryhardev@gmail.com" class="contact-item-card">
                    <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
                    <div>
                        <div class="contact-label">Email Resmi</div>
                        <div class="contact-val">ryhardev@gmail.com</div>
                    </div>
                </a>

                <a href="https://api.whatsapp.com/send/?phone=6282323780821&text=Assalamualaikum+Mas" target="_blank" rel="noopener" class="contact-item-card">
                    <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
                    <div>
                        <div class="contact-label">WhatsApp Langsung</div>
                        <div class="contact-val">082323780821 (+62 823-2378-0821)</div>
                    </div>
                </a>

                <a href="https://rahardiyan.is-a.ceo/" target="_blank" rel="noopener" class="contact-item-card">
                    <div class="contact-icon"><i class="fa-solid fa-globe"></i></div>
                    <div>
                        <div class="contact-label">Domain Portofolio</div>
                        <div class="contact-val">rahardiyan.is-a.ceo</div>
                    </div>
                </a>
            </div>

            <!-- Right Contact Form -->
            <div class="glass-box">
                <div class="box-heading">
                    <i class="fa-solid fa-paper-plane"></i>
                    <h3>Kirim Pesan Langsung</h3>
                </div>
                <form class="contact-form-box" onsubmit="handleContactSubmit(event)">
                    <div class="form-group">
                        <label for="contact-name">Nama Pengirim</label>
                        <input type="text" id="contact-name" class="form-control" placeholder="Nama Anda" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-email">Email</label>
                        <input type="email" id="contact-email" class="form-control" placeholder="nama@email.com" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-subject">Subjek</label>
                        <input type="text" id="contact-subject" class="form-control" placeholder="Topik diskusi atau tawaran proyek" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-message">Pesan</label>
                        <textarea id="contact-message" class="form-control" placeholder="Tuliskan detail pesan Anda di sini..." required></textarea>
                    </div>
                    <button type="submit" class="btn-modern" style="justify-content:center; margin-top:6px;">
                        <i class="fa-solid fa-paper-plane"></i> Kirim Pesan Sekarang
                    </button>
                </form>
            </div>
        </div>
    </div>
    `
};

// Projects Data for Modal Detail
const PROJECTS_DATA = {
    lutopup: {
        category: "Full-Stack Web Development · Digital Commerce Platform",
        title: "LUTOPUP",
        subtitle: "Premium Top-Up Platform & Payment Gateway",
        description: `LUTOPUP is a modern digital commerce platform built with Next.js, designed to simplify digital transactions through automated payment processing and third-party provider integration. The platform supports game top-ups, mobile credit, electricity tokens, and digital wallet transactions through an integrated H2H provider system.`,
        features: [
            { title: "Automated H2H Transactions", desc: "Integration with Okeconnect H2H API for automated digital product fulfillment." },
            { title: "Dynamic QRIS Payments", desc: "Automatic QRIS generation and real-time payment verification." },
            { title: "Open Denomination", desc: "Custom transaction amounts for supported digital products." },
            { title: "Pricing & Anti-Tamper Management", desc: "Server-side markup calculation and price manipulation protection." },
            { title: "Admin Analytics Dashboard", desc: "Transaction monitoring, revenue analytics, product configuration, and logs." },
            { title: "Promotion Management", desc: "Voucher codes, manual promotions, and timed flash sales." },
            { title: "Telegram Notifications", desc: "Real-time instant transaction alert notifications for administrators." },
            { title: "Automated Email Invoices", desc: "Customer invoice generation and delivery via Nodemailer." },
            { title: "Dual Database Architecture", desc: "MongoDB and SQLite dual engine for flexibility and resilient persistence." },
            { title: "Security & Rate Limiting", desc: "API rate limiting, request timeouts, and pending transaction restrictions." }
        ],
        stack: ["Next.js 16", "React 19", "JavaScript ES6+", "Node.js", "MongoDB", "SQLite", "Tailwind CSS", "Lucide React", "Nodemailer", "Telegram Bot API", "Okeconnect H2H API"],
        highlights: "The platform uses a modular architecture with separated API routes, reusable React components, backend services, and utility libraries. Special attention is given to transaction reliability, payment validation, database flexibility, server-side pricing calculations, and administrator experience.",
        classification: ["Full-Stack Web Development", "Payment Gateway Integration", "API Integration", "Database Management", "Automation Systems", "Admin Dashboard Development"]
    },
    hotspot: {
        category: "Networking & Backend",
        title: "WiFi Hotspot Network Monitoring",
        subtitle: "Router Status & Connection Tracker",
        description: "Sistem backend pemantauan real-time status router Mikrotik / OpenWrt, manajemen sesi voucher, dan pencatatan log koneksi pengguna secara otomatis.",
        features: [
            { title: "Mikrotik RouterOS API", desc: "Integrasi langsung ke router untuk memantau beban CPU, memori, dan active clients." },
            { title: "Session Logging", desc: "Pencatatan riwayat login voucher dan penggunaan kuota bandwidth." }
        ],
        stack: ["Node.js", "Express.js", "SQLite", "Mikrotik API"],
        highlights: "Dibangun untuk keandalan monitoring jaringan skala kecil hingga menengah.",
        classification: ["Networking", "Backend API", "Infrastructure Monitoring"]
    },
    "whatsapp-bot": {
        category: "Bot Development & Automation",
        title: "Multi-Service WhatsApp Bot",
        subtitle: "Automated Messaging & Business Assistant",
        description: "Bot otomatisasi pesan WhatsApp untuk menangani konfirmasi pesanan pelanggan, cek status transaksi real-time, dan utility bot serbaguna.",
        features: [
            { title: "24/7 Auto Responder", desc: "Merespon pertanyaan umum dan status pesanan tanpa delay." },
            { title: "Webhook Integration", desc: "Menerima notifikasi dari sistem backend eksternal dan meneruskannya ke user WhatsApp." }
        ],
        stack: ["Node.js", "Baileys Library", "REST API", "JSON Database"],
        highlights: "Mampu beroperasi secara stabil pada environment server Linux dan mobile Termux.",
        classification: ["Bot Automation", "Messaging API", "Customer Support Automation"]
    },
    "portfolio-web": {
        category: "Frontend & UI/UX Development",
        title: "Personal Developer Portfolio 2026",
        subtitle: "Zero Wasted Space Glassmorphism Interface",
        description: "Website portofolio interaktif berkinerja tinggi yang memaksimalkan seluruh viewport layar dengan visual glassmorphism modern, visual backdrop, dan terminal emulator bawaan.",
        features: [
            { title: "Zero Wasted Space", desc: "Tata letak dirancang presisi tanpa rongga kosong yang sia-sia." },
            { title: "Interactive Terminal", desc: "Shell CLI bawaan yang mengeksekusi instruksi kustom pengembang." }
        ],
        stack: ["HTML5", "Modern CSS", "Vanilla JavaScript", "GitHub Pages"],
        highlights: "Kecepatan akses kilat tanpa ketergantungan framework berat, ringan di semua perangkat.",
        classification: ["UI/UX Design", "Vanilla Web Development", "Personal Branding"]
    }
};

// Navigation Controller
function navigateSection(sectionId) {
    const surface = document.getElementById('content-surface');
    if (!surface || !SECTIONS[sectionId]) return;

    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event && event.currentTarget && event.currentTarget.classList.add('active');

    // Render Section Content
    surface.innerHTML = SECTIONS[sectionId];

    // If environment section loaded, autofocus terminal
    if (sectionId === 'environment') {
        setTimeout(focusTerminalInput, 80);
    }
}

// Modal Controllers
function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    const modal = document.getElementById('project-modal');
    document.getElementById('modal-category').textContent = data.category;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;

    let featuresHtml = data.features.map(f => `
        <div class="feature-bullet-item">
            <strong>• ${f.title}:</strong> ${f.desc}
        </div>
    `).join('');

    let stackHtml = data.stack.map(s => `
        <span class="tech-chip">${s}</span>
    `).join('');

    let classHtml = data.classification.map(c => `
        <span class="interest-tag">${c}</span>
    `).join('');

    document.getElementById('modal-body').innerHTML = `
        <div>
            <div class="modal-section-title"><i class="fa-solid fa-align-left"></i> Ringkasan Proyek</div>
            <p>${data.description}</p>
        </div>

        <div>
            <div class="modal-section-title"><i class="fa-solid fa-list-check"></i> Core Features (Fitur Utama)</div>
            <div class="feature-bullets-list">
                ${featuresHtml}
            </div>
        </div>

        <div>
            <div class="modal-section-title"><i class="fa-solid fa-layer-group"></i> Technology Stack</div>
            <div class="skill-pills-container">
                ${stackHtml}
            </div>
        </div>

        <div>
            <div class="modal-section-title"><i class="fa-solid fa-lightbulb"></i> Technical Highlights</div>
            <p style="background: rgba(0,0,0,0.3); padding: 12px 16px; border-radius: 8px; border-left: 3px solid var(--primary);">${data.highlights}</p>
        </div>

        <div>
            <div class="modal-section-title"><i class="fa-solid fa-tags"></i> Project Classification</div>
            <div class="interests-cloud">
                ${classHtml}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

function closeProjectModal(event) {
    const modal = document.getElementById('project-modal');
    if (modal) modal.style.display = 'none';
}

// Contact form handler
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=6282323780821&text=${encodeURIComponent(
        `Halo Rahardiyan,\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject}\nPesan: ${message}`
    )}`;

    window.open(whatsappUrl, '_blank');
}

// Initial default render
document.addEventListener('DOMContentLoaded', () => {
    navigateSection('home');
});
