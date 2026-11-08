/**
 * Background character carousel & live system metrics
 */
const backgroundImages = [
    { src: 'frontend/assets/ganyu.jpg', title: 'Ganyu' },
    { src: 'frontend/assets/yaemiko.jpg', title: 'Yae Miko' },
    { src: 'frontend/assets/hutao.jpg', title: 'Hu Tao' },
    { src: 'frontend/assets/nahida.jpg', title: 'Nahida' },
    { src: 'frontend/assets/keqing.jpg', title: 'Keqing' },
    { src: 'frontend/assets/ningguang.jpg', title: 'Ningguang' },
    { src: 'frontend/assets/furina.jpg', title: 'Furina' },
    { src: 'frontend/assets/amber.jpg', title: 'Amber' }
];

document.addEventListener('DOMContentLoaded', () => {
    // Generate background character backdrop panels to fill full screen without gaps
    const scaleBox = document.getElementById('scale-box');
    if (scaleBox) {
        scaleBox.innerHTML = '';
        backgroundImages.forEach((img) => {
            const item = document.createElement('div');
            item.className = 'scale-box-item';
            item.innerHTML = `<img src="${img.src}" alt="${img.title}">`;
            scaleBox.appendChild(item);
        });
    }

    // Live clock update
    function updateClock() {
        const clockEl = document.getElementById('sys-clock');
        if (clockEl) {
            const now = new Date();
            clockEl.textContent = now.toTimeString().split(' ')[0] + ' WIB';
        }
    }
    setInterval(updateClock, 1000);
    updateClock();
});
