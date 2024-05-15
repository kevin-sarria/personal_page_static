import { AboutMe, Footer, Header, MyProjects } from './'
import { technologiesData, projectsData } from '../../data'


export const HomePage = () => {

  return (
    <>
        <Header />
        <AboutMe data={technologiesData} />
        <MyProjects data={projectsData} />
        <Footer />
    </>
  )
}
