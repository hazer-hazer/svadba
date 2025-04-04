<template>
    <div class="card">
        <div class="content">
            <div class="left">
                <h1 class="greating">
                    Приветствуем,<br> <span v-if="typeof invited === 'string'">{{ invited }}</span><span v-else>{{
                        invited[0] }}</span>
                    <div v-if="Array.isArray(invited)" class="sub-invited">
                        и {{ invited[1] }}
                    </div>
                </h1>
            </div>
            <div class="right-photo big-photo floating-image">
                <img src="/us1.jpg">
            </div>
            <div class="kitya-img left-photo">
                <img src="/kitya.jpg">
            </div>
            <div class="right">
                <div class="text">
                    Совсем скоро состоится день нашей свадьбы, и мы будем счастливы, если вы разделите с нами этот
                    чудесный
                    праздник!
                </div>
            </div>

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

const route = useRoute()

const [nameId] = route.path.split('/').filter(p => !!p.length)

const namesMap: Record<string, string | string[]> = {
    as: 'Аня & Сергей',
    s: 'Саша',
    ma: 'Миша & Алёна',
    na: 'Нина & Альберт',
    kt: 'Катя & Толя',
    b: 'Боря',
    zs: 'Женя & Сергей',
    dk: 'Даша & Костя',
    ts: 'Таня & Сергей',
    m: 'Макс',
    kg: 'Катя',
    vt: 'Вова & Таня',
    ls: 'Люда & Слава',
    lm: 'Лёша & Маша',
    sa: 'Алина & Саша',
    ks: 'Ксюша',
    vs: 'Вера & Саша',
    ay: 'Андрей & Юля',
    g: 'Глеб',
    d: 'Диана',
    da: 'Денис & Алёна',
    dr: 'Дарина',
}

const invited = namesMap[nameId] ?? 'кажется, вас нет в списке'
</script>

<style scoped lang="scss">
@use '/assets/css/main.scss' as *;

.card {
    .content {
        // padding-left: 10px;
        gap: 20px;

        .greating {
            // font-size: 2.8rem;
            line-height: 175%;
            font-size: 1.6em;

            .sub-invited {
                line-height: 1;
                font-size: 1.6rem;
            }
        }
    }
}


// .card {
//     .content {
//         width: 100%;
//         height: 100%;

//         .greating {
//             width: 100%;
//             padding-left: 3%;
//             padding-top: clamp(5%, 5rem, 0%);
//             text-decoration: underline;
//             letter-spacing: 0.1rem;
//             font-size: clamp(2vh, 5vw, 2rem);
//             max-width: 50%;
//         }

//         p {
//             width: 60%;
//             font-size: clamp(1rem, 3vw, 1.5rem);
//         }
//     }
// }

// .big-photo {
//     position: absolute;
//     top: 0%;
//     right: 1rem;
//     width: clamp(10vw, 45vw, 40%);
//     box-shadow: 5px -5px 25px -1px #aaa;
//     // image-rendering: optimizeQuality;
//     // filter: drop-shadow(10px 10px 20px $white) contrast(90%) brightness(80%) sepia(80%);
//     border-radius: 3vh 1vh 3vh 1vh / 3vh 1vh 3vh 1vh;

//     rotate: 10deg;

//     animation-duration: 5s;

//     // border: 5px solid #d4a37311;

//     &.rot-10 {
//         transform: rotateZ(10deg);
//     }

//     &.rot-m10 {
//         transform: rotateZ(-10deg);
//     }
// }

// .kitya-img {
//     position: absolute;
//     top: 45%;
//     left: -1rem;
//     width: clamp(100px, 300px, 40%);
//     // height: clamp(15vh, 40%, 30);
//     max-height: 300px;
//     aspect-ratio: 9/11;

//     border-radius: 10px;
//     overflow: hidden;
//     transform: rotateZ(-5deg);

//     box-shadow: -1px 5px 10px -5px #000;

//     img {
//         top: 0;
//         left: 0;
//         position: absolute;
//         width: 100%;
//         object-fit: cover;
//     }
// }

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
