<template>
  <TheHeader v-if="false"></TheHeader>
  <router-view class="content"></router-view>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import TheHeader from "./components/navigations/the-header.vue";


gsap.registerPlugin(ScrollTrigger);

</script>
