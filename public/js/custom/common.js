(function () {
  // 수강신청 -> 상세검색 클릭시 스크립트
  const detailedSearch = () => {
    if (document.querySelector('.searchArea')) {
      const $detailedSearchBtn = document.querySelector(".detailedSearch");
      $detailedSearchBtn.addEventListener("click", (e) => {
        const target = e.target;
        target.closest(".searchArea__info").classList.toggle("on");
      });
    }
  }
  detailedSearch();
  // 수강신청 -> 상세검색 클릭시 스크립트 eee

  // 동의 스크롤
  const scrollable = () => {
    if (document.querySelector('.scrollable-element')) {
      let $$hint = document.querySelectorAll(".hint");
      // 스크롤 체크
      const checkScroll = () => {
        let $$formCheck = document.querySelectorAll(".formChkbox__control");
        $$formCheck.forEach((el) => {
          el.addEventListener("click", () => {
            let hint = el.closest(".formChkbox").nextElementSibling;
            hint.style.display = "block";
          });
        });
      }

      const $$scrollableElement = document.querySelectorAll('.scrollable-element');
      checkScroll();

      $$scrollableElement.forEach((el) => {
        el.addEventListener('scroll', () => {
          const agreeRow = el.closest(".agreeRow");
          const checkbox = agreeRow.querySelector('.my-checkbox');
          const hint = agreeRow.querySelector(".hint");

          if (el.scrollTop + el.clientHeight >= el.scrollHeight - 1) {
            checkbox.disabled = false;
            hint.style.opacity = "0";
          } else {
            checkbox.disabled = true;
            hint.style.opacity = "1";
            checkScroll();
          }
        });
      });
    }

  }
  scrollable();
})();