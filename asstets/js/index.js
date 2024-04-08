
var htlcnt = ["<h2 class='h1 text-center' data-aos='zoom-in' data-aos-duration='3000'>Discover The Perfect Balance Of Hospitality,Luxury And Comfort.</h2><p class='text-center' style='font-size: 1.2rem;' data-aos='zoom-in' data-aos-duration='3000'>We are focused on providing clients with high level of comfort <br/>and excellent affordable rates.</p><div class='w-100' style='display: flex;justify-content: center;'><a href='#' data-bs-toggle='modal' data-bs-target='#book-room' class='mt-3'><span>Book A Room</span><span>Book A Room</span></a></div>",
               "<h2 class='h1 text-center' data-aos='zoom-in' data-aos-duration='3000'>You Have A Destination We Have A Beautiful Place For You!</h2><p class='text-center' style='font-size: 1.2rem;' data-aos='zoom-in' data-aos-duration='3000'>We are focused on providing clients with high level of comfort <br/>and excellent affordable rates.</p><div class='w-100' style='display: flex;justify-content: center;'><a href='#' data-bs-toggle='modal' data-bs-target='#book-room' class='mt-3'><span>Book A Room</span><span>Book A Room</span></a></div>",
               "<h2 class='h1 text-center' data-aos='zoom-in' data-aos-duration='3000'>Our Hotel Is Stylishly Designed With Your Comfort In Mind.</h2><p class='text-center' style='font-size: 1.2rem;' data-aos='zoom-in' data-aos-duration='3000'>We are focused on providing clients with high level of comfort <br/>and excellent affordable rates.</p><div class='w-100' style='display: flex;justify-content: center;'><a href='#' data-bs-toggle='modal' data-bs-target='#book-room' class='mt-3'><span>Book A Room</span><span>Book A Room</span></a></div>",
               "<h2 class='h1 text-center' data-aos='zoom-in' data-aos-duration='3000'>Spend Your Quality Holidays With Our World Class Hotel.</h2><p class='text-center' style='font-size: 1.2rem;' data-aos='zoom-in' data-aos-duration='3000'>We are focused on providing clients with high level of comfort <br/>and excellent affordable rates.</p><div class='w-100' style='display: flex;justify-content: center;'><a href='#' data-bs-toggle='modal' data-bs-target='#book-room' class='mt-3'><span>Book A Room</span><span>Book A Room</span></a></div>"
              ];

  // Scroll Events Start
window.addEventListener("scroll", function () {

  document.getElementById("Back2Top").classList.toggle("bact-to-top", window.scrollY);
  document.getElementById("top-second-bar").classList.toggle("fixed-top", window.scrollY);

  if (document.getElementById("top-second-bar").classList.contains("fixed-top")) {
    document.getElementById("top-second-bar").style.opacity = 1;
    // document.getElementById("top-second-bar").style.zIndex = ;
    document.getElementById("top-second-bar").style.position = 'fixed';
    document.getElementById("top-second-bar").style.backgroundColor = '#00486c';
    document.getElementById("hotelContent").style.height = 100 + '%';
  }
  else {
    document.getElementById("top-second-bar").style.opacity = 0.7;
    document.getElementById("top-second-bar").style.position = 'relative';
    document.getElementById("top-second-bar").style.backgroundColor = '#000';
    document.getElementById("hotelContent").style.height = 90 + '%';
  }



});
// Scroll Events End

