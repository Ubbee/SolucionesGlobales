import styles from './formulario.module.css';
import emailjs from 'emailjs-com';
import { Nav } from '../Layout/Nav/Nav';

export const Formulario = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            nombre: e.target.nombre.value,
            apellido: e.target.lastName.value,
            email: e.target.email.value,
            mensaje: e.target.mensaje.value,
        };

        const templateParams = {
            firstName: formData.nombre,
            lastName: formData.apellido,
            email: formData.email,
            message: formData.mensaje
        };

        emailjs
            .send(
                'SG_DeliveryMail',
                'template_SG',
                templateParams,
                'PEVbjQduv9UGAuaVH'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Mensaje enviado con éxito!');
                },
                (error) => {
                    console.log(error.text);
                    alert('Hubo un error al enviar el mensaje.');
                }
            );
        e.target.reset();
    };


    return (
        (<div className={styles.formulario} id='formu'>
            <section className={styles.formuT} >
                <div className={styles.titulo}>
                    <h5>Contactanos</h5>
                    <p>Llená el formulario y nos pondremos en contacto con vos a la brevedad.</p>
                </div>
                <div>
                    <form className={styles.formu} onSubmit={handleSubmit}>
                        <div className={styles.nomYap}>
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                <input id="nombre" name="nombre" placeholder="Ingresa tu nombre" required />
                            </div>
                            <div>
                                <label htmlFor="lastName">Apellido</label>
                                <input id="lastName" name="lastName" placeholder="Ingresa tu apellido" required />
                            </div>
                        </div>

                        <div className={styles.mail}>
                            <label htmlFor="email">Correo electrónico</label>
                            <input id="email" name="email" type="email" placeholder="ejemplo@dominio.com" required />
                        </div>

                        <div className={styles.msj}>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" placeholder="Escribí tu mensaje acá" required />
                        </div>

                        <button type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </div>
        )
    )
}
