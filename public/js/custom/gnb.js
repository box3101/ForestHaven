window.addEventListener('DOMContentLoaded', function () {
  (function (e) {
    const activeName = "on";
    let maxHeight = 0;

    const $header = document.querySelector(".header");
    const $headerWrap = document.querySelector(".headerWrap");
    const $headerBg = document.querySelector(".headerBg");
    const $main = document.querySelector(".main");
    const $gnb = document.querySelector(".gnb");
    const links = $gnb.querySelectorAll("a");

    const $$gnbLink = document.querySelectorAll(".gnbLink");
    const $$subPanel = document.querySelectorAll(".subPanel");

    const subPenelHeight = [];

    // Gnb 최대 높이 설정 함수
    const gnbMaxHeight = () => {
      // panel height 높이 설정
      $$subPanel.forEach((el, idx) => {
        let panelHeight = el.clientHeight;
        subPenelHeight.push(panelHeight);
        maxHeight = Math.max(maxHeight, subPenelHeight[idx]);
      });
      $headerBg.style.height = `${maxHeight + 20}px`;
    };

    // Gnb 오픈 함수
    const gnbOpen = (e) => {
      const target = e.target;

      $$gnbLink.forEach((el) => {
        if (target == el) {
          $headerWrap.classList.add(activeName);
          $headerBg.classList.add(activeName);
          gnbMaxHeight();
        }
      });
    };

    // Gnb 닫는 함수
    const gnbClose = () => {
      $headerBg.classList.remove(activeName);
      $headerWrap.classList.remove(activeName);
    };

    // 탭키 접근성
    const tabKey = (e) => {
      if (e.key === "Tab") {
        $headerWrap.classList.add(activeName);
        $headerBg.classList.add(activeName);
        gnbMaxHeight();

        // 탭 키가 눌렸을 때, 현재 포커스가 있는 링크의 인덱스
        const focusedIndex = Array.from(links).indexOf(e.target);

        // 탭키가 처음 또는 마지막 키 눌렀을때
        if (focusedIndex === -1 || focusedIndex === links.length - 1) {
          $headerBg.classList.remove(activeName);
          $headerWrap.classList.remove(activeName);
        }
      }
    };

    // gnbItem li 활성화
    const changeImgAtive = (e) => {
      const target = e.target;
      const $changeImg = document.querySelector(".changImg");
      const $$gnbItem = document.querySelectorAll(".gnbItem");
      const $$subPanelItem = document.querySelectorAll(".subPanel a");

      // 배경 이미지 활성화 함수
      const changImgActive = (el) => {
        let changeImg = el.closest(".gnbItem").getAttribute("data-img");
        $changeImg.style.backgroundImage = `url(${changeImg})`;
      };

      $$gnbItem.forEach((el) => {
        if (target == el || target == el.querySelector(".subPanel")) {
          changImgActive(el);
        }
      });
      $$subPanelItem.forEach((el) => {
        if (target == el) {
          changImgActive(el);
        }
      });
    };

    $header.addEventListener("mouseover", gnbOpen);
    $main.addEventListener("mouseover", gnbClose);
    $gnb.addEventListener("keydown", tabKey);
    $gnb.addEventListener("mouseover", changeImgAtive);


    // 모바일 메뉴
    let menu = "close";
    document.querySelector(".menuToggle").addEventListener("click", () => {
      if (menu === "close") {
        document.querySelector(".mobileNav").style.transform = "translate(0%, 0)";
        menu = "open";
      } else {
        document.querySelector(".mobileNav").style.transform =
          "translate(100%, 0)";
        menu = "close";
      }
      document.querySelector(".menuToggle").classList.toggle("open");
      document.querySelector("html").classList.toggle("open");
    });

    const $$mobileNavItemAnchor = document.querySelectorAll(".mobileNavItem>a");
    const $$mobileNavItem = document.querySelectorAll(".mobileNavItem");

    // mobileNavItem a 클릭
    $$mobileNavItemAnchor.forEach((el) => {
      el.addEventListener("click", () => {
        // --> mobileNavItem.on이 아닐시
        if (!el.closest(".mobileNavItem").classList.contains("on")) {
          // 1. mobileNavItem 모두가 on클래스 remove
          $$mobileNavItem.forEach((element) => {
            element.classList.remove("on");
          });
          // 2. mobileNavItem a 클릭하면 부모요소 mobileNavItem.on 되어서 ul.dapth2가 보임
          el.closest(".mobileNavItem").classList.add("on");
        }

        // --> mobileNavItem.on 일시
        else {
          // 1. mobileNavItem a 클릭하면  mobileNavItem on remove
          el.closest(".mobileNavItem").classList.remove("on");
        }
      });
    });

    // 모바일 메뉴 접근성 클릭
    const mobileNavItem = document.querySelectorAll(".mobileNavItem a");
    const mobileNavItemLength = mobileNavItem.length - 1;
    const mobileNavItemActive = mobileNavItem[mobileNavItemLength];
    const menuToggle = document.querySelector(".menuToggle");

    // 교육경비 지원사업 링크다음으로 x버튼 포커스 이동
    mobileNavItem.forEach((el) => {
      el.addEventListener("focusout", function () {
        if (el == mobileNavItemActive) {
          menuToggle.focus();
        }
      });
    });
    // 모바일 메뉴 eee
  })();
});
