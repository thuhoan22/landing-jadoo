$(function () {
  // 상단 메인 슬라이드
  if ($(".top_banner .swiper-slide").length < 2) {
    $(
      ".top-banner_btn-prev, .top-banner_btn-next,.top_banner .swiper-pagination"
    ).hide();
    var topBannerOption = {
      navigation: false,
      loop: false,
    };
  } else {
    var topBannerOption = {
      navigation: {
        nextEl: ".top-banner_btn-next",
        prevEl: ".top-banner_btn-prev",
      },
      loop: true,
    };
  }
  var topBanner = new Swiper(".top_banner", {
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0,
    navigation: topBannerOption.navigation,
    loop: topBannerOption.loop,
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // 상단 서브 슬라이드
  if ($(".sub_banner .swiper-slide").length <= 3) {
    var subBannerOption = {
      loop: false,
    };
  } else {
    var subBannerOption = {
      loop: true,
    };
  }
  var subBanner = new Swiper(".sub_banner", {
    slidesPerView: "auto",
    loop: subBannerOption.loop,
    spaceBetween: 8,
    breakpoints: {
      1280: {
        spaceBetween: 12,
      },
    },
  });

  // manage-banner - swiper settings
  if ($(".manage-banner_slide").length <= 3) {
    $(".manage-swiper").addClass("manage-swiper-limited-width");
    $(".section-manage").addClass("no-gradient");
    $(".manage-banner_btn-prev, .manage-banner_btn-next").hide();
    var manageBannerOption = {
      navigation: false,
      loop: false,
      centeredSlides: false,
    };
  } else {
    var manageBannerOption = {
      navigation: {
        nextEl: ".manage-banner_btn-next",
        prevEl: ".manage-banner_btn-prev",
      },
      loop: true,
      centeredSlides: true,
    };
  }
  manageBanner = new Swiper(".manage-swiper", {
    navigation: manageBannerOption.navigation,
    loop: manageBannerOption.loop,
    centeredSlides: false,
    slidesPerView: "auto",
    spaceBetween: 8,
    observer: true,
    observeParents: true,
    breakpoints: {
      1280: {
        spaceBetween: 12,
        centeredSlides: manageBannerOption.centeredSlides,
      },
    },
    on: {
      resize: function () {
        this.slides.css("width", "");
      },
      init: function () {
        if (manageBannerOption.loop && window.innerWidth >= 1280) {
          this.slideNext(0);
        }
      },
    },
  });

  var swiperList = document.querySelectorAll(".concert_swiper .swiper-slide");
  var swiperListCnt = swiperList.length;

  var swiperPreSet = {
    slidesPerView: "auto",
    spaceBetween: 12,
    navigation: {
      nextEl: ".concert_swiper_next",
      prevEl: ".concert_swiper_prev",
    },
  };
  concert_Swiper = new Swiper(".concert_swiper", {
    ...swiperPreSet,
    loop: swiperListCnt > 3,
  });
});
