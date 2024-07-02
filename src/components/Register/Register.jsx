import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import '../Login/Login.css'

const Register = () => {
    return ( 
        <div className="login">
            <div className="container">
                <div className='p-4'><img src={logo} alt="logo" className='img-fluid' /></div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="Password" />
                <Link className='w-100' to='/Meditro'>
                <button className="blue-btn main-btn w-100">Register Now</button>
                </Link>
                <p>Already Have An Account?</p>
                <Link to='/login' className='w-100'>
                <button className='orange-btn main-btn w-100'>Login</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Register;