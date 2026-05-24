// ======================================================
// ====================== MUSIC =========================
// ======================================================

function playMusic() {

  const music =
    document.getElementById('background-music');

  music.play().catch(() => {

    console.log("Autoplay diblokir browser");

  });
}

window.addEventListener('DOMContentLoaded', () => {

  playMusic();

});

document.body.addEventListener('click', playMusic, {
  once: true
});


// ======================================================
// ====================== TIMER =========================
// ======================================================

const timer =
  document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60;

// GANTI TANGGAL DISINI
let countDown =
  new Date('May 22, 2026 00:00:00').getTime(),

  x = setInterval(function () {

    let now =
      new Date().getTime(),

      distance =
      countDown - now;

    document.getElementById('hours').innerText =
      Math.floor(distance / (hour));

    document.getElementById('minutes').innerText =
      Math.floor((distance % (hour)) / (minute));

    document.getElementById('seconds').innerText =
      Math.floor((distance % (minute)) / second);

    if (distance < 0) {

      timer.classList.add('d-none');

      confettiEffect();

      clearInterval(x);

      _slideSatu();
    }

  }, second);


// ======================================================
// ====================== SLIDE 1 =======================
// ======================================================

const _slideSatu = function () {

  const tap =
    document.getElementById('tap');

  const slideSatu =
    document.getElementById('slideSatu');

  slideSatu.classList.remove('d-none');

  setTimeout(() => {

    tap.classList.remove('d-none');

    const next1 = function () {

      tap.classList.add('d-none');

      slideSatu.classList.replace(
        'animate__slideInDown',
        'animate__fadeOut'
      );

      setTimeout(() => {

        slideSatu.remove();

        _slideDua();

      }, 1000);

      document.body.removeEventListener(
        'click',
        next1
      );
    };

    document.body.addEventListener(
      'click',
      next1
    );

  }, 4000);
};


// ======================================================
// ====================== SLIDE 2 =======================
// ======================================================

const _slideDua = function () {

  const slideDua =
    document.getElementById('slideDua');

  const tap =
    document.getElementById('tap');

  slideDua.classList.remove('d-none');

  setTimeout(() => {

    tap.classList.remove('d-none');

    const next2 = function () {

      slideDua.classList.replace(
        'animate__zoomInDown',
        'animate__fadeOutLeft'
      );

      slideDua.classList.remove(
        'animate__delay-2s',
        'animate__slow'
      );

      tap.classList.add('d-none');

      setTimeout(() => {

        slideDua.remove();

        _slideTiga();

      }, 1000);

      document.body.removeEventListener(
        'click',
        next2
      );
    };

    document.body.addEventListener(
      'click',
      next2
    );

  }, 15000);
};


// ======================================================
// ====================== SLIDE 3 =======================
// ======================================================

const _slideTiga = function () {

  const tap =
    document.getElementById('tap');

  const slideTiga =
    document.getElementById('slideTiga');

  slideTiga.classList.remove('d-none');

  setTimeout(() => {

    tap.classList.remove('d-none');

    const next3 = function () {

      slideTiga.classList.remove(
        'animate__delay-2s',
        'animate__slow'
      );

      slideTiga.classList.replace(
        'animate__fadeInRight',
        'animate__fadeOut'
      );

      tap.classList.add('d-none');

      setTimeout(() => {

        slideTiga.remove();

        _slideEmpat();

      }, 1000);

      document.body.removeEventListener(
        'click',
        next3
      );
    };

    document.body.addEventListener(
      'click',
      next3
    );

  }, 17000);
};


// ======================================================
// ================= RANDOM BUTTON ======================
// ======================================================

function getRandomPosition(element) {

  var x =
    document.body.offsetHeight -
    element.clientHeight;

  var y =
    document.body.offsetWidth -
    element.clientWidth;

  var randomX =
    Math.floor(Math.random() * 500);

  var randomY =
    Math.floor(Math.random() * y);

  return [randomX, randomY];
}


// ======================================================
// ====================== SLIDE 4 =======================
// ======================================================

