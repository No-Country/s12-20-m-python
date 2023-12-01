import styles from '../Vision/Vision.module.css';

function Vision() {
  return (
    <div className={styles['visions-container']}>
      <div className='vision'>
        <h3>Sostenibilidad</h3>
        <p>
          Compromiso con prácticas que aseguren la viabilidad a largo plazo del
          ecosistema y la comunidad.
        </p>
      </div>
      <div className='vision'>
        <h3>Responsabilidad Ambiental</h3>
        <p>
          Reconocimiento de la importancia de cuidar y preservar el entorno
          natural.
        </p>
      </div>
      <div className='vision'>
        <h3>Colaboración</h3>
        <p>
          Trabajo conjunto con comunidades locales, organizaciones y partes
          interesadas para maximizar el impacto positivo.
        </p>
      </div>
      <div className='vision'>
        <h3>Transparencia</h3>
        <p>
          Comunicación abierta y honesta sobre las acciones y resultados del
          proyecto.
        </p>
      </div>
      <div className='vision'>
        <h3>Innovación</h3>
        <p>
          Búsqueda constante de nuevas formas de mejorar la eficiencia y la
          efectividad en la plantación y cuidado de árboles.
        </p>
      </div>
      <div className='vision'>
        <h3>Respeto</h3>
        <p>
          Trato respetuoso hacia la biodiversidad, las comunidades locales y la
          diversidad cultural.
        </p>
      </div>
    </div>
  );
}

export default Vision;
