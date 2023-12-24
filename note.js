document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(".swiper-wrapper");
  const shuffleButton = document.querySelector("p");

  shuffleButton.addEventListener("click", function () {
    const slides = Array.from(swiperContainer.children);
    const shuffledSlides = shuffleArray(slides);

    swiperContainer.innerHTML = "";
    shuffledSlides.forEach((slide) => {
      swiperContainer.appendChild(slide);
    });

    // Swiper 객체 다시 초기화
    const swiper = new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      centeredSlidesBounds: true,
      hashNavigation: true,
    });

    swiper.on("click", function (e) {
      const clickedHash = this.clickedSlide.getAttribute("data-hash");
      const clickedNum = clickedHash.replace("slide", "");
      console.log(clickedNum);
      window.open(`./images/img_${clickedNum}.jpg`, "_blank");
    });
  });

  // 배열을 무작위로 섞는 함수
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
});

//----------모달

openModal(`./images/img_${clickedNum}.jpg`);
// 모달 열기 함수
function openModal(imageSrc) {
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = imageSrc;
  modal.style.display = "block";
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// 모달 외부 클릭 시 닫기
window.addEventListener("click", function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
});

////////

var swiperWrapper = document.querySelector(".swiper-wrapper");
var slides = Array.from(swiperWrapper.children);

// 배열을 랜덤하게 섞는 함수
function shuffleArray(array) {
  var shuffledArray = array.slice();
  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
}

// 슬라이드 순서를 랜덤으로 설정
var shuffledSlides = shuffleArray(slides);

// 기존 슬라이드 제거
slides.forEach(function (slide) {
  swiperWrapper.removeChild(slide);
});

// 섞인 순서대로 슬라이드 추가
shuffledSlides.forEach(function (slide) {
  swiperWrapper.appendChild(slide);
});

// 스와이퍼 초기화
var swiper = new Swiper(".Slider-container", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  centeredSlidesBounds: true,
  hashNavigation: true,
});

//
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#swiper-container", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    centeredSlidesBounds: true,
    hashNavigation: true,
    initialSlide: Math.floor(Math.random() * 7),
  });

  swiper.on("click", function (e) {
    const clickedSlide = e.target.closest(".swiper-slide");

    if (clickedSlide) {
      const dataHash = clickedSlide.getAttribute("data-hash");

      if (dataHash) {
        const url = `https://www.naver.com#${dataHash}`;
        window.location.href = url;
      }
    }
  });
});
//////

const refreshButton = document.querySelector("p");
const swiperContainer = document.querySelector(".swiper-wrapper");

// 함수를 사용하여 슬라이드 순서 랜덤 섞기
function shuffleSlides() {
  const slides = Array.from(swiperContainer.children);
  swiperContainer.innerHTML = ""; // 슬라이드 컨테이너 비우기

  // 배열을 섞기 위해 Fisher-Yates 알고리즘 사용
  for (let i = slides.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [slides[i], slides[j]] = [slides[j], slides[i]];
  }

  // 섞인 슬라이드를 다시 컨테이너에 추가
  slides.forEach((slide) => swiperContainer.appendChild(slide));

  // 스와이퍼 초기화
  swiper.update();
}

refreshButton.addEventListener("click", function () {
  shuffleSlides(); // 슬라이드 순서 랜덤 섞기
  location.reload(); // 페이지 새로고침
});

const swiper = new Swiper(".swiper", {
  // 기타 Swiper 옵션들...
  // ...
});
