export const AboutMe = ({ data = [] }) => {

  return (
    <main className="about-me" id="about-me">

      <div className="about-me__grid">

        <div className="about-me__content">
          <img src="/img/user-2.png" alt="Imagen sobre mi" />
          <h3>Hola, soy Kevin. Encantado de conocerte.</h3>
          <p>Desde muy pequeño adquiri un gusto a las computadoras llevandome asi a ser muy curioso, desde muy temprana edad se surgian preguntas como: ¿ Cómo se hace eso ?, ¿Por qué se hace asi?, ¿ Puedo yo tambien desarmar mi propio equipo?, ¿ Alo ?, mamá la pc ya no enciende, jajaja, en fin, desde muy temprano ame el mundo de las computadoras y esto me llevo a querer adentrarme en el como desarrollador web. </p>
        </div>

        <div className="about-me__technologies">
          
          <div className="about-me__technologies--text">
            <h3>Acerca de mis habilidades</h3>
            <p>Cuento con habilidades para codificar en algunas tecnologias como lo son React con Redux, Dar estilos a paginas con TailwindCSS y hacer un backend con PHP, pero estas no son las unicas tecnologias que manejo, otras que me ayudan en mi dia a dia a realizar mis proyectos son:</p>
          </div>

          <div className="about-me__technologies--technologie">

            {
              data && data.map( ( { name, image }, index ) => (
                <div className="technologie" key={index}>
                  <img src={`${image}`} alt={`Icono ${name}`} />
                  <p>{name}</p>
                </div>
              ) )
            }

          </div>
        </div>
      </div>

    </main>
  )
}
