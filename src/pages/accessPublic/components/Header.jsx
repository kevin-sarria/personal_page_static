import { useEffect, useState } from 'react';
import pdf from '../../../../public/documents/cv_kevin_sarria.pdf';

export const Header = () => {

    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu( (prev) => !prev );
    }

    return (
        
        <header className="header-public">

            <div className="barra-navegacion">
                <a href="#">
                    <div className="logo">
                        SarriaDev
                    </div>
                </a>

                <div className="menu-icon">
                    <div className="icon" onClick={toggleMenu}></div>
                </div>

                <nav className={`navegacion ${ isOpenMenu ? 'navegacion--active' : '' }`}>
                    <a href="#" className="navegacion__link">Inicio</a>
                    <a href="#about-me" className="navegacion__link">Sobre Mi</a>
                    <a href="#projects" className="navegacion__link">Proyectos</a>
                    <a href="#contact-me" className="navegacion__link">Contacto</a>
                    <a href={pdf} target='_blank' className="navegacion__link">Descargar CV</a>
                </nav>
            </div>

            <div className="header-content">
                <h1 className="header-content__title">Frontend Developer</h1>
                <p className="header-content__paragraph">Codifico soluciones de calidad y efectivas a tus problemas, me encantaria ayudarte.</p>
            </div>

            <div className="header-footer">
                <div className="arrow-bottom"></div>
            </div>

        </header>
        
    )
}
