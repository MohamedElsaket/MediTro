import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import banner from '../../assets/istockphoto-1398788867-170667a.jpg'
import './PageName.css'

const PageName = ({ children }) => {
    return ( 
        <div className="PageName position-relative pt-5 pb-5">
            <img src={banner} alt="banner" className="banner" />
            <div className="containter text-center">
                <div className="text">
                <h2>{children}</h2>
                <button className='main-btn'>
                    <Link className='pe-3' to="/Meditro"><FontAwesomeIcon className='pe-2' icon={faHouseChimney} /> Home
                    </Link> / <span className='ps-3'>{children}</span></button>
                </div>
            </div>
        </div>
     );
}
 
export default PageName;