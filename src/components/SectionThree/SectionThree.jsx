import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, fa1, fa2, fa3, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import plus from '../../assets/plus.png'
import zigzag from '../../assets/zigzag.png'
import orangeCircle from '../../assets/orange-circle.png'
import './SectionThree.css'

const SectionThree = () => {
    return ( 
        <section className="SecThree position-relative">
            <img src={plus} alt="plus" className='pluss position-absolute' />
            <img src={zigzag} alt="zigzag" className='zigzag position-absolute' />
            <img src={orangeCircle} alt="orangeCircle" className='orangeCircle position-absolute' />
            <div className="container text-center">
                <div className="text">
                    <h5>Working Process</h5>
                    <h2>How we works?</h2>
                </div>
                <div className="row cards p-5 mt-5 text-start gap-5 d-flex justify-content-center">
                    <div className="card hover p-5 col-md-4 col-sm-12">
                        <h1 className='pb-3'><FontAwesomeIcon icon={fa0} /> <FontAwesomeIcon icon={fa1} /></h1>
                        <h5>Make Appointmnet</h5>
                        <p className='mb-3'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <button className='d-flex align-items-center justify-content-between mt-4'>Veiw More <FontAwesomeIcon className='btn-icon ms-3' icon={faAngleRight} /></button>
                    </div>
                    <div className="card active p-5 col-md-4 col-sm-12">
                        <h1 className='pb-3'><FontAwesomeIcon icon={fa0} /> <FontAwesomeIcon icon={fa2} /></h1>
                        <h5>Take Treatment</h5>
                        <p className='mb-3'>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <button className='d-flex align-items-center justify-content-between mt-4'>Veiw More <FontAwesomeIcon className='btn-icon ms-3' icon={faAngleRight} /></button>
                    </div>
                    <div className="card hover p-5 col-md-4 col-sm-12">
                        <h1 className='pb-3'><FontAwesomeIcon icon={fa0} /> <FontAwesomeIcon icon={fa3} /></h1>
                        <h5 className='mb-3'>Registration</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <button className='d-flex align-items-center justify-content-between mt-4'>Veiw More <FontAwesomeIcon className='btn-icon ms-3' icon={faAngleRight} /></button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SectionThree;