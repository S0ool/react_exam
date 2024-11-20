import styles from './styles.module.css';
import { NavLink } from "react-router-dom";
import Instagram from '../../public/instagram.png'
import Facebook from '../../public/facebook.png';
import Vk from '../../public/vk.png';
export const Footer = () => {


    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                    <img src="../../public/logo.png" alt="Delivery Food" className={styles.logo} />
                <nav className={styles.navLinks}>
                    <NavLink to="/restaurants">Ресторанам</NavLink>
                    <NavLink to="/couriers">Курьерам</NavLink>
                    <NavLink to="/press-center">Пресс-центр</NavLink>
                    <NavLink to="/contacts">Контакты</NavLink>
                </nav>
                <div className={styles.socialIcons}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" className={styles.logoSocial}/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook" className={styles.logoSocial}/>
                    </a>
                    <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                        <img src={Vk} alt="VK" className={styles.logoSocial}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
