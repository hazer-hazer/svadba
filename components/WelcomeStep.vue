<template>
    <div class="card">
        <img src="~/public/us1.png" class="big-photo floating-image">

        <div class="kitya-img">
            <img src="~/public/kitya.png">
        </div>

        <div class="content" style="padding-top: 5%;">
            <h1>
                Приветствуем, {{ invited }}
            </h1>
            <p class="right-block">
                Мы приглашаем тебя на нашу свадьбу <u>16.08.2025</u>.
                Дальше Вы больше узнаете об условиях и пройдете маленький опрос по предпочтениям в еде.
            </p>
            <!-- <h1 class="date">
                16.08.2025
            </h1> -->
        </div>
    </div>
</template>

<script setup lang="ts">
// const { active } = defineProps<{
//     active: boolean
// }>()

const invited = 'Мистер Кек';
</script>

<style scoped lang="scss">
@use '/assets/css/main.scss' as *;

.card {
    .content {
        width: 100%;
        height: 100%;

        h1 {
            width: 100%;
            padding-left: 3%;
            padding-top: clamp(0%, 5rem, 0%);
            text-decoration: underline;
        }

        p {
            width: 60%;
            font-size: clamp(1rem, 3vw, 1.5rem);
        }
    }
}

.big-photo {
    position: absolute;
    top: 0;
    right: 1rem;
    width: 30vw;
    box-shadow: 5px -5px 25px -1px #aaa;
    // image-rendering: optimizeQuality;
    // filter: drop-shadow(10px 10px 20px $white) contrast(90%) brightness(80%) sepia(80%);
    border-radius: 3vh 1vh 3vh 1vh / 3vh 1vh 3vh 1vh;

    // border: 5px solid #d4a37311;

    &.rot-10 {
        transform: rotateZ(10deg);
    }

    &.rot-m10 {
        transform: rotateZ(-10deg);
    }
}

.kitya-img {
    position: absolute;
    bottom: 10%;
    left: 3%;
    width: 25%;
    aspect-ratio: 9/11;

    border-radius: 10px;
    overflow: hidden;
    transform: rotateZ(5deg);

    box-shadow: -1px 5px 10px -5px #000;

    img {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        object-fit: cover;
    }
}

.date {
    position: absolute;
    bottom: -5%;
    right: 50px;
    font-family: 'Glass Antiqua', serif;
    font-size: clamp(2rem, 10vh, 4rem);
    text-shadow: 10px 10px 1px #9c664422;
    // background-blend-mode: color;
    mix-blend-mode: multiply;
    color: #9c6644aa;
    text-align: center;
    transform: rotateZ(-5deg);
    opacity: 0.4;
    text-decoration: none;
}
</style>
