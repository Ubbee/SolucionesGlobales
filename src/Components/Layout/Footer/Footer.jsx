import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a href="" className={styles.titf}>SG</a>
        <p className={styles.pr}>© 2024 Soluciones Globales <br /> Somos la solucion a tus problemas</p>
        <div>
            <ul>
                <li><a href=""><img src="src/Components/Layout/Footer/img/igicon.png" alt="icono Instagram" /></a></li>
                <li><a href=""><img src="src/Components/Layout/Footer/img/Linkedin.png" alt="icono Linked In" /></a></li>
                <li><a href=""><img src="src/Components/Layout/Footer/img/x.png" alt="icono X" /></a></li>
            </ul>
        </div>
    </footer>
  )
}
