import phonePic from '../../assets/mobile.f82d73222992d2101a09.png'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import './Booking.css'

const Booking = () => {
    return ( 
        <section className="booking">
            <div className="container p-5">
                <div className="row">
                    <form className="form d-flex p-5 col-sm-12 col-lg-5">
                        <ul>
                        <h2>Book Appointment</h2>
                            <li>
                            <select>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                            </select>
                            </li>
                            <li>
                            <select>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                            </select>
                            </li>
                            <li>
                                <input type="text" placeholder="Your Name" />
                            </li>
                            <li>
                                <input type="text" placeholder="Phone Number" />
                            </li>
                            <li>
                                <input type="text" placeholder="Date" />
                            </li>
                            <li>
                                <button className='main-btn mt-3'><a className='text-decoration-none' href="#">Appointment Now</a></button> 
                            </li>
                        </ul>
                    </form>

                    <div className="phonePic position-relative col-sm-12 col-lg-7">
                        <img className='img-fluid' src={phonePic} alt="Phone Pic" />
                        <img className='one img-fluid position-absolute' src={one} alt="one" />
                        <img className='two img-fluid position-absolute' src={two} alt="two" />
                        <img className='three img-fluid position-absolute' src={three} alt="three" />
                        <img className='four img-fluid position-absolute' src={four} alt="four" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Booking;