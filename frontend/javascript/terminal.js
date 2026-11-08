/**
 * Interactive Terminal (Termux / Linux CLI Emulator)
 */
function focusTerminalInput() {
    const input = document.getElementById('termux-input');
    if (input) input.focus();
}

function onTermuxKeyDown(event) {
    if (event.key === 'Enter') {
        const input = event.target;
        const cmd = input.value.trim();
        const history = document.getElementById('termux-history');
        const screen = document.getElementById('termux-screen');

        if (!history || !screen) return;

        if (cmd.toLowerCase() === 'clear') {
            history.innerHTML = '';
            input.value = '';
            return;
        }

        const output = executeTermuxCommand(cmd);

        const entry = document.createElement('div');
        entry.className = 'termux-output-entry';
        entry.innerHTML = `
            <div class="termux-cmd-line">
                <span class="termux-prompt-symbol">ryhardev@portfolio:~$</span>
                <span>${escapeHtml(cmd)}</span>
            </div>
            <div class="termux-result">${output}</div>
        `;

        history.appendChild(entry);
        input.value = '';
        screen.scrollTop = screen.scrollHeight;
    }
}

function executeTermuxCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase().trim();
    if (!cmd) return '';

    switch (cmd) {
        case 'help':
            return `Perintah yang tersedia:
  • help          : Menampilkan daftar perintah
  • whoami        : Info identitas developer
  • skills        : Daftar teknologi yang dikuasai
  • projects      : Ringkasan proyek unggulan
  • contact       : Link kontak langsung
  • date          : Waktu sistem server
  • clear         : Bersihkan layar terminal`;

        case 'whoami':
            return `Rahardiyan Yoga Pratama (RyharDev)
Backend Developer & Web Enthusiast from Boyolali, Central Java.
Specializes in Node.js, Express, Go, REST APIs, and Linux Server Administration.`;

        case 'skills':
            return `Keahlian & Stack:
- Languages   : JavaScript, TypeScript, Go (Golang), Bash, HTML/CSS
- Backend     : Node.js, Express.js, REST API, WebSocket
- Databases   : PostgreSQL, MongoDB, SQLite, Redis
- Tools/Infra : Linux / Termux, Git, Docker, Nginx, Cloudflare`;

        case 'projects':
            return `Proyek Terkini:
1. WiFi Hotspot Monitoring (Node.js, Express, SQLite)
2. High-Throughput REST API (Go, PostgreSQL, Redis)
3. Glassmorphism Portfolio Web (Modern CSS, Vanilla JS)
4. Linux/Termux Server Automation Scripts`;

        case 'contact':
            return `Kontak:
- WhatsApp : +62 823-2378-0821
- GitHub   : https://github.com/ryhardiyan
- Email    : ryhardev@gmail.com`;

        case 'date':
            return new Date().toString();

        default:
            return `bash: perintah '${escapeHtml(cmd)}' tidak ditemukan. Ketik 'help' untuk daftar bantuan.`;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
