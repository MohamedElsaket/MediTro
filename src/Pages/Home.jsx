import SectionOne from '../components/SectionOne/SectionOne';
import SectionTwo from '../components/SectionTwo/SectionTwo';
import SectionThree from '../components/SectionThree/SectionThree';
import Booking from '../components/Booking/Booking';
import SectionFour from '../components/SectionFour/SectionFour';
import SectionFive from '../components/SectionFive/SectionFive';
import LatestNews from '../components/LatestNews/LatestNews';


const Home = () => {
    return ( <>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Booking />
        <SectionFour />
        <SectionFive />
        <LatestNews />
    </> );
}
 
export default Home;