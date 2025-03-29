<template>
    <div class="card">
        <div class="api-img">
            <img src="/api.png">
        </div>
        <div class="us-img">
            <img src="/us3.png">
        </div>
        <div class="content">
            <p class="left-block">
                • 📍 Свадьба состоится 16 августа 2025 года. Место проведения: <a style="color: #897;"
                    href="https://yandex.ru/maps/-/CHROaPmo" target="_blank">
                    «Парк-отель Остров
                    Рыболовная усадьба»</a>
                <Icon name="lucide:link" style="padding: 0;padding-left: 10px;font-size: 0.9rem;" />. Сбор гостей в
                14:30.
            </p>
            <p class="right-block">
                • 🤵 Мероприятие пройдёт на открытой площадке на природе.
                <br> Для вашего комфорта просим подготовить верхнюю
                одежду по сезону.
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.api-img {
    position: absolute;
    bottom: 10%;
    left: -2rem;
    width: clamp(5rem, 300px, 29%);
    max-height: 300px;
    aspect-ratio: 9/12;
    border-radius: 1rem;
    transform: rotateZ(-10deg);
    box-shadow: 10px 5px 5px -10px #000;
    border-radius: 1.5rem;

    img {
        position: absolute;
        width: 100%;
        border-radius: 1.5rem;
        border: none;
        object-fit: cover;
    }
}

.us-img {
    position: absolute;
    top: -5%;
    right: 2%;
    width: clamp(23%, 200px, 28%);
    aspect-ratio: 9/12;
    // filter: sepia(70%) opacity(0.9);

    transform: rotateZ(8deg);

    box-shadow: -15px 15px 25px -20px #000a;

    border-radius: 25px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.card {
    .content {
        .right-block {
            padding-top: 30px;
            padding-left: 25%;
        }
    }
}
</style>
