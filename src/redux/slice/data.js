import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    pizzas: [
        {
            'id': 1,
            'name': 'Маргарита',
            'price': 10,
            'rate': 4.5,
            'description': 'Классическая итальянская пицца с томатным соусом и сыром моцарелла.',
            'image':'../../../public/margarita.png'
        },
        {
            'id': 2,
            'name': 'Пепперони',
            'price': 12,
            'rate': 4.7,
            'description': 'Пикантная пицца с колбасой пепперони и сыром.',
            'image':'../../../public/pepperoni.jpg'
        },
        {
            'id': 3,
            'name': 'Четыре сыра',
            'price': 13,
            'rate': 4.8,
            'description': 'Пицца с четырьмя видами сыра: моцарелла, пармезан, горгонзола и чеддер.',
            'image':'../../../public/four_cheese.jpg'
        },
        {
            'id': 4,
            'name': 'Вегетарианская',
            'price': 11,
            'rate': 4.4,
            'description': 'Пицца с овощами, включая перец, грибы и томаты.',
            'image':'../../../public/vegetarian.png'
        },
        {
            'id': 5,
            'name': 'Гавайская',
            'price': 12,
            'rate': 4.3,
            'description': 'Пицца с ветчиной и ананасом.',
            'image':'../../../public/gavai.jpg'
        },
        {
            'id': 6,
            'name': 'Мясная',
            'price': 14,
            'rate': 4.6,
            'description': 'Пицца с мясным ассорти: бекон, салями, и ветчина.',
            'image':'../../../public/meet.jpg'
        },
        {
            'id': 7,
            'name': 'Барбекю',
            'price': 13,
            'rate': 4.5,
            'description': 'Пицца с соусом барбекю, курицей и луком.',
            'image':'../../../public/BBQ.jpg'
        },
        {
            'id': 8,
            'name': 'С грибами',
            'price': 11,
            'rate': 4.3,
            'description': 'Пицца с грибами, сыром и зеленью.',
            'image':'../../../public/mushroom.jpg'
        },
        {
            'id': 9,
            'name': 'Кальцоне',
            'price': 13,
            'rate': 4.4,
            'description': 'Закрытая пицца с ветчиной, сыром и томатным соусом.',
            'image':'../../../public/calzone.jpg'
        },
        {
            'id': 10,
            'name': 'С тунцом',
            'price': 12,
            'rate': 4.2,
            'description': 'Пицца с тунцом, луком и сыром.',
            'image':'../../../public/tuna.webp'
        },
        {
            'id': 11,
            'name': 'Диабло',
            'price': 14,
            'rate': 4.6,
            'description': 'Острая пицца с колбасой пепперони, халапеньо и томатным соусом.',
            'image':'../../../public/diablo.webp'
        },
        {
            'id': 12,
            'name': 'Цыпленок ранч',
            'price': 13,
            'rate': 4.5,
            'description': 'Пицца с цыпленком, соусом ранч и луком.',
            'image':'../../../public/chicken_ranch.jpg'
        },
        {
            'id': 13,
            'name': 'С морепродуктами',
            'price': 15,
            'rate': 4.7,
            'description': 'Пицца с креветками, кальмарами и соусом песто.',
            'image':'../../../public/seafood.jpg'
        },
        {
            'id': 14,
            'name': 'Пармезан',
            'price': 11,
            'rate': 4.4,
            'description': 'Пицца с сыром пармезан, моцареллой и томатами.',
            'image':'../../../public/parmesan.jpg'
        },
        {
            'id': 15,
            'name': 'Охотничья',
            'price': 14,
            'rate': 4.6,
            'description': 'Пицца с мясом кабана, шампиньонами и луком.',
            'image':'../../../public/hunting.jpg'
        }
    ],
};

const dataSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
    }
});


export default dataSlice;
