// ================= MUSIC =================

// ================= PILIH LAGU =================

function chooseMusic(song) {

  const music =
    document.getElementById('background-music');

  const musicChoice =
    document.getElementById('musicChoice');

  music.src = song;

  music.volume = 0.5;

  music.play().catch(() => {
    console.log("Autoplay diblokir browser");
  });

  musicChoice.classList.add('d-none');
}


// ================= TIMER =================

const timer = document.getElementById('timer');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;

let countDown = new Date('May 22, 2026 00:00:00').getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDown - now;

  document.getElementById('hours').innerText = Math.floor(distance / hour);
  document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute);
  document.getElementById('seconds').innerText = Math.floor((distance % minute) / second);

  if (distance < 0) {
    timer.classList.add('d-none');
    clearInterval(x);
    confettiEffect();
    _slideSatu();
  }
}, second);


// ================= SLIDE 1 =================

function _slideSatu() {
  const tap = document.getElementById('tap');
  const slideSatu = document.getElementById('slideSatu');

  slideSatu.classList.remove('d-none');

  setTimeout(() => {
    tap.classList.remove('d-none');

    const next1 = function () {
      tap.classList.add('d-none');

      slideSatu.classList.replace('animate__slideInDown', 'animate__fadeOut');

      setTimeout(() => {
        slideSatu.remove();
        _slideDua();
      }, 1000);

      document.body.removeEventListener('click', next1);
    };

    document.body.addEventListener('click', next1);
  }, 4000);
}


// ================= SLIDE 2 =================

function _slideDua() {
  const tap = document.getElementById('tap');
  const slideDua = document.getElementById('slideDua');

  slideDua.classList.remove('d-none');

  setTimeout(() => {
    tap.classList.remove('d-none');

    const next2 = function () {
      tap.classList.add('d-none');

      slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
      slideDua.classList.remove('animate__delay-2s', 'animate__slow');

      setTimeout(() => {
        slideDua.remove();
        _slideTiga();
      }, 1000);

      document.body.removeEventListener('click', next2);
    };

    document.body.addEventListener('click', next2);
  }, 15000);
}


// ================= SLIDE 3 =================

function _slideTiga() {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');

  slideTiga.classList.remove('d-none');

  setTimeout(() => {
    tap.classList.remove('d-none');

    const next3 = function () {
      tap.classList.add('d-none');

      slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
      slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');

      setTimeout(() => {
        slideTiga.remove();
        _slideEmpat();
      }, 1000);

      document.body.removeEventListener('click', next3);
    };

    document.body.addEventListener('click', next3);
  }, 17000);
}


// ================= SLIDE 4 =================

function getRandomPosition() {
  let randomX = Math.floor(Math.random() * 500);
  let randomY = Math.floor(Math.random() * 300);
  return [randomX, randomY];
}

function _slideEmpat() {
  const slideEmpat = document.getElementById('slideEmpat');

  const btnGak = document.getElementById('gak');
  const btnSuka = document.getElementById('suka');

  slideEmpat.classList.remove('d-none');

  btnGak.addEventListener('click', function () {
    const xy = getRandomPosition();
    slideEmpat.style.top = xy[0] + 'px';
  });

  btnSuka.addEventListener('click', function () {
    slideEmpat.classList.replace(
      'animate__fadeInDown',
      'animate__bounceOut'
    );

    slideEmpat.classList.remove('animate__delay-2s');

    setTimeout(() => {
      slideEmpat.remove();

      setTimeout(() => {
        _slideLima();
      }, 500);
    }, 1000);
  });
}


// ================= SLIDE 5 =================

function _slideLima() {
  const slideLima = document.getElementById('slideLima');
  const trims = document.getElementById('trims');

  slideLima.classList.remove('d-none');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);
}


// ================= SLIDE 6 =================

function _slideEnam() {
  const slideEnam = document.getElementById('slideEnam');

  if (slideEnam) {
    slideEnam.classList.remove('d-none');
  }
}


// ================= TYPE TEXT 1 =================

new TypeIt("#teks1", {
  strings: [
    "Selamat ulang tahun, cintaku 🤍",
    "Hari ini dunia merayakan hadirnya seseorang yang paling aku sayangi.",
    "Terima kasih sudah bertahan sejauh ini meski dunia kadang tidak selalu baik.",
    "Semoga di umur yang baru ini semua sedih perlahan diganti dengan bahagia.",
    "Semoga langkah sayang selalu dipenuhi hal-hal baik dan orang-orang tulus.",
    "Aku mungkin tidak bisa selalu ada di setiap waktu sayang...",
    "Tapi percayalah, dalam setiap doaku selalu ada nama sayang.",
    "Dan semoga aku tetap menjadi rumah yang nyaman untuk hati kamu."
  ],
  startDelay: 4000,
  speed: 75,
  waitUntilVisible: true
}).go();


// ================= TYPE TEXT 2 =================

new TypeIt("#teks2", {
  strings: [
    "Aku tidak pandai merangkai kata...",
    "Tapi aku selalu pandai mendoakan sayang diam-diam.",
    "Barakallah fii umrik sayang 🤍",
    "Semoga panjang umur, sehat selalu, dan dipermudah segala urusannya.",
    "Semoga semua impian yang belum tercapai bisa segera Tuhan dekatkan.",
    "Dan semoga hubungan kita selalu diberi jalan untuk tetap bersama.",
    "I love you, more than you know."
  ],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();


// ================= TYPE TEXT 3 =================

new TypeIt("#trims", {
  strings: [
    "Sekali lagi, selamat ulang tahun cintaku 🤍"
  ],
  startDelay: 1500,
  speed: 40,
  loop: false,
  waitUntilVisible: true,

  afterComplete: async function () {
    setTimeout(() => {
      const slideLima = document.getElementById('slideLima');
      const trims = document.getElementById('trims');

      slideLima.classList.replace('animate__bounceIn', 'animate__fadeOut');
      trims.classList.add('animate__animated', 'animate__fadeOut');

      setTimeout(() => {
        slideLima.remove();
        _slideEnam();

        setTimeout(() => {
          startGallery();
        }, 1500);
      }, 2000);
    }, 5000);
  }
}).go();


// ================= STACK POLAROID =================

function startGallery() {
  const gallery = document.getElementById('gallery');
  const photos = document.querySelectorAll('.polaroid');
  const showEndingBtn = document.getElementById('showEndingBtn');

  gallery.classList.remove('d-none');

  photos.forEach((photo, index) => {
    const rotate = (Math.random() * 8) - 4;

    setTimeout(() => {
      photo.style.transform = `rotate(${rotate}deg)`;
      photo.style.opacity = "1";
    }, index * 450);
  });

  setTimeout(() => {
    showEndingBtn.classList.remove('d-none');
  }, photos.length * 450 + 1500);
}


// ================= ENDING BUTTON =================

const showEndingBtn = document.getElementById('showEndingBtn');

showEndingBtn.addEventListener('click', () => {
  const ending = document.getElementById('endingText');

  showEndingBtn.classList.add('d-none');
  ending.classList.remove('d-none');
});


// ================= LIGHTBOX =================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

document.querySelectorAll('.polaroid img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('show');
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove('show');
  }
});


// ================= CONFETTI =================

function confettiEffect() {
  const duration = 5000;
  const animationEnd = Date.now() + duration;

  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 9999
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.3),
        y: Math.random() - 0.2
      }
    });

    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.7, 0.9),
        y: Math.random() - 0.2
      }
    });
  }, 250);
}