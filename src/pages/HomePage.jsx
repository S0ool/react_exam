import { useSelector } from 'react-redux';
import { Pizza } from "../components/Pizza.jsx";
import {useEffect, useState} from "react";
import styles from './styles.module.css'
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import not_found from '../../public/404.jpg'
export const HomePage = () => {
    const default_pizzas = useSelector((state) => state.pizzas.pizzas)
    const [pizzas,setPizzas] =useState(default_pizzas);
    const [search, setSearch] = useState('');
    const [login, setLogin] = useState(false);
    useEffect(() => {
        console.log(pizzas)
    }, [pizzas]);
    const processSearch = (value) => setSearch(value);
    useEffect(() => {
        if (search === '') {
            setPizzas(default_pizzas);
            return
        }
        setPizzas(pizzas.filter((pizza) => pizza.name.toLowerCase().includes(search.toLowerCase())));
    }, [search]);
    return (
        <div>
            <Header setLogin={setLogin} login={login} processSearch={processSearch} />
            <div className={styles.container}>
                {pizzas.length == 0 && <img src={not_found} alt="Not found" className={styles.notFound} />}
                {pizzas && pizzas.map((pizza) => (
                    <Pizza key={pizza.id} pizza={pizza} login={login} />
                ))}
            </div>
            <Footer/>

        </div>
    );
};
