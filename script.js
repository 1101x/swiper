// 기본 코드

const swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  centeredSlidesBounds: true,
  // hashNavigation: true,
});

//pc사이즈
swiper.on("click", function () {
  const msg = matchMedia("screen and (min-width: 768px)").matches
    ? "팝업을 허용하여 카드를 다운받으시겠사와요?"
    : "팝업을 허용하여\n카드를 다운받으시겠사와요?";

  if (confirm(msg)) {
    const clickedNum = this.clickedSlide
      .getAttribute("data-hash")
      .replace("slide", "");
    window.open(`./images/img_${clickedNum}.jpg`);
  }
});

/////새로고침 순서 바꾸기
const swiperWrapper = document.querySelector(".swiper-wrapper");

function newShuffle() {
  const cards = Array.from(swiperWrapper.children);
  console.log(cards);
  let newcards = [];

  while (cards.length > 0) {
    let neworder = Math.floor(Math.random() * cards.length);
    let shuffledorder = cards.splice(neworder, 1)[0];
    newcards.push(shuffledorder);
  }
  newcards.forEach((array) => swiperWrapper.appendChild(array));
  console.log(newcards);

  swiper.update();
}

// 새로고침버튼
const shuffleButton = document.querySelector(".shuffle-btn");
shuffleButton.addEventListener("click", function () {
  // location.reload();
  newShuffle();

  document.ontouchstart = () => {
    shuffleButton.classList.add("touched");
    setTimeout(() => shuffleButton.classList.remove("touched"), 500);
  };
});
