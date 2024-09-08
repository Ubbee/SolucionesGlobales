import styles from './wsp.module.css'
import imgWsp from './img/wspIcon.png'

export const Wsp = () => {
  return (
    <a className={styles.wsp} href="https://wa.me/+5492612520758" target="_blank"><img src={imgWsp} alt="WhatsApp Icon" /></a>
  )
}
