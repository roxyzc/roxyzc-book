let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let login = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    login.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1400: {
          slidesPerView:5,
      },
    },
  });

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

let dark = document.querySelector('#dark');

dark.onclick = () =>{
    dark.classList.toggle('fa-sun')
    if(dark.classList.contains('fa-sun')){
        document.body.classList.add('active');
    } else{
        document.body.classList.remove('active');
    }
}