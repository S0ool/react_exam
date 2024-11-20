import styles from './styles.module.css'
import {useEffect, useState} from "react";

export const BasketPizza = ({getPizza,Reload,setTotal}) => {
    const [pizza, setPizza] = useState(getPizza);
    useEffect(() => {
        setTotal((prevTotal) => prevTotal + pizza.price * pizza.quantity)
    }, []);

    const addToBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket'))
        setTotal((prevTotal) => prevTotal + pizza.price)
        if (basket.find((item) => item.id === pizza.id)) {
            const newBasket = basket.map((item) => item.id === pizza.id ? {...item, quantity: item.quantity + 1} : item);
            setPizza({...pizza, quantity: pizza.quantity + 1});
            localStorage.setItem('basket', JSON.stringify(newBasket));
            return
        }
        const newBasket = [...basket, {...pizza, quantity: 1}];
        localStorage.setItem('basket', JSON.stringify(newBasket));
    }
    const removeFromBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket'))
        setTotal((prevTotal) => prevTotal - pizza.price )
        if (pizza.quantity === 1) {
            const newBasket = basket.filter((item) => item.id !== pizza.id);
            localStorage.setItem('basket', JSON.stringify(newBasket));
            Reload()
            return
        }
        const newBasket = basket.map((item) => item.id === pizza.id ? {...item, quantity: item.quantity - 1} : item);
        setPizza({...pizza, quantity: pizza.quantity - 1});

        localStorage.setItem('basket', JSON.stringify(newBasket));
    }
    return (
        <div className={styles.basketPizza} key={pizza.id} >
            <div>
                <p className={styles.basketPizzaName}>{pizza.name}</p>
            </div>
            <div className={styles.basketPizzaAction}>
                <p className={styles.basketPizzaPrice}>{pizza.price * pizza.quantity}$</p>
                <button className={styles.button} onClick={removeFromBasket}>-</button>
                <p className={styles.quantity}>{pizza.quantity}</p>
                <button className={styles.button} onClick={addToBasket}>+</button>
            </div>
        </div>
    );
}