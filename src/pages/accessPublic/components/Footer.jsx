

export const Footer = () => {
  return (
    <footer className="footer" id="contact-me">

        <div className="footer__content">

            <div className="footer__content--social">

                <div className="social">
                    <a href="https://twitter.com/" target="_blank">
                        <img src="/img/icons/twitter.png" alt="Icono Twitter" />
                    </a>
                </div>

                <div className="social">
                    <a href="https://www.linkedin.com/in/camilo-bravo-99534a295/" target="_blank">
                        <img src="/img/icons/linkedin.png" alt="Icono Linkedin" />
                    </a>
                </div>

                <div className="social">
                    <a href="https://github.com/kevin-sarria" target="_blank">
                        <img src="/img/icons/github.svg" alt="Icono Github" />
                    </a>
                </div>

                <div className="social">
                    <a href="mailto:camilo.bravo.2050@gmail.com">
                        <img src="/img/icons/correo.png" alt="Icono Mensaje" />
                    </a>
                </div>

            </div>
            
            <p className="copyright">Viva la alegria XD</p>
        </div>

    </footer>
  )
}
