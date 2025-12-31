window.addEventListener('DOMContentLoaded', function () {
  (function () {
    const $$swiperAll = document.querySelectorAll(".swiper-slide");
    const $currentNum = document.querySelector(".currentNum");
    const $allNum = document.querySelector(".allNum");
    const comSlidePaging = document.querySelector(".comSlidePaging");
    const $visualSlide = document.querySelector("#visualSlide");
    const $detailSlideList = document.querySelector("#detailSlideList");
    const $sharingSpaceList = document.querySelector("#sharingSpaceList");

    const changeTabIndex = () => {
      $$swiperAll.forEach((el) => {
        const $swiperAnchor = el.querySelector("a");
        if (el.classList.contains("swiper-slide-active")) {
          $swiperAnchor.setAttribute("tabindex", "0");
        } else {
          $swiperAnchor.setAttribute("tabindex", "-1");
        }
      });
      const $$swiperSlideDuplicateAll = document.querySelectorAll(".swiper-slide-duplicate a");
      $$swiperSlideDuplicateAll.forEach((el) => {
        el.setAttribute("tabindex", "-1");
      });
    }

    // visualSlide
    if ($visualSlide) {
      comSlidePaging.style.display = "flex";
      const visualSlide = new Swiper('#visualSlide', {
        // autoplay: {
        //   delay: 3000,
        // },
        loop: true,
        // effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next', // 다음 버튼 클래스명
          prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
        },
        a11y: {
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
        },
        on: {
          init: function () {
            thisSlide = this;
            autoPlayBtn = document.querySelector('.autoplayControl > button');
            autoPlayBtn.addEventListener('click', () => {
              autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
              if (autoPlayState === 'false') {
                autoPlayBtn.setAttribute('aria-pressed', 'true');
                thisSlide.autoplay.stop();
              } else if (autoPlayState === 'true') {
                autoPlayBtn.setAttribute('aria-pressed', 'false');
                thisSlide.autoplay.start();
              };
            });
            changeTabIndex();
          },
          activeIndexChange: function () {
            this.realIndex += 1;
            $currentNum.textContent = `0${this.realIndex}`;
            $allNum.textContent = `0${$$swiperAll.length}`;
          },
          slideChangeTransitionStart: () => {
            changeTabIndex();
          },
        },
      });
    }

    // 평생학습동아리 상세페이지 슬라이드
    if ($detailSlideList) {
      const detailSlideItem = new Swiper('#detailSlideItem', {
        spaceBetween: 10,
        slidesPerView: '4',
        freeMode: true,
        watchSlidesProgress: true,
      });
      const detailSlideList = new Swiper('#detailSlideList', {
        navigation: {
          nextEl: '.swiper-button-next', // 다음 버튼 클래스명
          prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
        },
        thumbs: {
          swiper: detailSlideItem
        },
        a11y: {
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
        },
        on: {
          init: function () {
            // changeTabIndex();
          },
          slideChangeTransitionStart: () => {
            // changeTabIndex();
          },
        },
      });

      $$swiperBtn = document.querySelectorAll(".swiperBtn");
      $$swiperBtn.forEach((el, idx) => {
        let slideIndex = idx;
        el.addEventListener("keydown", (e) => {
          if (e.keyCode === 13) {
            detailSlideList.slideTo(slideIndex);
          }
        });
      });
    }

    // 나눔공간현황 상세페이지 슬라이드
    if ($sharingSpaceList) {
      const sharingSpaceItem = new Swiper('#sharingSpaceItem', {
        spaceBetween: 10,
        slidesPerView: '4',
        freeMode: true,
        watchSlidesProgress: true,
      });
      const sharingSpaceList = new Swiper('#sharingSpaceList', {
        navigation: {
          nextEl: '.swiper-button-next', // 다음 버튼 클래스명
          prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
        },
        thumbs: {
          swiper: sharingSpaceItem
        },
        a11y: {
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
        },
        on: {
          init: function () {
            // changeTabIndex();
          },
          slideChangeTransitionStart: () => {
            // changeTabIndex();
          },
        },
      });

      $$swiperBtn = document.querySelectorAll(".swiperBtn");
      $$swiperBtn.forEach((el, idx) => {
        let slideIndex = idx;
        el.addEventListener("keydown", (e) => {
          if (e.keyCode === 13) {
            detailSlideList.slideTo(slideIndex);
          }
        });
      });
    }

  })();
});