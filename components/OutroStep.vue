<template>
  <div class="card">
    <div class="us-img tl">
      <img src="/us2.png">
    </div>
    <div class="us-img tr floating-image">
      <img src="/us6.png">
    </div>
    <div class="us-img bl">
      <img src="/us7.png">
    </div>
    <div class="us-img br">
      <img src="/us4.png">
    </div>

    <h1 class="text">
      ДО СКОРОЙ ВСТРЕЧИ!
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
    transform: rotateZ(-5deg);
  }

  &.tr {
    top: -10%;
    right: -2%;
    transform: rotateZ(10deg);
  }

  &.bl {
    bottom: -2%;
    left: -2%;
    transform: rotateZ(12deg);
    max-height: 50%;
  }

  &.br {
    bottom: 10%;
    right: 2%;
    transform: rotateZ(-8deg);
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
  font-size: min(5vh, 8vw);
}
</style>
