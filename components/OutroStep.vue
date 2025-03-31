<template>
  <div class="card">
    <div class="us-img tr">
      <img src="/us6.png">
    </div>
    <div class="us-img bl">
      <img src="/us7.png">
    </div>
    <h1 class="text">
      До скорой встречи!
      <br>
      <span>С любовью, Катя & Ваня</span>
      <div class="feedback-block">
        <span>Нам очень важно получить обратную связь</span>
        <a class=""
          href="https://docs.google.com/forms/d/e/1FAIpQLSdTVH6nOJ75KFlhlOj95sfYpG6ApI3H4dM6qSnmPF7XgQfyUQ/viewform">Заполнить
          форму</a>
      </div>
    </h1>
    <div class="us-img br floating-image">
      <img src="/us4.png">
    </div>
    <div class="us-img tl floating-image">
      <img src="/us2.png">
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
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: 4fr 1fr 4fr;
  gap: 0;
  grid-auto-flow: row;
  grid-template-areas:
    "tl . tr"
    "text text text"
    "bl . br";
  // width: 100%;
  // height: 100%;
  justify-items: center;
  align-items: self-start;

  .tl {
    grid-area: tl;
    rotate: -10deg;
    animation-duration: 8s;
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
    animation-duration: 5s;
    translate: 15% 5%;
  }

  .us-img {
    // width: 100;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: -1px 4px 20px -12px #000;

    img {
      display: block;
      width: 110%;
      max-width: 250px;
      max-height: 300px;
      object-fit: cover;
    }
  }

  .text {
    grid-area: text;
    font-size: 1.8rem;
    line-height: 140%;
    text-align: center;

    span {
      font-size: 1.5rem;
    }

    .feedback-block {
      display: block;

      text-align: center;

      span {
        display: block;
        font-size: 1rem;
      }

      a {
        display: block;
        width: max-content;
        margin: 0 auto;
        padding: 5px 20px;
        border-radius: 5px;
        box-shadow: 0 3px 10px -5px #000;
        background-color: #fff1;
        text-align: center;
        text-decoration: none;
        font-size: 1.5rem;
        text-decoration: underline;
        // font-family: 'Marck Script';
        font-weight: 900;
        transition: 0.2s ease-in-out;

        &:hover {
          background-color: #fff5;
          box-shadow: 0 10px 25px -10px #000;
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
