import doctor1 from '../../assets/section-two (1).jpg'
import doctor2 from '../../assets/section-two (2).jpg'
import doctor3 from '../../assets/section-two (3).jpg'
import square from '../../assets/square.png'
import orangeSquare from '../../assets/orange-square.png'
import circle from '../../assets/circle.png'
import './SectionTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMedical, faBedPulse, faHeartCirclePlus, faSyringe } from '@fortawesome/free-solid-svg-icons'

const SectionTwo = () => {
    return ( 
        <section className="secTwo">
            <section className="container">
                <img src={square} alt="square" className='square' />
                <img src={square} alt="square" className='square-rotate' />
                <img src={orangeSquare} alt="orangeSquare" className='orangeSquare' />
                <img src={circle} alt="circle" className='circle' />
                <div className="row gap-4">                
                    <div className="pics col-md-12 col-lg-6 row gap-2">
                        <div className='col text-end'>
                            <img src={doctor3} alt="" className='doctor3 img-fluid' />
                            <img src={doctor2} alt="" className='doctor2 img-fluid mt-4' />
                        </div>
                        <div className='col text-start p-0 '>
                            <img src={doctor1} alt="" className='doctor1 img-fluid' />
                            <div className="twentyYears p-4 mt-4 text-center">
                                <h1 className='m-0 p-0'>20</h1>
                                <span>Years Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="content col-md-12 col-lg-6">
                        <div className="text">
                            <h5>About Us</h5>
                            <h2>The Great Place Of Medical Hospital Center</h2>
                            <span>We provide the special tips and advice's of heath care treatment and high level of best technology involve in the our hospital.</span>
                        </div>
                        <div className="boxs row gap-3 mt-4 mb-4">
                            <div className="box one col-md-5 col-sm-12 d-flex align-items-center">
                            <div>
                                <FontAwesomeIcon className='icon fs-3' icon={faTruckMedical} />
                            </div>
                            <p>Emergency Help</p>
                            </div>
                            <div className="box two col-md-5 col-sm-12 d-flex align-items-center">
                            <div>
                                <FontAwesomeIcon className='icon fs-3' icon={faBedPulse} />
                            </div>
                            <p>Qualified Doctors</p>
                            </div>
                            <div className="box three col-md-5 col-sm-12 d-flex align-items-center">
                            <div>
                                <FontAwesomeIcon className='icon fs-3' icon={faHeartCirclePlus} />
                            </div>
                            <p>Best Professionals</p>
                            </div>
                            <div className="box four col-md-5 col-sm-12 d-flex align-items-center">
                            <div>
                                <FontAwesomeIcon className='icon fs-3' icon={faSyringe} />
                            </div>
                            <p>Medical Treatment</p>
                            </div>
                        </div>
                        <button className='main-btn'>Read More</button>
                    </div>
                </div>
            </section>
        </section>
     );
}
 
export default SectionTwo;