// import i18Obj from './translate.js';
// ________________________________________

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}


// const txt = document.querySelectorAll('[data-i18]');
// const langBtns = document.querySelectorAll('.lang');

// langBtns.forEach(el =>{
//     el.addEventListener("click", getTranslate)
// });

function getTranslateEN() {
  const RU = document.querySelector('.rus');
  const EN = document.querySelector('.eng');
  const txt = document.querySelectorAll('[data-i18]');

  EN == EN.classList.add('chosen');
  RU == RU.classList.remove('chosen');
  txt.forEach(
    txt => txt.innerText = i18Obj['en'][txt.getAttribute("data-i18")]
  )
}


function getTranslateRU() {
  const RU = document.querySelector('.rus');
  const EN = document.querySelector('.eng');
  const txt = document.querySelectorAll('[data-i18]');

  RU == RU.classList.add('chosen');
  EN == EN.classList.remove('chosen');
  txt.forEach(
    txt => {
      if (txt.placeholder) {
        txt.placeholder = i18Obj['ru'][txt.getAttribute("data-i18")]
        txt.textContent = ''
      }        
      txt.innerText = i18Obj['ru'][txt.getAttribute("data-i18")]
    // console.log(txt.getAttribute('data-value'))
    // function () {
    // console.log(txt.textContent);
    // txt.innerText = i18Obj['ru']['txt.dataset'];
        // el => { 
        //   el.getAttribute('data-i18');
        //   console.log(('fuck that was not easy ') + el.getAttribute("data-i18"));
        // }
    // }
    })
}


// function getTranslate(event) {
//     const langBtns = document.querySelectorAll('.lang');
//     const txt = document.querySelectorAll('[data-i18]');
//     const RU = document.querySelector('.rus');
//     const EN = document.querySelector('.eng');
    
//     langBtns.forEach(langBtns => langBtns.classList.remove('chosen'));
    
//     txt.forEach(el => {
//         if (el.placeholder) {
//             el.placeholder = i18Obj[event.target.innerText][el.dataset.i18]
//             el.textContent = ''
//           }        
//         el.innerText = i18Obj[event.target.innerText][el.dataset.i18]
//     })
//     console.log('fuck');
// } 






