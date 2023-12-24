# swiper
스와이퍼 연습용 프로덕트 디자인 및 개발


----
### 1. swiper card 이펙트 사용

[냅다 보러가기](https://1101x.github.io/swiper/)

### 2. 슬라이드 클릭시 팝업창으로 이미지 다운로드 유도
### 3. 새로고침 클릭시 카드 더미 랜덤 재배치
피셔 예이츠 셔플 알고리즘 활용
```
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
```
