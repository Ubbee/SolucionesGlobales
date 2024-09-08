import styles from './home.module.css';
import { Mapa } from '../../Components/Mapa/Mapa.jsx';
import React, { useEffect, useState } from 'react';
import { Formulario } from '../../Components/Formulario/Formulario.jsx';
import { Wsp } from '../../Components/Wsp/Wsp.jsx';
import { Nav } from '../../Components/Layout/Nav/Nav.jsx';

export const Home = () => {

  const [position, setPosition] = useState([-32.882804, -68.860328]);
  const address = 'Boulogne Sur Mer y Uruguay, Capital, Mendoza, Argentina';

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
        const data = await response.json();
        if (data.length > 0) {
          setPosition([data[0].lat, data[0].lon]);
        } else {
          console.error('No se encontraron coordenadas para la dirección proporcionada.');
        }
      } catch (error) {
        console.error('Error al obtener coordenadas:', error);
      }
    };

    fetchCoordinates();
  }, []);

  const scrollToFormulario = () => {
    const sectionElement = document.getElementById('formu');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className={styles.sectorr}>
        <div className={styles.home} id='inicio'>
          <h1>Redes y Soluciones Tecnológicas Integradas</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id molestiae maxime ipsum, culpa, sed error quas fuga voluptates blanditiis nulla,
            harum tempora inventore. Veritatis totam, tempore qui nemo pariatur blanditiis.</p>
          <button onClick={scrollToFormulario}>Contactanos</button>
        </div>
        <div className={styles.stitulo}>
          <h3>Nuestros Servicios</h3>
          <div className={styles.servicios}>
            <div>
              <h4>Servicio 1</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident ipsum adipisci accusantium magnam. Atque inventore
                voluptatibus tempore veritatis. Numquam provident minima nisi
                odio repellat officiis voluptate amet eaque, reiciendis rem.</p>
            </div>
            <div>
              <h4>Servicio 2</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident ipsum adipisci accusantium magnam. Atque inventore
                voluptatibus tempore veritatis. Numquam provident minima nisi
                odio repellat officiis voluptate amet eaque, reiciendis rem.</p>
            </div>
            <div>
              <h4>Servicio 3</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident ipsum adipisci accusantium magnam. Atque inventore
                voluptatibus tempore veritatis. Numquam provident minima nisi
                odio repellat officiis voluptate amet eaque, reiciendis rem.</p>
            </div>

            <div >
              <h4>Servicio 4</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident ipsum adipisci accusantium magnam. Atque inventore
                voluptatibus tempore veritatis. Numquam provident minima nisi
                odio repellat officiis voluptate amet eaque, reiciendis rem.</p>
            </div>
            <div>
              <h4>Servicio 5</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident ipsum adipisci accusantium magnam. Atque inventore
                voluptatibus tempore veritatis. Numquam provident minima nisi
                odio repellat officiis voluptate amet eaque, reiciendis rem.</p>
            </div>
            <div>
              <h4>Servicio 6</h4>
              <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident ipsum adipisci accusantium magnam. Atque inventore
                voluptatibus tempore veritatis. Numquam provident minima nisi
                odio repellat officiis voluptate amet eaque, reiciendis rem.</p>
            </div>
          </div>
          <span id='nosotros'></span>
        </div >

        <section >
          <div className={styles.nosotros} >
            <div className={styles.mapa} >
              <h6>Ubicación</h6>
              <Mapa position={position} />
            </div>
            <div className={styles.nos}>
              <h2>Quienes Somos?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Id molestiae maxime ipsum, culpa, sed error quas fuga voluptates blanditiis nulla,
                harum tempora inventore. Veritatis totam, tempore qui nemo pariatur blanditiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Id molestiae maxime ipsum, culpa, sed error quas fuga voluptates blanditiis nulla,
                harum tempora inventore. Veritatis totam, tempore qui nemo pariatur blanditiis.</p>
            </div>
          </div>
        </section>

        <Formulario />
        <Wsp />

      </section>
    </>
  )
}