function scrollToTop() {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
  }






  
  function hideLang() {
    
    const checkBox = document.getElementById("menu-check");
    
    const text = document.getElementById("lang-box");
    const switchDiv = document.querySelector('.light-to-dark')
    const iconM = document.getElementById('dark-theme');
    const iconS = document.getElementById('light-theme');
  
    
    if (checkBox.checked == true){
      text.style.zIndex = "0";
      switchDiv.style.zIndex = '0';
      // iconM.style.zIndex = '0';
      // iconS.style.zIndex = '0';
    } else {
      text.style.zIndex = "2";
      switchDiv.style.zIndex = '2';
      // iconM.style.zIndex = '2';
      // iconS.style.zIndex = '2';
    }
  }






  function hideMenu() {
    const checkBox = document.getElementById("menu-check");
    const text = document.getElementById("lang");

    checkBox.checked = false;
    text.style.display = "inline-block";

  }




  function switchToLight() {
    const bg = document.querySelector('body');
    const toSwitch = document.querySelectorAll('.to-switch');
    const colorChange = document.querySelectorAll('.black')
    const lightSwitcher =  document.getElementById('light-theme');
    const darkSwitcher =  document.getElementById('dark-theme');
  
    bg.classList.add('light-theme');
    toSwitch.forEach(toSwitch => toSwitch.style.color = 'black');
    lightSwitcher.classList.add('hidden');
    darkSwitcher.classList.remove('hidden');
    // colorChange.forEach(colorChange => { 
    //   colorChange.style.backgroundColor = 'white';
    //   colorChange.style.color = 'black';
    // });
  }
  function switchToDark() {
    const bg = document.querySelector('body');
    const toSwitch = document.querySelectorAll('.to-switch');
    const h2 = document.querySelectorAll('h2')
    const lightSwitcher =  document.getElementById('light-theme');
    const darkSwitcher =  document.getElementById('dark-theme');
  
    bg.classList.remove('light-theme');
    toSwitch.forEach(toSwitch => toSwitch.style.color = 'white');
    darkSwitcher.classList.add('hidden');
    lightSwitcher.classList.remove('hidden');
    h2.forEach(h2 => h2.style.color = '#bdae82');
    
    // colorChange.forEach(colorChange => { 
    //   colorChange.style.backgroundColor = 'white';
    //   colorChange.style.color = 'black';
    // });
  }







  function winter() {
    const winterPhotos = document.querySelectorAll('.winter');
    const springPhotos = document.querySelectorAll('.spring');
    const summerPhotos = document.querySelectorAll('.summer');
    const autumnPhotos = document.querySelectorAll('.autumn');
    const btn = document.querySelector('.btn-winter');
    const otherBtn = document.querySelectorAll('.black')

    if (btn.classList.contains('focused')) {
    } else { 
      otherBtn.forEach(otherBtn => otherBtn.classList.remove('focused'));
      btn.classList.add('focused');
    }
    winterPhotos.forEach(winterPhotos => winterPhotos.style.display = "block");
    springPhotos.forEach(springPhotos => springPhotos.style.display = "none");
    summerPhotos.forEach(summerPhotos => summerPhotos.style.display = "none");
    autumnPhotos.forEach(autumnPhotos => autumnPhotos.style.display = "none");
  }

  function spring() {
    const winterPhotos = document.querySelectorAll('.winter');
    const springPhotos = document.querySelectorAll('.spring');
    const summerPhotos = document.querySelectorAll('.summer');
    const autumnPhotos = document.querySelectorAll('.autumn');
    const btn = document.querySelector('.btn-spring');
    const otherBtn = document.querySelectorAll('.black')

    if (btn.classList.contains('focused')) {
    } else { 
      otherBtn.forEach(otherBtn => otherBtn.classList.remove('focused'));
      btn.classList.add('focused');
    }
    winterPhotos.forEach(winterPhotos => winterPhotos.style.display = "none");
    springPhotos.forEach(springPhotos => springPhotos.style.display = "block");
    summerPhotos.forEach(summerPhotos => summerPhotos.style.display = "none");
    autumnPhotos.forEach(autumnPhotos => autumnPhotos.style.display = "none");
  }

  function summer() {
    const winterPhotos = document.querySelectorAll('.winter');
    const springPhotos = document.querySelectorAll('.spring');
    const summerPhotos = document.querySelectorAll('.summer');
    const autumnPhotos = document.querySelectorAll('.autumn');
    const btn = document.querySelector('.btn-summer');
    const otherBtn = document.querySelectorAll('.black')

    if (btn.classList.contains('focused')) {
    } else { 
      otherBtn.forEach(otherBtn => otherBtn.classList.remove('focused'));
      btn.classList.add('focused');
    }
    winterPhotos.forEach(winterPhotos => winterPhotos.style.display = "none");
    springPhotos.forEach(springPhotos => springPhotos.style.display = "none");
    summerPhotos.forEach(summerPhotos => summerPhotos.style.display = "block");
    autumnPhotos.forEach(autumnPhotos => autumnPhotos.style.display = "none");
  }

  function autumn() {
    const winterPhotos = document.querySelectorAll('.winter');
    const springPhotos = document.querySelectorAll('.spring');
    const summerPhotos = document.querySelectorAll('.summer');
    const autumnPhotos = document.querySelectorAll('.autumn');
    const btn = document.querySelector('.btn-autumn');
    const otherBtn = document.querySelectorAll('.black')

    if (btn.classList.contains('focused')) {
    } else { 
      otherBtn.forEach(otherBtn => otherBtn.classList.remove('focused'));
      btn.classList.add('focused');
    }
    winterPhotos.forEach(winterPhotos => winterPhotos.style.display = "none");
    springPhotos.forEach(springPhotos => springPhotos.style.display = "none");
    summerPhotos.forEach(summerPhotos => summerPhotos.style.display = "none");
    autumnPhotos.forEach(autumnPhotos => autumnPhotos.style.display = "block");
  }






  // function switc11Theme() {
  //     themeDiv.forEach(el => {
  //         let elements = document.querySelectorAll(el);
  //         elements.forEach(di => di.classList.toggle("light-theme"))
  //     })
  //     if (document.querySelector("body").classList.contains("light-theme")) {
  //       document.documentElement.style.setProperty('--title-color', 'black');
  //       document.querySelector('#light').childNodes[1].href.baseVal ="./assets/svg/sprite.svg#moon"
  //       localStorage.setItem('theme', 'light')
  //   }
  //   else {

  //   document.querySelector('#light').childNodes[1].href.baseVal ="./assets/svg/sprite.svg#carbon_sun"
  //       document.documentElement.style.setProperty('--title-color', '#bdae82');
  //       localStorage.setItem('theme', '')
  //   }
  // }

  // const hamburger = document.querySelector(".hamburger");
  // const navList = document.querySelector(".nav-list");
  
  // hamburger.addEventListener("click", mobileMenu);
  
  
  
  // const navItem = document.querySelectorAll(".nav-item");
  
  // navItem.forEach(n => n.addEventListener("click", closeMenu));
  
  // function closeMenu() {
  //     hamburger.classList.remove("is-active");
  //     navList.classList.remove("is-active");
  // }
  
  // function mobileMenu() {
  //     hamburger.classList.toggle("is-active");
  //     navList.classList.toggle("is-active");
      
  // }