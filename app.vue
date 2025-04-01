<template>
  <div id="main">
    <swiper-container :slides-per-view="1" effect="cards" :threshold="70" :watch-slides-progress="true"
      :prevent-clicks="false" direction="vertical" :observer="true" :observe-parents="true" :parallax="true"
      :simulate-touch="true" :resistance="true" :scrollbar="true" :short-swipes="false" :long-swipes="false"
      :touch-start-prevent-default="false" :keyboard="{
        enabled: true
      }">
      <swiper-slide>
        <WelcomeStep />
      </swiper-slide>
      <swiper-slide>
        <ScheduleStep />
      </swiper-slide>
      <swiper-slide>
        <GiftStep />
      </swiper-slide>
      <!-- <div class="form-slide swiper-no-swiping">
        <FormStep />
      </div> -->
      <swiper-slide>
        <OutroStep />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script lang="ts" setup>
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
// register();

// const containerRef = ref(null)
// const swiper = useSwiper(containerRef)

/**
 * :create-elements="true" :keyboard="{ enabled: true }"
      :scrollbar="true" direction="vertical" :navigation="{
        enabled: true,
      }" :prevent-clicks="false" :prevent-clicks-propagation="false" :prevent-interaction-on-transition="false"
      :touch-ratio="2" touch-events-target="container"
 */
</script>

<style lang="scss">
@use '/assets/css/main.scss' as *;

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: $white;
  font-family: 'Bad Script', serif;
  color: $foreground;
  // overflow: scroll;
  user-select: none;
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

  // overflow-y: scroll;
  // overflow-x: hidden;
  // width: calc(100% - 20vw);
  // height: calc(100vh - 200px);
  // padding: 100px 10vw;
  // justify-items: center;
  background-image: url('/bg.png');
  background-size: cover;
  background-position: center;

  // display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: 1fr;
  // gap: 50px 0;

  .card {
    // min-width: 40vw;
    // max-width: 700px;
    // height: 50vh;
    // background-image: url('/paper.png');
    // background-size: cover;
    // box-shadow: 0px 10px 10px -1px #666a;
    padding: 10px;
    border-radius: 1rem;
  }
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
