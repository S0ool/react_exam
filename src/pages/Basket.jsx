import styles from './styles.module.css';
import {BasketPizza} from "../components/BasketPizza.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
export const Basket = () => {
    const [myPizzas, setMyPizzas] = useState(JSON.parse(localStorage.getItem('basket')) ?? [])
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const Close = () =>{
        navigate('/');
    }
    const Reload = () => {
        setMyPizzas(JSON.parse(localStorage.getItem('basket')));
    }
    const Clear = () => {
        localStorage.removeItem('basket');
        setMyPizzas([])
    }
    const Order = () => {
        const orderPizzas = JSON.parse(localStorage.getItem('basket'));
        const orderPizzasName = orderPizzas.map((item) => item.name);
        const bill = `${localStorage.getItem('username')}\nВаш заказ: ${orderPizzasName.join(', ')}\nСумма: ${total}$`;
        alert(bill)
        Clear();

    }
    return (
        <>
        <div className={styles.basketContainer}>
            <header className={styles.header}>
                <h1>Корзина</h1>
                <div className={styles.close} onClick={Close}>✖</div>
            </header>
            <div className={styles.pizzas}>
                {myPizzas.length == 0 && <p className={styles.empty}>Корзина пуста</p>}
                {myPizzas && myPizzas.map((pizza) => (
                    <BasketPizza key={pizza.id} getPizza={pizza} Reload={Reload} setTotal={setTotal} />
                ))}
            </div>
            {
                myPizzas.length != 0 &&
            <footer className={styles.footer}>
                <button className={styles.total}>Итого: {total}$</button>
                <div className={styles.buttons}>
                    <button className={styles.buttonOrder} onClick={Order}>Оформить заказ</button>
                    <button className={styles.buttonClear} onClick={Clear}>Очистить корзину</button>
                </div>
            </footer>
            }

        </div>
        </>
    );
};