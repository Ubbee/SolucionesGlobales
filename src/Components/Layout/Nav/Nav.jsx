import styles from './nav.module.css';
import { Link, NavLink } from 'react-router-dom';
import imgBurguer from './img/burguer.png'

export const Nav = () => {

    const scrollToFormulario = () => {
        const formularioElement = document.getElementById('formu');
        if (formularioElement) {
            formularioElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToNosotros = () => {
        const formularioElement = document.getElementById('nosotros');
        if (formularioElement) {
            formularioElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToInicio = () => {
        const formularioElement = document.getElementById('inicio');
        if (formularioElement) {
            formularioElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <nav className={styles.nav}>
                <a href="" className={styles.tit}>SG</a>
                <div className={styles.burguer}>
                    <img src={imgBurguer} alt="iconoBurguer" />
                    <ul className={styles.lista}>
                        <li><Link onClick={scrollToNosotros}>Nosotros</Link></li>
                        <li><Link onClick={scrollToInicio}>Inicio</Link></li>
                        <li><Link onClick={scrollToFormulario}>Contacto</Link></li>
                    </ul>
                </div>
                <ul className={styles.uul}>
                    <li><Link onClick={scrollToNosotros}>Nosotros</Link></li>
                    <li><Link onClick={scrollToInicio}>Inicio</Link></li>
                    <li><Link onClick={scrollToFormulario}>Contacto</Link></li>
                </ul>
            </nav>
        </header>


    )
}
