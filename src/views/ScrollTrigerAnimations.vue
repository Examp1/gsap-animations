<template>
    <div>
        <div class="cotainer-custom">
            <section class="hero">
                <h1 class="big-text">Scroll trigger test</h1>
            </section>
            <section class="info">
                <div class="header-rows">
                    <div class="header-row">
                        <h2 class="big-text">text 1</h2>
                    </div>
                    <div class="header-row">
                        <h2 class="big-text">text 2</h2>
                    </div>
                </div>
            </section>
            <section ref="headerInfo" class="header-info">
                <span>header info</span>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquid praesentium aperiam ex
                    molestias ut. Asperiores voluptatum, omnis consequatur neque explicabo eius delectus fugit
                    voluptatibus laudantium perferendis sed molestiae atque!
                </p>
                <div class="header-images">
                    <div class="header-image-wrp">

                        <img v-for="i in 10" :key="i"
                            src="https://img.goodfon.ru/wallpaper/nbig/3/9c/space-planet-landscape-wallpapers-1920-x-1080.webp"
                            alt="">
                    </div>
                </div>
            </section>
            <section ref="whitespace" class="whitespace">
                <span>whitespace</span>
            </section>

            <section ref="pinned" class="pinned">
                <span>pinned</span>
                <div class="revealer">
                    <div class="revealer-1"></div>
                    <div class="revealer-2"></div>
                </div>
            </section>

            <section class="website-content">
                <span>website-content</span>
                <h2 class="big-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ad architecto.
                    Dolore, sunt!
                    Animi, natus.</h2>
            </section>

        </div>
    </div>
</template>

<script setup>
import Lenis from 'lenis'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';

const whitespace = ref(null);
const pinned = ref(null);
const headerInfo = ref(null);

const lenis = new Lenis()

lenis.on("scroll", ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    ScrollTrigger.create({
        trigger: pinned.value,
        start: 'top top',
        endTrigger: whitespace.value,
        end: 'bottom top',
        pin: true,
        pineSpacing: false,
        markers: true,
    })
    ScrollTrigger.create({
        trigger: '.header-info',
        start: 'top top',
        endTrigger: whitespace.value,
        end: 'bottom top',
        pin: true,
        pineSpacing: false,
    })
    // ScrollTrigger.create({
    //     trigger: '.header-info',
    //     start: 'top top',
    //     endTrigger: whitespace.value,
    //     end: 'bottom top',
    //     scrub: 1,
    //     onUpdate: (self) => {
    //         const progress = self.progress
    //         gsap.to(".header-image-wrp", { x: -(progress * 10) })
    //     }
    // })
    ScrollTrigger.create({
        trigger: pinned.value,
        start: 'top top',
        endTrigger: '.header-info',
        end: 'bottom bottom',
        onUpdate: (self) => {
            const rotation = self.progress * 360
            gsap.to(".revealer", { rotation })
        }
    })
    ScrollTrigger.create({
        trigger: '.pinned',
        start: "top top",
        endTrigger: '.header-info',
        end: 'bottom bottom',
        onUpdate: (self) => {
            const progress = self.progress
            const clipPath = `polygon(
        ${45 - 45 * progress}% ${0 + 0 * progress}%,
        ${55 + 45 * progress}% ${0 + 0 * progress}%,
        ${55 + 45 * progress}% ${100 - 0 * progress}%,
        ${45 - 45 * progress}% ${100 - 0 * progress}%
        )`;
            gsap.to(".revealer-1, .revealer-2", { clipPath: clipPath, ease: 'none', duration: 0 })
        }

    })
    ScrollTrigger.create({
        trigger: '.header-info',
        start: 'top top',
        end: 'bottom 50%',
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress
            const left = 35 + 15 * progress
            gsap.to(".revealer", {
                left: `${left}%`,
                ease: "none",
                duration: 0,
            });
        }
    })
    ScrollTrigger.create({
        trigger: whitespace.value,
        start: '-30% center',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
            console.log(self.progress);
            const scale = 1 + 12 * self.progress
            gsap.to(".revealer", { scale: scale, ease: 'none', duration: 0 })
        }
    })
})
</script>

<style lang="scss" scoped>
.big-text {
    text-transform: uppercase;
    font-size: 200px;
    font-weight: 400;
    letter-spacing: -4px;
}

section.hero {
    width: 100%;
    height: 100vh;
    background-image: url('https://github.com/Examp1/3dParalax/blob/master/src/assets/images/3.jpg?raw=true');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero h1 {
    color: #fff;
}

.info {
    width: 100%;
    height: 100vh;
    background-color: #000;
    color: #fff;
}

.header-row {
    width: 100%;
    height: 250px;
    padding: 0 2em;
}

.header-row:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.header-row:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.header-info {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #000;
    color: #fff;

    p {
        padding: 1em;
        font-size: 52px;
        font-weight: lighter;
    }
}

.header-images {
    overflow: hidden;
    width: 100%;
    height: 250px;
    padding: 1em;

    .header-image-wrp {
        display: flex;
        gap: 1em;
    }

    img {
        width: 400px;
        height: 100%;
    }
}

.pinned {
    position: absolute;
    top: 100vh;
    width: 100%;
    height: 250vh;
    z-index: 2;
}

.whitespace {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: -1;
}

.revealer {
    position: absolute;
    transform: translate(-50%, 0%);
    left: 35%;
    margin-top: 325px;
    width: 120px;
    height: 120px;

    .revealer-1 {
        position: absolute;
        left: 0px;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        clip-path: polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%);
    }

    .revealer-2 {
        position: absolute;
        left: 0px;
        top: 0;
        transform: rotate(90deg);
        width: 100%;
        height: 100%;
        background-color: #fff;
        clip-path: polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%);
    }
}

.website-content {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 10;

    h2 {
        font-size: 72px;
        letter-spacing: 0;
    }
}

span {
    background-color: yellow;
    color: #000
}
</style>