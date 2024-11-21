import { NavLink } from "react-router-dom";
import logo from '../../public/logo.png';
import styles from './styles.module.css';
import {useEffect, useState} from "react";

export const Header = ({login,setLogin, processSearch})=> {
    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username') || "");
    useEffect(() => {
        setLogin(!!localStorage.getItem('username'));
    }, []);

    const Login = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const loginName = formData.get('login');
        localStorage.setItem('username', loginName);
        setUsername(loginName);
        setLogin(true);
        setModal(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('basket');

        setUsername("");
        setLogin(false);
    };

    return (
        <header className={styles.header}>
            {modal && (
                <div className={styles.modal}>
                    <button onClick={() => setModal(false)} style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '16px', background: 'none', border: 'none', cursor: 'pointer' }}>×</button>
                    <form className={styles.form} onSubmit={Login}>
                        <input name="login" className={styles.input} type="text" placeholder="Логин" required />
                        <input name="password" className={styles.input} type="password" placeholder="Пароль" required />
                        <button className={styles.button}>Войти</button>
                    </form>
                </div>
            )}

            <nav className={styles.headerLinks}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <input className={styles.search} type="text" placeholder="Поиск" onChange={(e)=>processSearch(e.target.value)} />
                {login ? (
                    <div className={styles.basketLogout}>
                        <span className={styles.username}>{username}</span>
                        <NavLink className={styles.basket} to="/Basket">Корзина</NavLink>
                        <button className={styles.logout} onClick={handleLogout}>Выйти</button>
                    </div>
                ) : (
                    <div className={styles.basketLogout}>
                        <button className={styles.login} onClick={() => setModal(true)}>Войти</button>
                    </div>
                )}
            </nav>
        </header>
    );
}
