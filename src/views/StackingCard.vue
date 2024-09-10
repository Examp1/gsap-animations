<template>
  <div class="spacer" style="height:50vh;">Scroll Down</div>
  <div class="header">Наслаивание блоков друг на друга</div>
  <div class="wrapper">
    <div class="cards">
      <div class="card">stacking</div>
      <div class="card">cards</div>
      <div class="card">for</div>
      <div class="card">you</div>
      <div class="card">to</div>
      <div class="card">explore</div>
      <div class="card">and</div>
      <div class="card">use</div>
    </div>
  </div>
  <div class="spacer" style="height:100vh; text-align:center;">Тут идут блоки которые не входят в анимацию</div>

</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import { onMounted } from 'vue';

// onMounted(() => {
//   const cardsWrapper = document.querySelector('.cards');
//   const cards = cardsWrapper.querySelectorAll('.card')
//   const cardHeigth = cards[0].clientHeight

//   const cardAnim = gsap.timeline()

//   cards.forEach(card => {
//     cardAnim.to(card, { opacity: 0 })
//   })

//   gsap.to('.cards', {
//     translateY: `-${cards.length * cardHeigth}`,
//     scrollTrigger: {
//       trigger: '.wrapper',
//       pin: true,
//       start: '20% center',
//       end: () => `+=${cards.length * cardHeigth}`,
//       scrub: 1,
//       markers: true,
//       animation: cardAnim
//     }
//   })

// })
onMounted(() => {
  const cardsWrapper = document.querySelector('.cards');
  const cards = cardsWrapper.querySelectorAll('.card');
  const cardHeight = cards[0].clientHeight;

  // Создаем таймлайн с привязкой к прокрутке
  const cardAnim = gsap.timeline({
    scrollTrigger: {
      trigger: '.wrapper',
      pin: true,
      start: 'top center',
      end: () => `+=${cards.length * cardHeight}`, // Длительность прокрутки для всех карточек
      scrub: 1, // Привязываем анимацию к прокрутке
      markers: true,
    }
  });

  // Добавляем анимацию для каждой карточки с постепенным исчезновением
  cards.forEach((card, index) => {
    gsap.set('card', { y: cardHeight * index })
    cardAnim.to(card, {
      opacity: 0,
      duration: 1, // Можно настроить длительность анимации для каждой карточки
    }, index * 0.5); // Настройка задержки между карточками (по вашему усмотрению)
  });
});

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Teko');

.cards {
  width: 100%;
  height: 50vh;
  position: relative;
  overflow: hidden;
}

.card {
  padding: 2em;
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #1565C0;
  text-transform: uppercase;
  font-size: 10vw;
}

.card,
.header,
.spacer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 50px;
  text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.3);
}


.header {
  width: 100%;
  height: 150px;
  background: #060606;
  color: yellow;
  font-size: clamp(30px, 10vw, 60px);
  line-height: 1;
}

.header span {
  font-size: clamp(30px, 6vw, 40px);
  color: #76FF03;
}





.card:nth-child(odd) {
  background: #303F9F;
}

.spacer {
  font-size: 50px;
  margin: 20px;
}
</style>
