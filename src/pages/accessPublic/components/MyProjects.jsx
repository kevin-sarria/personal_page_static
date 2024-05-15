import noImage from '../../../../public/img/no_image.jpg'

const addOverlay = (e) => {
    e.target.parentElement.classList.add('overlay-active')
}

const removeOverlay = (e) => {
    e.target.parentElement.classList.remove('overlay-active')
}

export const MyProjects = ({ data = [] }) => {

    return (
        <section className="my-projects" id="projects">

            <div className="my-projects__container">

                <h2 className="my-projects__heading">Mis Proyectos</h2>

                <div className="my-projects__flex">
                    {
                        data && data.map( ({ name, description, image, repository, web, technologies }, index) => (
                            <div className="my-projects__project" key={index}>
                                <div className="my-projects__project--overlay" onMouseEnter={(e) => addOverlay(e)} onMouseLeave={(e) => removeOverlay(e)}>
                                    <img src={`${ image ? image : noImage }`} alt="Imagen del proyecto" />
                                    <div className="buttons">
                                        <a href={`${ web ? web : '#' }`} target="_blank"><img src="/img/icons/web.png" alt="Icono web" />Web</a>
                                        <a href={`${repository ? repository : '#' }`} target="_blank"><img src="/img/icons/github.svg" alt="Icono Github" />Github</a>
                                    </div>
                                </div>

                                <div className="my-projects__project--content">
                                    <h4>{name}</h4>
                                    <p>{description}</p>

                                    <h4>Tecnologias</h4>

                                    <div className="my-projects__project--content-technologies">
                                        {
                                            technologies && technologies.map( (technology, index) => (
                                                <div className="technologie" key={index}>
                                                    <img src={`${technology.image}`} alt={`Icono ${technology.name}`} />
                                                    <p>{technology.name}</p>
                                                </div>
                                            ) )
                                        }
                                    </div>
                                </div>
                            </div>
                        ) )
                    }
                    
                </div>


            </div>

        </section>
    )
}
