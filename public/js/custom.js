var $ = jQuery.noConflict();
//  document.addEventListener("DOMContentLoaded", function () {
//     // Create the pop-up element
//     var popup = document.createElement('div');
//     popup.id = 'loadingPopup';
//     popup.style.position = 'fixed';
//     popup.style.top = '0';
//     popup.style.left = '0';
//     popup.style.width = '100%';
//     popup.style.height = '100%';
//     popup.style.backgroundColor = 'white';  // Set background color to white
//     popup.style.color = 'black';  // Set text color to black
//     popup.style.display = 'flex';
//     popup.style.justifyContent = 'center';
//     popup.style.alignItems = 'center';
//     popup.style.zIndex = '9999';
//     popup.innerHTML = '<p style="font-size: 24px;">Loading the page for a full experience—please stay connected!</p>';

//     // Add the pop-up to the body
//     document.body.appendChild(popup);

//     // Remove the pop-up after 5 seconds
//     setTimeout(function () {
//       popup.style.display = 'none';
//     }, 5000);  // Adjusted to 5 seconds (5000 ms)
//   });
$(document).ready(function() {
  $(".office-details .menu-has-child").click(function(){
  $(".menu-has-child").toggleClass("active");
});
	 $(".mobile-menu .menu-has-child").click(function(){
  $(".menu-has-child").toggleClass("active");
});
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

});
$(document).ready(function(){
  $(".abs-close").click(function(){
    $(".banner-form").removeClass("active");
  });
	
   // Close banner-form when clicking outside of it
      $(document).click(function(event) {
        if ($('.banner-form').hasClass('active') && !$(event.target).closest('.banner-form, #banner-toggle').length) {
          $('.banner-form').removeClass('active');
        }
      });
});




var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,

    breakpoints: {
        290: {
            slidesPerView: '1',
            freeMode: true,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: '1.5',
            freeMode: true,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, // Allow scrollbar to be draggable
        snapOnRelease: false // Disable automatic snapping of the scrollbar
      },
});

 var swiper = new Swiper(".mySwipermobile", {
		slidesPerView: 1.2,
	   spaceBetween: 20,
 });


var swiper1 = new Swiper('.swiper3', {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,

    breakpoints: {
        290: {
            slidesPerView: '1',
            freeMode: true,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: '1.5',
            freeMode: true,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   scrollbar: {
        el: ".swiper-scrollbar1",
        draggable: true, // Allow scrollbar to be draggable
        snapOnRelease: false // Disable automatic snapping of the scrollbar
      },
});


// var swiper = new Swiper(".mySwiper1", {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   breakpoints: {
//     290: {
//       slidesPerView: '2.5',
//       freeMode: true,
//       spaceBetween: 10,
//     },
//     640: {
//       slidesPerView: '2.5',
//       freeMode: true,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 5,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 5,
//     },
//   },
// });


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   breakpoints: {
//     290: {
//       slidesPerView: '2',
//       centeredSlides: true,
//       freeMode: true,
//       spaceBetween: 10,
//     },
//     640: {
//       slidesPerView: '2',
//       centeredSlides: true,
//       freeMode: true,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4.5,
//       spaceBetween: 5,
//     },
//     1024: {
//       slidesPerView: 4.15,
//       spaceBetween: 5,
//     },
//   },
// });




// function openModal1() {
//   document.getElementById("myModal1").style.display = "block";
// }

// function closeModal1() {
//   document.getElementById("myModal1").style.display = "none";
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }




function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
}
// function openModal2() {
//   document.getElementById("myModal2").style.display = "block";
// }

// function closeModal2() {
//   document.getElementById("myModal2").style.display = "none";
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function openModal3() {
//   document.getElementById("myModal3").style.display = "block";
// }
// function closeModal3() {
//   document.getElementById("myModal3").style.display = "none";
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function openModal4() {
//   document.getElementById("myModal4").style.display = "block";
// }

// function closeModal4() {
//   document.getElementById("myModal4").style.display = "none";
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }


// function openModal5() {
//   document.getElementById("myModal5").style.display = "block";
// }

// function closeModal5() {
//   document.getElementById("myModal5").style.display = "none";
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }


// function openModal6() {
//   document.getElementById("myModal6").style.display = "block";
// }

// function closeModal6() {
//   document.getElementById("myModal6").style.display = "none";
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function openModal7() {
//   document.getElementById("myModal7").style.display = "block";
// }

// function closeModal7() {
//   document.getElementById("myModal7").style.display = "none";
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }




  // Add event listeners for keydown events
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      plusSlides(-1);
    } else if (event.key === 'ArrowRight') {
      plusSlides(1);
    } else if (event.key === 'Escape') {
      closeModal();
    }
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  function closeSlideshow() {
    var slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
      slideshowContainer.style.display = 'none';
    }
  }



