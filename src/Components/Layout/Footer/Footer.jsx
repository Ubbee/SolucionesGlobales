import styles from './footer.module.css'
import imgIg from './img/igicon.png'
import imgLinkedIn from './img/Linkedin.png'
import imgX from './img/x.png'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a href="" className={styles.titf}>SG</a>
        <p className={styles.pr}>© 2024 Soluciones Globales <br /> Somos la solucion a tus problemas</p>
        <div>
            <ul>
                <li><a href=""><img src={imgIg} alt="icono Instagram" /></a></li>
                <li><a href=""><img src={imgLinkedIn} alt="icono LinkedIn" /></a></li>
                <li><a href=""><img src={imgX} alt="icono X" /></a></li>
            </ul>
        </div>
    </footer>
  )
}
