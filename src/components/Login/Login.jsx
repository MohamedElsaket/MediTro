import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Login.css'

const Login = () => {
    return ( 
        <div className="login">
            <div className="container">
                <div className='p-4'><img src={logo} alt="logo" className='img-fluid' /></div>
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="Password" />
                <Link className='w-100' to='/Meditro'><button className="blue-btn main-btn w-100">Login</button></Link>
                <p><Link to='/forget'>Forget Password</Link></p>
                <p>Dont have any account?</p>
                <Link to='/register' className='w-100'>
                <button className='orange-btn main-btn w-100'>Register</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Login;