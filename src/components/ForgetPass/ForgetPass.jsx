import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
// import '../Login/Login.css'
import '../Login/Login.css'

const ForgetPass = () => {
    return ( 
        <div className="login">
            <div className="container">
                <div className='p-4'><img src={logo} alt="logo" className='img-fluid' /></div>
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="New Password" />
                <Link to='/Meditro' className='w-100'>
                <button className="blue-btn main-btn w-100">Submit</button>
                </Link>
                <p>Already Have An Account ?</p>
                <Link to='/login' className='w-100'>
                <button className='orange-btn main-btn w-100'>Login</button>
                </Link>
            </div>
        </div>
     );
}
 
export default ForgetPass;