<template>
    <div class="card">
        <div class="voltos-img"><img src="/voltos1.png"></div>

        <div class="us-img floating-image"><img src="/us5.png"></div>

        <div class="content">
            <p class="right-block">
                • 🎁 Не ломайте голову над подарками! Ваши конверты помогут нам осуществить мечты в текущем ремонте
                новой квартиры или организовать новое путешествие.
            </p>
            <p class="left-block">
                • 💐 Мы с радостью примем любые подарки, но нам некуда деть 20 букетов цветов 😅. Вместо этого с
                радостью
                примем сертификат в цветочный магазин, живой цветок в горшке, деньги или символический подарок.
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '/assets/css/main.scss' as *;

.us-img {
    position: absolute;
    top: 0;
    left: 2%;
    width: clamp(5rem, 20vw, 29%);
    // filter: sepia(70%) opacity(0.9);
    border-radius: 5%;
    overflow: hidden;
    max-height: 50%;

    img {
        display: block;
        width: 100%;
        border: none;
        object-fit: cover;
    }
}

.voltos-img {
    position: absolute;
    // bottom: 4rem;
    bottom: clamp(0%, 3vh, 10%);
    right: 0rem;
    // height: clamp(10rem, 45vh, 50%);
    width: 30%;
    max-width: 300px;
    max-height: 40vh;
    aspect-ratio: 9 / 12;
    // height: max-content;
    transform: rotateZ(-5deg);

    // border: 7px solid #D4A373;
    // box-shadow: -1px 5px 25px -10px #000, 1px 5px 25px -20px #000;
    // overflow: hidden;

    background-color: transparent;
    box-shadow: none;

    &::after {
        z-index: -1;
        position: absolute;
        content: "";
        bottom: 10px;
        left: 10px;
        width: 50px;
        height: 50%;
        max-height: 300px;
        background-color: transparent;
        box-shadow: -15px 2px 15px #666;
        transform: rotate(5deg);
    }

    &::after {
        transform: rotate(-6deg);
        top: 8px;
    }

    img {
        display: block;
        width: 100%;
        border-radius: 15px;
    }

    // &::before {
    //     position: absolute;
    //     content: '';
    //     top: 0;
    //     left: 0;
    //     height: 15%;
    //     width: 100%;
    //     background: linear-gradient(to right, transparent 2%, #000, transparent 98%);
    // }

    // &::after {
    //     position: absolute;
    //     content: '';
    //     top: -186%;
    //     /* height of before - height of after - 1% buffer for the small gap */
    //     left: -50%;
    //     height: 200%;
    //     width: 200%;
    //     border-radius: 50%;
    //     background: white;
    // }
}
</style>
