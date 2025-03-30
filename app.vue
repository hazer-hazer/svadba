<template>
  <div id="main">
    <swiper-container class="swiper" :slides-per-view="1" :create-elements="true" :keyboard="{ enabled: true }"
      effect="cards" mousewheel-force-to-axis="true" :scrollbar="true" direction="vertical" :navigation="{
        enabled: true,
      }" no-swiping-selector="iframe,a,input">
      <swiper-slide>
        <WelcomeStep />
      </swiper-slide>
      <swiper-slide>
        <ScheduleStep />
      </swiper-slide>
      <swiper-slide>
        <GiftStep />
      </swiper-slide>
      <swiper-slide class="form-slide">
        <FormStep />
      </swiper-slide>
      <swiper-slide>
        <OutroStep />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

// const containerRef = ref(null)
// const swiper = useSwiper(containerRef)
</script>

<style lang="scss">
@use '/assets/css/main.scss' as *;

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: $white;
  font-family: 'Bad Script', serif;
  color: $foreground;
}

#main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  /* vertical */
  justify-content: center;
  /* horizontal */

  background-image: url('/bg.png');
  background-size: cover;
}

swiper-container {
  width: 80vw;
  margin: 0;
  height: 65vh;
  padding-right: 2rem;

  --swiper-navigation-color: $white;
  --swiper-navigation-size: 3rem;
  --swiper-navigation-sides-offset: 20%;
  --swiper-navigation-top-offset: 110%;

  --swiper-scrollbar-border-radius: 50px;
  --swiper-scrollbar-right: -50px;
  --swiper-scrollbar-top: 5px;
  // --swiper-scrollbar-sides-offset: 5%;
}

swiper-slide {
  overflow: visible;
  background-color: $card-bg;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 10px -1px #666a;
  padding: 10px 20px;

  background-image: url('/paper.png');
  background-size: cover;
}
</style>
