import hexagonal from '../../assets/hexagonal.png'
import PatientsCarousel from '../../Ui/PatientsCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import './SectionFive.css'

const SectionFive = () => {
    return ( 
        <section className="secFive">
            <div className="container">
                <div className="text text-center">
                    <h5>Testimonial</h5>
                    <h2>See What Are The Patients Saying About us</h2>
                </div>
                <div className="row mt-5">
                    <div className="team text-center col-md-12 col-lg-6">
                        <img className='img-fluid' src={hexagonal} alt="" />
                    </div>
                    <div className="slider col-md-12 col-lg-6 text-light position-relative">
                        <FontAwesomeIcon icon={faQuoteLeft} className='leftQuote' />
                        <FontAwesomeIcon icon={faQuoteRight} className='rightQuote' />
                        <PatientsCarousel />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SectionFive;