// var slideIndex = 1;
// var slideIndex1 = 1;
// var slideIndex2 = 2;
// var slideIndex3 = 3;
// var slideIndex4 = 4;
// var slideIndex5 = 5;
// var slideIndex5 = 6;
// var slideIndex5 = 7;
// showSlides(slideIndex);
// showSlides1(slideIndex1);
// showSlides2(slideIndex2);
// showSlides3(slideIndex3);
// showSlides4(slideIndex4);
// showSlides5(slideIndex5);
// showSlides6(slideIndex6);
// showSlides6(slideIndex7);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function plusSlides1(n) {
//   showSlides1(slideIndex1 += n);
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }

// function currentSlide1(n) {
//   showSlides1(slideIndex1 = n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function plusSlides2(n) {
//   showSlides2(slideIndex2 += n);
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function currentSlide2(n) {
//   showSlides2(slideIndex2 = n);
// }
// // Add event listeners for keydown events
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowLeft') {
//     plusSlides(-1);
//   } else if (event.key === 'ArrowRight') {
//     plusSlides(1);
//   } else if (event.key === 'Escape') {
//     closeSlideshow();
//   }
// });
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
  
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

// function closeSlideshow() {
//   var slideshowContainer = document.querySelector('.slideshow-container');
//   if (slideshowContainer) {
//     slideshowContainer.style.display = 'none';
//   }
// }

// function showSlides1(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides1");  //javascript $('.myslides1')
//   var dots = document.getElementsByClassName("demo1");
//   var captionText = document.getElementById("caption1");   //$("#caption1")
//   if (n > slides.length) {slideIndex1 = 1}
//   if (n < 1) {slideIndex1 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     // dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex1-1].style.display = "block";
//   //dots[slideIndex1-1].className += " active";
//   //   captionText.innerHTML = dots[slideIndex1-1].alt;
// }
// function showSlides2(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides2");  //javascript $('.myslides1')
//   var dots = document.getElementsByClassName("demo2");
//   var captionText = document.getElementById("caption2");   //$("#caption1")
//   if (n > slides.length) {slideIndex2 = 1}
//   if (n < 1) {slideIndex2 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     //dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex2-1].style.display = "block";
//   //dots[slideIndex2-1].className += " active";
// //    captionText.innerHTML = dots[slideIndex2-1].alt;
// }
// function showSlides3(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides3");  //javascript $('.myslides1')
//   var dots = document.getElementsByClassName("demo3");
//   var captionText = document.getElementById("caption3");   //$("#caption1")
//   if (n > slides.length) {slideIndex3 = 1}
//   if (n < 1) {slideIndex3 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
// //dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex3-1].style.display = "block";
// //dots[slideIndex3-1].className += " active";
// //captionText.innerHTML = dots[slideIndex3-1].alt;
// }
// function plusSlides3(n) {

//   showSlides3(slideIndex3 += n);
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function currentSlide3(n) {
//   showSlides3(slideIndex3 = n);
// }

// //4th slider
// function plusSlides4(n) {
//   showSlides4(slideIndex4 += n);
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function currentSlide4(n) {
//   showSlides4(slideIndex4 = n);
// }
// function showSlides4(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides4");  //javascript $('.myslides1')
//   var dots = document.getElementsByClassName("demo4");
//   var captionText = document.getElementById("caption4");   //$("#caption1")
//   if (n > slides.length) {slideIndex4 = 1}
//   if (n < 1) {slideIndex4 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
// //dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex4-1].style.display = "block";
// //dots[slideIndex4-1].className += " active";
// //captionText.innerHTML = dots[slideIndex4-1].alt;
// }
// //5th slider

// function plusSlides5(n) {
//   showSlides5(slideIndex5 += n);
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function currentSlide5(n) {
//   showSlides5(slideIndex5 = n);
// }

// function showSlides5(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides5");  //javascript $('.myslides1')
//   var dots = document.getElementsByClassName("demo5");
//   var captionText = document.getElementById("caption5");   //$("#caption1")
//   if (n > slides.length) {slideIndex5 = 1}
//   if (n < 1) {slideIndex5 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
// //dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex5-1].style.display = "block";
// //dots[slideIndex5-1].className += " active";
// //captionText.innerHTML = dots[slideIndex5-1].alt;
// }
// //
// $('a.stop-video').click(function(){
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// });

// //6th sider
// function plusSlides6(n) {
//   showSlides6(slideIndex6 += n);
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function currentSlide6(n) {
//   showSlides6(slideIndex6 = n);
// }

// function showSlides6(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides6");  //javascript $('.myslides1')
//   var dots = document.getElementsByClassName("demo6");
//   var captionText = document.getElementById("caption6");   //$("#caption1")
//   if (n > slides.length) {slideIndex6 = 1}
//   if (n < 1) {slideIndex6 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
// //dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex6-1].style.display = "block";
// //dots[slideIndex6-1].className += " active";
// //captionText.innerHTML = dots[slideIndex6-1].alt;
// }
// //
// function plusSlides7(n) {
//   showSlides7(slideIndex7 += n);
//   $('.rll-youtube-player').find('iframe').each(function(){
//     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//   });
// }
// function currentSlide7(n) {
//   showSlides7(slideIndex7 = n);
// }

// function showSlides7(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides7");  //javascript $('.myslides1')
//   var dots = document.getElementsByClassName("demo7");
//   var captionText = document.getElementById("caption7");   //$("#caption1")
//   if (n > slides.length) {slideIndex7 = 1}
//   if (n < 1) {slideIndex7 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
// //dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex7-1].style.display = "block";
// //dots[slideIndex7-1].className += " active";
// //captionText.innerHTML = dots[slideIndex7-1].alt;
// }

//   $('#video_id').on('loadstart', function (event) {
//     $(this).addClass('loading');
//   });
//   $('#video_id').on('canplay', function (event) {
//     $(this).removeClass('loading');
//     $(this).attr('poster', '');
//   });



// $(document).ready(function () {

//   /*************For vertical accordion of desktop*************/

//   var section_newqled = $('.samsung__list__newled .vertical_accordion li');

//   function toggleAccordion_newqled() {
//     if ($(this).hasClass("active")) {
//       $('#neoqled__id').click();
//     }
//     section_newqled.removeClass('active');
//     $(this).addClass('active');

//   }

//   section_newqled.on('click', toggleAccordion_newqled);

//   var section_qled = $('.samsung__list__qled .vertical_accordion li');

//   function toggleAccordion_qled() {
//     if ($(this).hasClass("active")) {
//       $('#qled__id').click();
//     }
//     section_qled.removeClass('active');
//     $(this).addClass('active');
//   }

//   section_qled.on('click', toggleAccordion_qled);

//   var section_uhd = $('.samsung__list__uhd .vertical_accordion li');

//   function toggleAccordion_uhd() {
//     if ($(this).hasClass("active")) {
//       $('#uhd__id').click();
//     }
//     section_uhd.removeClass('active');
//     $(this).addClass('active');
//   }

//   section_uhd.on('click', toggleAccordion_uhd);


//   var section_lifestyle = $('.samsung__list__tvlifestyle .vertical_accordion li');

//   function toggleAccordion_lifestyle() {
//     if ($(this).hasClass("active")) {
//       $('#lifestyle__id').click();
//     }
//     section_lifestyle.removeClass('active');
//     $(this).addClass('active');
//   }

//   section_lifestyle.on('click', toggleAccordion_lifestyle);

//   var section_lifestyle = $('.digital__list__tvlifestyle .vertical_accordion li');

//   function toggleAccordion_digital() {
//     if ($(this).hasClass("active")) {
//       $('#lifestyle__id').click();
//     }s
//     section_lifestyle.removeClass('active');
//     $(this).addClass('active');
//   }

//   section_lifestyle.on('click', toggleAccordion_lifestyle);
//   /*************End For vertical accordion of desktop*************/


//   /*************On click of small thumbnails of samsung list*************/
//   var brsec = $('.samsung__lists li');

//   function toggleAcc() {
//     brsec.removeClass('active');
//     $(this).addClass('active');
//     var topsec_id = $(this).data('topsec');
//     var br_all_section = $('section.br-section');
//     br_all_section.removeClass('active');
//     $("." + topsec_id).addClass('active');

//     $("." + topsec_id).find('.samsung__display__list_acc').removeClass('active');
//     $("." + topsec_id).find(".samsung__display__list").show();
//     $("." + topsec_id).find(".samsung__accordion").removeClass("active");
//   }

//   brsec.on('click', toggleAcc);
//   /*************End On click of small thumbnails of samsung list*************/


//   /************* On click for Mobile to open accordion list *************/
//   var brdisplay = false;
//   var samsung_display_list = $('.samsung__display__list li');

//   function toggleSamsungDisplay() {
//     var $this = $(this);
//     samsung_display_list.removeClass('active');
//     $this.addClass('active');
//     var sec_id = $this.data('sec');
//     var acc_sec_id = $this.data('accid');
//     $("#" + acc_sec_id).parent().parent().parent().find('.samsung__accordion').removeClass('active');
//     $("#" + acc_sec_id).parent().parent().parent().find('.accordion__title').removeClass('active accordion-active');
//     $("#" + acc_sec_id).parent().parent().parent().find('.accordion__content').hide();
//     if (!$("#" + acc_sec_id).siblings('.accordion__title').hasClass("accordion-active")) {
//       $("#" + acc_sec_id).slideToggle();
//       $("#" + acc_sec_id).siblings('.accordion__title').addClass('active accordion-active');
//     }

//     $("#" + sec_id).addClass('active');
//     $("#" + sec_id).siblings('li').removeClass('active');
//     $this.parent().parent().find('.samsung__display__list_acc').addClass('active');
//     var samsung_accordion = $(".samsung__accordion");
//     samsung_accordion.removeClass('active');
//     $("#" + acc_sec_id).parent().parent().parent().find('.samsung__accordion').addClass('active');
//     $this.parent().parent().find(".samsung__display__list").hide();
//   }

//   samsung_display_list.on('click', toggleSamsungDisplay);
//   /************* End click for Mobile to open accordion list *************/

//   $(function () {

//     /************* Accordion of Mobile *************/
//     $(".accordion__title").on("click", function (e) {

//       e.preventDefault();
//       var $this = $(this);

//       if (!$this.hasClass("accordion-active")) {
//         $(".accordion__content").slideUp(400);
//         $(".accordion__title").removeClass("accordion-active");
//       }

//       $this.toggleClass("accordion-active");
//       $this.next().slideToggle();
//     });
//     /************* End Accordion of Mobile *************/
//   });

// });