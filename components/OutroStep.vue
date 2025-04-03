<template>
  <div class="card">
    <div class="us-img tl floating-image">
      <img src="/us2.jpg">
    </div>
    <div class="us-img tr">
      <img src="/us6.jpg">
    </div>
    <div class="text">
      <h1>
        До скорой встречи!
      </h1>
      <br>
      <span>С любовью, Катя & Ваня</span>
      <hr>
      <div class="feedback-block">
        <span>Пожалуйста, выберите еду и напитки</span>
        <a class="swiper-no-swiping"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdTVH6nOJ75KFlhlOj95sfYpG6ApI3H4dM6qSnmPF7XgQfyUQ/viewform">Заполнить
          форму</a>
      </div>
    </div>
    <div class="us-img bl">
      <img src="/us7.jpg">
    </div>
    <div class="us-img br floating-image">
      <img src="/us4.jpg">
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
// .us-img {
//   position: absolute;

//   // max-width: max(25%, 30vh);
//   // max-height: max(50%, 30vh);

//   border-radius: 10px;
//   overflow: hidden;

//   box-shadow: 0 5px 20px -10px #000;
//   vertical-align: bottom;

//   &.tl {
//     top: 2%;
//     left: -2%;
//     rotate: -10deg;
//   }

//   &.tr {
//     top: -5%;
//     right: 0;
//     rotate: -8deg;
//   }

//   &.bl {
//     bottom: -2%;
//     left: 2%;
//     rotate: 12deg;
//     max-height: 60%;
//   }

//   &.br {
//     bottom: 5%;
//     right: 2%;
//     rotate: 3deg;
//     animation-duration: 5s;
//   }

//   img {
//     display: block;
//     // top: 0;
//     // left: 0;
//     // position: absolute;
//     width: 100%;
//     object-fit: cover;
//   }
// }


.card {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  gap: 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "tl tl tr tr"
    "text text text text"
    "bl bl br br";
  // width: 100%;
  // height: 100%;
  justify-items: center;
  align-items: center;
  // max-height: 70vh;
  max-height: 70vh;
  // height: max-content;

  .tl {
    grid-area: tl;
    rotate: -10deg;
    animation-duration: 15s;
    translate: -15% -5%;
  }

  .tr {
    grid-area: tr;
    rotate: -8deg;
    translate: 15% -10%;
  }

  .bl {
    grid-area: bl;
    rotate: 12deg;
    translate: -15% 5%;
  }

  .br {
    grid-area: br;
    rotate: 3deg;
    animation-duration: 10s;
    translate: 15% 5%;
  }

  .us-img {
    // max-width: 110%;
    // max-height: 100%;
    // width: 100%;
    // height: max-content;
    width: 100%;
    height: 100%;
    max-height: 250px;
    max-width: 250px;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: -1px 4px 20px -12px #000;
    // aspect-ratio: 1/1;

    img {
      display: block;
      width: 100%;
      height: 100%;
      // max-width: 100%;
      // height: 100%;
      // width: 110%;
      // max-width: 250px;
      // max-height: max;
      // max-height: 100%;
      object-fit: cover;
      object-position: center 10%;
      // aspect-ratio: 1/1;
    }
  }

  .text {
    grid-area: text;
    // font-size: 1.8rem;
    // line-height: 140%;
    text-align: center;
    width: 100%;

    font-size: 80%;

    &>span {
      // font-size: 1.5rem;
      font-size: 1.5em;
    }

    h1 {
      font-size: 2em;
      padding: 0;
      margin: 0;
      line-height: 0;
    }

    hr {
      display: block;
      height: 0;
      border: none;
      width: 80%;
      box-shadow: 0 0 0 1px #fff5;
    }

    .feedback-block {
      display: block;

      text-align: center;

      span {
        display: block;
        font-size: 1.4em;
      }

      a {
        display: block;
        width: max-content;
        margin: 5px auto;
        padding: 5px 20px;
        border-radius: 5px;
        box-shadow: 0 3px 25px -25px #000, 0 0 1px 1px #a99;
        background-color: #ffea;
        text-align: center;
        text-decoration: none;
        font-size: 1.4em;
        text-decoration: underline;
        // font-family: 'Marck Script';
        font-weight: 900;
        transition: 0.2s ease-in-out;

        &:hover {
          background-color: #fff5;
          box-shadow: 0 10px 25px -10px #000, 0 0 1px 1px #a99;
        }
      }
    }
  }
}

.text {
  // position: absolute;
  // left: 0;
  // right: 0;
  // top: 35%;
  // margin-inline: auto;
  // width: fit-content;
  // font-size: clamp(3vw, 3vh, 3rem);
  // line-height: 130%;

  // span {
  //   display: inline-block;
  //   font-size: clamp(2vw, 2vh, 2rem);
  //   padding-left: 10px;
  // }

}
</style>
