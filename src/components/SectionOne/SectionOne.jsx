import mainDoc from '../../assets/doctor.7c2bc96d67d3eba1d64a.png'
import banner from '../../assets/istockphoto-1398788867-170667a.jpg'
import square from '../../assets/square.png'
import triangle from '../../assets/triangle.png'
import plus from '../../assets/plus.png'
import zigzag from '../../assets/zigzag.png'
import './SectionOne.css'

const SectionOne = () => {
    return ( 
        <div className="secOne container">
            <img src={banner} alt="banner" className='banner' />
            <img src={square} alt="square" className='square position-absolute' />
            <img src={triangle} alt="triangle" className='triangle position-absolute' />
            <img src={plus} alt="plus" className='plus position-absolute' />
            <img src={zigzag} alt="zigzag" className='zigzag position-absolute' />
            <div className="content row d-flex align-items-center">
            <div className="text col-lg-6 col-md-12 col-sm-12">
                <h5 className='mb-3'>We Provide All Health Care Solution</h5>
                <h2>Protect Your Health And Take Care To Of Your Health</h2>
                <button className='main-btn mt-5'>Read More</button>
            </div>
            <div className="pic col-lg-6 col-md-12 col-sm-12">
                <img src={mainDoc} alt="Doctor" className='img-fluid' />
            </div>
            </div>
        </div>
     );
}
 
export default SectionOne;