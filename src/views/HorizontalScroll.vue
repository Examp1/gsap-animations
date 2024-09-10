<template>
    <div class="logo">
        <h1>horzontal<br />scroll<br />test</h1>
    </div>

    <div class="wrapper">
        <section class="intro">
            <div class="line"></div>
        </section>

        <section class="slide saitama character">
            <div class="block"></div>
            <img src="https://placehold.co/700x700" alt=""><span class="huge-text">slide 1</span>
            <div class="caption">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, et sunt! Beatae non ut esse natus
                maxime suscipit sequi ratione totam asperiores animi inventore possimus rerum, aut saepe molestiae
                consequuntur architecto ab molestias dignissimos quidem, ad explicabo! Impedit error odio quod
                recusandae porro voluptates ea!
            </div>
            <div class="nickname"><span>name:</span>name 1</div>
            <div class="quote">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur harum placeat sapiente, accusamus
                voluptas quas saepe qui molestias cumque.
            </div>
        </section>

        <section class="slide genos character">
            <div class="block"></div>
            <img src="https://placehold.co/700x700" alt=""><span class="huge-text">slide 2</span>
            <div class="caption">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, et sunt! Beatae non ut esse natus
                maxime suscipit sequi ratione totam asperiores animi inventore possimus rerum, aut saepe molestiae
                consequuntur architecto ab molestias dignissimos quidem, ad explicabo! Impedit error odio quod
                recusandae porro voluptates ea!
            </div>
            <div class="nickname"><span>name:</span>name 2</div>
            <div class="quote">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur harum placeat sapiente, accusamus
                voluptas quas saepe qui molestias cumque.
            </div>
        </section>

    </div>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    const sections = gsap.utils.toArray('section');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    })

    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 1500,
            scrub: 0.5
        }
    })

    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
            start: 'center center',
            end: 2000,
            scrub: 0.5
        }
    })
    document.querySelectorAll('.slide').forEach(el => {
        gsap.to(el.querySelector('.caption'), {
            x: 0,
            y: 0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.caption'),
                start: 'top bottom',
                end: '+=1000',
                scrub: 0.5
            }
        })
        gsap.to(el.querySelector('.quote'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.quote'),
                start: 'top bottom',
                end: '+=20%',
                scrub: 0.5
            }
        })
        gsap.to(el.querySelector('.nickname'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.nickname'),
                start: 'top bottom',
                end: '+=20%',
                scrub: 0.5
            }
        })
        gsap.to(el.querySelector('.block'), {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.block'),
                start: 'top bottom',
                end: `+=${window.innerWidth}`,
                scrub: 0.5
            }
        })
        gsap.to(el.querySelector('img'), {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('img'),
                start: 'top bottom',
                end: `+=50`,
                scrub: 0.5
            }
        })
        gsap.to(el.querySelector('.huge-text'), {
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.huge-text'),
                start: 'top bottom',
                end: `+=100%`,
                scrub: 0.5,
                markers: true
            }
        })
    })

})

</script>

<style>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    font-size: 16px;
    line-height: 1.3;
    font-family: 'Bebas Neue', cursive;
    overflow-x: hidden;
}
</style>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.wrapper {
    width: 300%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.logo {
    font-size: 8rem;
    position: fixed;
    z-index: 10;
    top: 15%;
    left: 4rem;
    line-height: 0.9;
}

.line {
    background-color: red;
    height: 1rem;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
}

section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

section.character::before {
    content: '';
    width: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}

.block {
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: translateX(-100%);
}

.saitama::before,
.saitama .block {
    background-color: #ffc107;
}

.genos::before,
.genos .block {
    background-color: #83cdc1;
}

.caption {
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    width: 30%;
    font-weight: 400;
    color: #444;
    font-family: monospace;
    transform: translate(100%, 100%);
}

.character img {
    position: relative;
    z-index: 10;
    height: 90vh;
    width: auto;
    /* transform: translateY(-100%); */
}

.huge-text {
    font-size: 25rem;
    width: 100%;
    text-align: center;
    color: #f52b2b;
    position: absolute;
    top: 20%;
    left: 0;
    transform: translateY(100%);
    font-weight: 700;
    z-index: 11;
}

.nickname {
    position: absolute;
    top: 4rem;
    right: 4rem;
    font-size: 3rem;
    text-align: right;
    transform: translateY(-200%);
}

.nickname span {
    display: block;
    font-size: 70%;
    color: #fff;
}

.quote {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    font-size: 3rem;
    width: 30%;
    text-align: right;
    transform: translateY(200%);
}

.quote::before,
.quote::after {
    content: '';
    color: #fff;
}
</style>