// onload Events Start
document.getElementsByTagName("body")[0].onload = function () {
  var img = ['hero-bg1', 'hero-bg2', 'hero-bg3', 'hero-bg4', 'hero-bg5'];
  var noOfImg = img.length;
  var obj = document.querySelector(".hero-bg");
  obj.classList.add(img[0]);
  var i = 1;
  var len = htlcnt.length;
 // document.querySelector('.hotel-bg-content1').innerHTML = htlcnt[i];
  window.setInterval(anim, 4000);
  function anim() {

    document.querySelector('.hotel-bg-content1').innerHTML = htlcnt[i];
    i++;
    if(i==len)
      i=0;

    if (obj.classList.contains('hero-bg1')) {
      obj.classList.remove('hero-bg1');
      obj.classList.add('hero-bg2');
    }
    else if (obj.classList.contains('hero-bg2')) {
      obj.classList.remove('hero-bg2');
      obj.classList.add('hero-bg3');
    }
    else if (obj.classList.contains('hero-bg3')) {
      obj.classList.remove('hero-bg3');
      obj.classList.add('hero-bg4');
    }
    else if (obj.classList.contains('hero-bg4')) {
      obj.classList.remove('hero-bg4');
      obj.classList.add('hero-bg5');
    }
    else {
      obj.classList.remove('hero-bg5');
      obj.classList.add('hero-bg1');
    }
    
  }
 
}
// onload Events End


function imgSizeIncrease(obj, n) {
  obj.style.height = n + '%';
  obj.style.transition = 'all ease-in 1s';
}
function imgSizeDecrease(obj, n) {
  obj.style.height = n + '%';
}

//   Our Staff JS Swiper Start

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      }
    }
  });
//   Our Staff JS Swiper End  

//counter start
$(document).ready(function () {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 10);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});
//Counter End

// Enquiry Block Even start
var status=0;
document.querySelector(".enquiry").addEventListener("click",function(){
  
  if(status==0){
    document.querySelector(".enquiry-block").style.display='block';
    status=1;
  }
  else{
    document.querySelector(".enquiry-block").style.display='none';
    status=0;
  }
});
// Enquiry Block Even start

/* ===========Filter start============== */
var status=0;
document.querySelector(".filter").addEventListener('click',function(){
  if(status==0){
    document.querySelector(".filter-arrow").style.transform='rotate(90deg)'; 
    document.querySelector(".filter-arrow").style.transition='all 1s ease-in'; 
    document.querySelector(".range").style.display='block';
    document.querySelector(".range").style.transition='display 1s ease-in';
    document.querySelector(".price-block").style.display='block'; 
    document.querySelector(".price-block").style.transition='display 1s ease-in';
    document.querySelector(".price-block").classList.add('d-flex','justify-content-evenly','align-items-center','flex-row'); 
    status=1;
  }
  else{
    document.querySelector(".filter-arrow").style.transform='rotate(0deg)'; 
    document.querySelector(".filter-arrow").style.transition='all 1s ease-in'; 
    document.querySelector(".range").style.display='none'; 
    document.querySelector(".range").style.transition='display 1s ease-in';
    document.querySelector(".price-block").style.display='none'; 
    document.querySelector(".price-block").style.transition='display 1s ease-in';
    document.querySelector(".price-block").classList.remove('d-flex'); 
    status=0;
  }
});
document.querySelector(".filter-arrow").addEventListener('click',function(){
  if(status==0){
    document.querySelector(".filter-arrow").style.transform='rotate(90deg)'; 
    document.querySelector(".filter-arrow").style.transition='all 1s ease-in'; 
    document.querySelector(".range").style.display='block';
    document.querySelector(".range").style.transition='display 1s ease-in';
    document.querySelector(".price-block").style.display='block'; 
    document.querySelector(".price-block").style.transition='display 1s ease-in';
    document.querySelector(".price-block").classList.add('d-flex','justify-content-evenly','align-items-center','flex-row'); 
    status=1;
  }
  else{
    document.querySelector(".filter-arrow").style.transform='rotate(0deg)'; 
    document.querySelector(".filter-arrow").style.transition='all 1s ease-in'; 
    document.querySelector(".range").style.display='none'; 
    document.querySelector(".range").style.transition='display 1s ease-in';
    document.querySelector(".price-block").style.display='none'; 
    document.querySelector(".price-block").style.transition='display 1s ease-in';
    document.querySelector(".price-block").classList.remove('d-flex'); 
    status=0;
  }
});

document.querySelector("#price-range").addEventListener('change',function(){
  document.querySelector("#val1").value=document.querySelector("#price-range").value;  

});
/* ===========Filter end============== */

