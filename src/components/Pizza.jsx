import styles from './styles.module.css'
import {useState} from "react";
export const Pizza = ({pizza,login}) => {
    const basket = JSON.parse(localStorage.getItem('basket') || '[]');
    const current_pizza = basket.filter((item) => item.id === pizza.id)[0];
    const [quantity, setQuantity] = useState(current_pizza?.quantity || 0);

    const removeFromBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket') || '[]');
        if (quantity == 1){
            const newBasket = basket.filter((item) => item.id !== pizza.id);
            localStorage.setItem('basket', JSON.stringify(newBasket));
            setQuantity(0)
            return
        }
        const newBasket = basket.map((item) => item.id === pizza.id ? {...item, quantity: item.quantity - 1} : item);
        localStorage.setItem('basket', JSON.stringify(newBasket));
        setQuantity((prevQuantity) => prevQuantity - 1);
    }
    const addToBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket') || '[]');
        if (basket.find((item) => item.id === pizza.id)){
            const newBasket = basket.map((item) => item.id === pizza.id ? {...item, quantity: item.quantity + 1} : item);
            localStorage.setItem('basket', JSON.stringify(newBasket));
            setQuantity((prevQuantity) => prevQuantity + 1);
            return
        }
        setQuantity(1);
        const newBasket = [...basket, {...pizza, quantity: 1}];
        localStorage.setItem('basket', JSON.stringify(newBasket));
    }

    return (
        <div className={styles.pizza}>
            <img src={pizza.image} alt={pizza.name} className={styles.image}/>
            <h2 className={styles.name}>{pizza.name}</h2>
            <p className={styles.description}>{pizza.description}</p>
            <p className={styles.price}>Price: ${pizza.price} Rate: {pizza.rate}⭐</p>
            {login && current_pizza ?
                <div className={styles.basketPizzaAction}>
                    <p className={styles.basketPizzaPrice}>{current_pizza.price * current_pizza.quantity}$</p>
                    <button className={styles.button} onClick={removeFromBasket}>-</button>
                    <p className={styles.quantity}>{quantity}</p>
                    <button className={styles.button} onClick={addToBasket}>+</button>
                </div>

                : <button className={styles.button} onClick={addToBasket}>Add to basket</button>}


        </div>
    );
}