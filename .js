const col = document.querySelector('.left-column');
col.style.position = 'fixed'; // already in CSS
// When adding images:
img.style.position = 'absolute';
img.style.top = Math.random() * (window.innerHeight - 60) + 'px';
img.style.left = '10px'; // or '50%' for center
