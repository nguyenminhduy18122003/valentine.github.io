document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('background-music');
    let isPlaying = false;

    // Tạo hiệu ứng trái tim rơi
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = ['❤️', '💖', '💕', '💗'][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        document.querySelector('.hearts-background').appendChild(heart);

        // Xóa trái tim sau khi animation kết thúc
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Tạo trái tim mới mỗi 300ms
    setInterval(createHeart, 300);

    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
        
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
        } else {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
        }
    });

    // Animation cho ảnh trang trí
    const decoImages = document.querySelectorAll('.deco-img');
    decoImages.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.5}s`;
    });
});