const _slideEmpat = function () {

  const slideEmpat =
    document.getElementById('slideEmpat');

  const btn =
    document.getElementsByTagName('button');

  slideEmpat.classList.remove('d-none');

  // tombol gamau 😭
  btn[0].addEventListener('click', function () {

    var xy =
      getRandomPosition(slideEmpat);

    slideEmpat.style.top =
      xy[0] + 'px';
  });

  // tombol suka ❤️
  btn[1].addEventListener('click', function () {

    slideEmpat.classList.replace(
      'animate__fadeInDown',
      'animate__bounceOut'
    );

    slideEmpat.classList.remove(
      'animate__delay-2s'
    );

    setTimeout(() => {

      slideEmpat.remove();

      setTimeout(() => {

        _slideLima();

      }, 500);

    }, 1000);
  });
};


// ======================================================
// ====================== SLIDE 5 =======================
// ======================================================

const _slideLima = function () {

  const slideLima =
    document.getElementById('slideLima');

  slideLima.classList.remove('d-none');

  const trims =
    document.getElementById('trims');

  setTimeout(() => {

    trims.classList.remove('d-none');

  }, 1000);
};


// ======================================================
// ====================== SLIDE 6 =======================
// ======================================================

const _slideEnam = function () {

  const slideEnam =
    document.getElementById('slideEnam');

  if(slideEnam){
    slideEnam.classList.remove('d-none');
  }
};


// ======================================================
// ==================== TYPE TEXT 1 =====================
// ======================================================

new TypeIt("#teks1", {

  strings: [

    "Selamat ulang tahun, cintaku 🤍",

    "Hari ini dunia merayakan hadirnya seseorang yang paling aku sayangi.",

    "Terima kasih sudah bertahan sejauh ini meski dunia kadang tidak selalu baik.",

    "Semoga di umur yang baru ini semua sedih perlahan diganti dengan bahagia.",

    "Semoga langkah sayang selalu dipenuhi hal-hal baik dan orang-orang tulus.",

    "Aku mungkin tidak bisa selalu ada di setiap waktu sayang...",

    "Tapi percayalah, dalam setiap doaku selalu ada nama kamu.",

    "Dan semoga aku tetap menjadi rumah yang nyaman untuk hati kamu."

  ],

  startDelay: 4000,
  speed: 75,
  waitUntilVisible: true

}).go();


// ======================================================
// ==================== TYPE TEXT 2 =====================
// ======================================================

new TypeIt("#teks2", {

  strings: [

    "Aku tidak pandai merangkai kata...",

    "Tapi aku selalu pandai mendoakan kamu diam-diam.",

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


// ======================================================
// ==================== TYPE TEXT 3 =====================
// ======================================================

new TypeIt("#trims", {

  strings: [

    "Sekali lagi, selamat ulang tahun cintaku 🤍"

  ],

  startDelay: 1500,
  speed: 40,
  loop: false,
  waitUntilVisible: true,

  afterComplete: async function(instance) {

    // tunggu setelah teks selesai
    setTimeout(() => {

      const slideLima =
        document.getElementById('slideLima');

      const trims =
        document.getElementById('trims');

      slideLima.classList.add(
        'animate__delay-2s'
      );

      slideLima.classList.replace(
        'animate__bounceIn',
        'animate__fadeOut'
      );

      trims.classList.add(
        'animate__animated',
        'animate__fadeOut'
      );

      setTimeout(() => {

        slideLima.remove();

        _slideEnam();

        // tampilkan gallery
        setTimeout(() => {

          startGallery();

        }, 2000);

      }, 2000);

    }, 5000);

  }

}).go();


// ======================================================
// ================= STACK POLAROID =====================
// ======================================================

function startGallery(){

  const gallery =
    document.getElementById('gallery');

  gallery.classList.remove('d-none');

  const photos =
    document.querySelectorAll('.polaroid');

  photos.forEach((photo, index) => {

    // posisi random
    let top =
      Math.random() * 75;

    let left =
      Math.random() * 80;

    // rotasi random
    let rotate =
      (Math.random() * 40) - 20;

    // delay muncul
    setTimeout(() => {

      photo.style.top =
        top + "%";

      photo.style.left =
        left + "%";

      photo.style.transform =
        `rotate(${rotate}deg)`;

      photo.style.opacity = "1";

    }, index * 700);

  });

}


// ======================================================
// ===================== CONFETTI =======================
// ======================================================

function confettiEffect() {

  const duration = 5000;

  const animationEnd =
    Date.now() + duration;

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

    const timeLeft =
      animationEnd - Date.now();

    if (timeLeft <= 0) {

      return clearInterval(interval);
    }

    const particleCount =
      50 * (timeLeft / duration);

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