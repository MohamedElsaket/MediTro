import doc1 from '../../assets/download (2).jpeg'
import doc2 from '../../assets/download.jpeg'
import doc3 from '../../assets/download (3).jpeg'
import doc4 from '../../assets/download (4).jpeg'
import doc5 from '../../assets/download (5).jpeg'
import doc6 from '../../assets/download (1).jpeg'
import './Doctors.css'

const Doctors = () => {
    return ( 
        <section className="doctors">
            <div className="container">
                <div className="text text-center pb-5">
                    <h5>Our Team</h5>
                    <h2>Meet Our Best Team</h2>
                </div>
                <div className="row">
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                        <div className="content text-center p-4">
                            <div className="img mb-5">
                              <img src={doc1} alt="doc1" />
                            </div>
                            <h3 className='fw-bold'>Dr. Addition Smith</h3>
                            <p>Dentist</p>
                        </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                        <div className="content text-center p-4">
                            <div className="img mb-5">
                              <img src={doc2} alt="doc2" />
                            </div>
                            <h3 className='fw-bold'>Dr. Marina Riad</h3>
                            <p>Chiropractor</p>
                        </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                        <div className="content text-center p-4">
                            <div className="img mb-5">
                              <img src={doc3} alt="doc3" />
                            </div>
                            <h3 className='fw-bold'>Dr. David Benjamin</h3>
                            <p>Cardiologist</p>
                        </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                        <div className="content text-center p-4">
                            <div className="img mb-5">
                              <img src={doc4} alt="doc4" />
                            </div>
                            <h3 className='fw-bold'>Dr. David Benjamin</h3>
                            <p>Cardiologist</p>
                        </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                        <div className="content text-center p-4">
                            <div className="img mb-5">
                              <img src={doc5} alt="doc5" />
                            </div>
                            <h3 className='fw-bold'>Dr. David Benjamin</h3>
                            <p>Cardiologist</p>
                        </div>
                    </div>
                    <div className="mt-5 col-lg-4 col-md-6 col-sm-12">
                        <div className="content text-center p-4">
                            <div className="img mb-5">
                              <img src={doc6} alt="doc6" />
                            </div>
                            <h3 className='fw-bold'>Dr. David Benjamin</h3>
                            <p>Cardiologist</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Doctors;