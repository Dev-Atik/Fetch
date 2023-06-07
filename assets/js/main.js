(function ($) {
  "use strict";

  $(window).on('load', function () {});

  /*---------------------
    preloader
    --------------------- */

  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  if ($('.hero-tiny-slider').length > 0) {
    var hero_tiny_slider = tns({
      container: '.hero-tiny-slider',
      items: 1,
      nav: false,
      controlsText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1
        }
      }
    });
  }

  if ($('.testimonial-tiny-slider').length > 0) {
    var testimonial_tiny_slider = tns({
      container: '.testimonial-tiny-slider',
      items: 1,
      controls: false,
      arrowKeys: false,
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1
        }
      }
    });
  }

  // searchbar area start
  $('.serarchbar-show').on('click', function () {
    $('.serchbar').css('display', 'block');
  })
  $('.serchbar-xross').on('click', function () {
    $('.serchbar').css('display', 'none');
  })
  // searchbar area end

  // shop product list item area start

  $('.Plist-one').on('click', function () {
    $('.fsp-content-three').css('display', 'block');
    $('.fsp-content-one').css('display', 'none');
    $('.fsp-content-two').css('display', 'none');
  });

  $('.Plist-two').on('click', function () {
    $('.fsp-content-two').css('display', 'block');
    $('.fsp-content-one').css('display', 'none');
    $('.fsp-content-three').css('display', 'none');
  });


  $('.Plist-three').on('click', function () {
    $('.fsp-content-three').css('display', 'none');
    $('.fsp-content-one').css('display', 'block');
    $('.fsp-content-two').css('display', 'none');
  });

  // shop product list item area end

  //Fact Counter + Text Count
  if ($('.count-box').length) {
    $('.count-box').appear(function () {

      var $t = $(this),
        n = $t.find(".count-text").attr("data-stop"),
        r = parseInt($t.find(".count-text").attr("data-speed"), 10);

      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".count-text").text()
        }).animate({
          countNum: n
        }, {
          duration: r,
          easing: "linear",
          step: function () {
            $t.find(".count-text").text(Math.floor(this.countNum));
          },
          complete: function () {
            $t.find(".count-text").text(this.countNum);
          }
        });
      }

    }, {
      accY: 0
    });
  }

  /*-----------------------
    Testimonial-carousel
  ------------------------*/
  $('.customers-review-carousel').owlCarousel({
    items: 5,
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    center: true,
    navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });


  /*-----------------------
  Slideshow-carousel
------------------------*/
  $('.fetch-slideshow-carousel').owlCarousel({
    items: 5,
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 0,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    center: true,
    animateOut: 'fadeOut',
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });


// shop page area start

$('.Availability').on('click', function(){
  $('.fc-one').slideToggle();
})

$('.pprice').on('click', function(){
  $('.fc-two').slideToggle();
})

$('.psize').on('click', function(){
  $('.fc-three').slideToggle();
})

// shop page area end




  // responsive navbar area start

  $('.res-shop-dropdown').on('click', function () {
    $('.shopcolor').slideToggle();
  });


  $('.res-suply-dropdown').on('click', function () {
    $('.suply').slideToggle();
  });

  // responsive navbar area end




  $(document).ready(function () {
    "use strict";
    $(".menu > ul > li:has( > ul)").addClass("menu-dropdown-icon");
    $(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub");
    $(".menu > ul").before('<a href="#" class="menu-mobile">&nbsp;</a>');
    $(".menu > ul > li").hover(function (e) {
      if ($(window).width() > 943) {
        $(this).children("ul").stop(true, false).fadeToggle(150);
        e.preventDefault();
      }
    });
    $(".menu > ul > li").click(function () {
      if ($(window).width() <= 943) {
        $(this).children("ul").fadeToggle(150);
      }
    });
    $(".menu-mobile").click(function (e) {
      $(".menu > ul").toggleClass("show-on-mobile");
      e.preventDefault();
    });
  });
  $(window).resize(function () {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass("show-on-mobile");
  });


  $(document).ready(function () {
    var videoLink = $("#fetch-video-link").val();
    var videoID = videoLink.split("v=")[1];
    $("#player").attr("src", "https://www.youtube.com/embed/" + videoID + "?&autoplay=1");
  });

  $('#offercountdownbanner').countdown('2025/01/01', function (event) {
    $(this).html(event.strftime('<ul><li><h4>%D</h4><p>Days</p></li><li><h4>%H</h4><p>Hours</p></li><li><h4>%M</h4><p>Minutes</p></li><li><h4>%S</h4><p>Seconds</p></li></ul>'));
  });




  $(document).ready(function () {

    var lowerSlider = document.querySelector("#lower");
    var upperSlider = document.querySelector("#upper");

    document.querySelector("#two").value = upperSlider.value;
    document.querySelector("#one").value = lowerSlider.value;

    var lowerVal = parseInt(lowerSlider.value);
    var upperVal = parseInt(upperSlider.value);

    upperSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);

      if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
          upperSlider.value = 4;
        }
      }
      document.querySelector("#two").value = this.value;
    };

    lowerSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);
      if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
          lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
      }
      document.querySelector("#one").value = this.value;
    };
  });


  // single product slider start

  $('.single-product-left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sp-left-slider-nav'
  });
  $('.sp-left-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.single-product-left-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
  });

  // single product slider end

  // countdown js start
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
  // countdown js end

  // beforeafter img siider start

  $('.beforeAfter').beforeAfter({

    // is draggable/swipeable
    movable: true,

    // click image to move the slider
    clickMove: true,

    // always show the slider
    alwaysShow: true,

    // intial position of the slider
    position: 50,

    // opacity between 0 and 1
    opacity: 1,
    activeOpacity: 1,
    hoverOpacity: 1,

    // slider colors
    separatorColor: '#ffffff',
    bulletColor: '#ffffff',
    arrowColor: '#000000',
    bulletWidth: '50px',
  });





}(jQuery));