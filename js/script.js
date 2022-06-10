document.querySelector('.fa-bars').onclick = ()=>{
    document.querySelector('.nav').classList.toggle('active');
    // document.getElementsByTagName('BODY')[0].classList.toggle('navActive')
    
}
document.querySelector('.fa-times').onclick = ()=>{
    document.querySelector('.nav').classList.remove('active');
    document.getElementsByTagName('BODY')[0].classList.toggle('navActive')
}

document.querySelector('.fa-moon').onclick = ()=>{
    document.getElementsByTagName('BODY')[0].classList.toggle('dark')
    // document.querySelector('.header').classList.toggle('headerDark')
}

// featured products
// initialize swiper

  /*function myFunction(x) {
    if (x.matches) { // If media query matches
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10,
            grabCursor: true,
            loop: true,            
          });
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            
          });
    }
  }
  
  var x = window.matchMedia("(max-width: 568px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  */
  const swiper = new Swiper('.mySwiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
//   featured products
let smallProduct1 = document.querySelectorAll('.smallProduct1');
let bigProduct1 = document.querySelector('.bigProduct1');
smallProduct1.forEach(imgDiv=>{
    imgDiv.addEventListener('click',()=>{
        bigProduct1.querySelector('img').src = imgDiv.querySelector('img').src;
    })
})
let smallProduct2 = document.querySelectorAll('.smallProduct2');
let bigProduct2 = document.querySelector('.bigProduct2');
smallProduct2.forEach(imgDiv=>{
    imgDiv.addEventListener('click',()=>{
        bigProduct2.querySelector('img').src = imgDiv.querySelector('img').src;
    })
})
let smallProduct3 = document.querySelectorAll('.smallProduct3');
let bigProduct3 = document.querySelector('.bigProduct3');
smallProduct3.forEach(imgDiv=>{
    imgDiv.addEventListener('click',()=>{
        bigProduct3.querySelector('img').src = imgDiv.querySelector('img').src;
    })
})

// count down
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('July 01, 2022 :00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.querySelector('.days').innerText = Math.floor(distance / (day)),
        document.querySelector('.hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.querySelector('.minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.querySelector('.seconds').innerText = Math.floor((distance % (minute)) / second);
      
    }, second)