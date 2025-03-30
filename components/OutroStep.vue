<template>
  <div class="card">
    <div class="us-img tr">
      <img src="/us6.png">
    </div>
    <div class="us-img bl">
      <img src="/us7.png">
    </div>
    <div class="us-img br floating-image">
      <img src="/us4.png">
    </div>
    <div class="us-img tl floating-image">
      <img src="/us2.png">
    </div>

    <h1 class="text">
      ДО СКОРОЙ ВСТРЕЧИ!
      <br>
      <span>С любовью, Катя & Ваня</span>
    </h1>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.us-img {
  position: absolute;

  max-width: max(25%, 20vh);
  max-height: max(50%, 50vh);

  border-radius: 10px;
  overflow: hidden;

  box-shadow: 0 5px 20px -10px #000;
  vertical-align: bottom;

  &.tl {
    top: 2%;
    left: -2%;
    rotate: -10deg;
  }

  &.tr {
    top: -5%;
    right: 0;
    rotate: -8deg;
  }

  &.bl {
    bottom: -2%;
    left: 2%;
    rotate: 12deg;
    max-height: 60%;
  }

  &.br {
    bottom: 5%;
    right: 2%;
    rotate: 3deg;
    animation-duration: 5s;
  }

  img {
    display: block;
    // top: 0;
    // left: 0;
    // position: absolute;
    width: 100%;
    object-fit: cover;
  }
}

.text {
  position: absolute;
  left: 0;
  right: 0;
  top: 35%;
  margin-inline: auto;
  width: fit-content;
  font-size: clamp(3vw, 3vh, 3rem);
  line-height: 130%;

  span {
    display: inline-block;
    font-size: clamp(2vw, 2vh, 2rem);
    padding-left: 10px;
  }
}
</style>
