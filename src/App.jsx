import {AboutSection} from "./about";
import {IntroSection} from "./intro";
import {ProjectsSection} from "./projects";
import {ExperienceSection} from "./experience";
import {ContactSection} from "./contact";

function App(){
    return (
        <div>
            <IntroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </div>
    );

}
export default App;


