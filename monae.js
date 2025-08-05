function moveNoButtonRandomly() {
  const noBtn = document.getElementById('noBtn');
  const container = document.querySelector('.container');
  let isFreeMode = false;
  let speed = 0.4; // ความเร็วเริ่มต้น

  noBtn.addEventListener('mouseenter', () => {
    if (!isFreeMode) {
      noBtn.style.position = 'absolute';
      container.style.position = 'relative';
      isFreeMode = true;
    }

    speed = Math.max(0.15, speed - 0.05); // เร็วขึ้นทุกครั้ง
    noBtn.style.transition = `left ${speed}s ease, top ${speed}s ease`;

    const margin = 5;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const maxX = containerWidth - noBtn.offsetWidth - margin;
    const maxY = containerHeight - noBtn.offsetHeight - margin;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    randomX = Math.min(maxX, Math.max(margin, randomX));
    randomY = Math.min(maxY, Math.max(margin, randomY));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
  });
}

// สร้างแกะลอยพื้นหลัง
function createFloatingSheep() {
  const container = document.getElementById('floatingSheepContainer');
  for (let i = 0; i < 8; i++) {
    const sheep = document.createElement('img');
    sheep.src = 'sheep.png.png';
    sheep.className = 'floating-sheep';
    sheep.style.left = Math.random() * window.innerWidth + 'px';
    sheep.style.animationDuration = (10 + Math.random() * 10) + 's';
    container.appendChild(sheep);
  }
}

// แกะกระโดดตอนกด "ใช่"
function jumpingSheepAnimation() {
  const sheep = document.getElementById('jumpingSheep');
  sheep.classList.add('jump');
  sheep.addEventListener('animationend', () => {
    sheep.classList.remove('jump');
  });
}

window.onload = () => {
  moveNoButtonRandomly();
  createFloatingSheep();

  document.getElementById('yesBtn').onclick = () => {
    jumpingSheepAnimation();
    setTimeout(() => {
      window.location.href = 'thankyou.html';
    }, 800);
  };

  document.getElementById('noBtn').onclick = () => {
    alert('ลองกด "ได้" ดูนะครับ 😉');
  };
};

