<template>
  <div id="main">
    <div>
      <WelcomeStep />
    </div>
    <div>
      <ScheduleStep />
    </div>
    <div>
      <GiftStep />
    </div>
    <!-- <div class="form-slide swiper-no-swiping">
        <FormStep />
      </div> -->
    <div>
      <OutroStep />
    </div>
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
  justify-content: center;

  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% - 20vw);
  height: calc(100vh - 200px);
  padding: 100px 10vw;
  justify-items: center;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 50px 0;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: url('/bg.jpg');
    filter: saturate(150%) blur(0.15rem) drop-shadow(0 0 50px #fff);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  .card {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;

      background-image: url('/paper.jpg');
      background-size: cover;
      border-radius: 1rem;
      opacity: 0.7;
      filter: contrast(110%) saturate(130%);
    }

    min-width: 40vw;
    max-width: 700px;
    height: max-content;
    // max-height: 80vh;
    box-shadow: 0px 15px 30px -10px #774a;
    padding: 10px 20px;
    border-radius: 1rem;
    backdrop-filter: blur(4px) sepia(50%);
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
  box-shadow: 0px 10px 10px -5px #666;
  padding: 10px 20px;

  background-image: url('/paper.jpg');
  background-size: cover;
}
</style>
