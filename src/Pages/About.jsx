import PageName from '../components/PageName/PageName';
import Achievement from '../components/Achievements/Achievements'
import SectionFive from '../components/SectionFive/SectionFive';
import SectionTwo from '../components/SectionTwo/SectionTwo';
import Doctors from '../components/Doctors/Doctors';

const About = () => {
    return ( <>
    <PageName>About Us</PageName>
    <SectionTwo />
    <Doctors />
    <Achievement />
    <SectionFive />
    </> );
}
 
export default About;