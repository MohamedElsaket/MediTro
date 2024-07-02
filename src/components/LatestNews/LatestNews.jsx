import pic1 from '../../assets/pic1.a3848a1189e2114e1b47.jpg'
import pic2 from '../../assets/pic2.67db6c474a828bd7a0cd.jpg'
import pic3 from '../../assets/pic3.89b8315141d75bd31ced.jpg'
import './LatestNews.css'

const LatestNews = () => {
    return ( 
        <section className="LatestNews">
            <div className="container">
                <div className="text text-center">
                    <h5>Latest News</h5>
                    <h2 className='pb-5'>Our Latest News</h2>
                </div>
                <div className="info row d-flex justify-content-center">
                    <div className="box p-4 col-sm-12 col-md-5 col-lg-3">
                        <img src={pic1} alt="pic1" className="pic1 img-fluid" />
                        <p>John Deo <span>21 July 2021</span> </p>
                        <h4>In this hosoital there is a special surgeon surgeon</h4>
                        <button className='main-btn'>Read More</button>
                    </div>
                    <div className="box p-4 col-sm-12 col-md-5 col-lg-3">
                        <img src={pic2} alt="pic2" className="pic2 img-fluid" />
                        <p>Peter Packer <span>20 July 2021</span> </p>
                        <h4>Can you get a Diflucan prescription online ?</h4>
                        <button className='main-btn'>Read More</button>
                    </div>
                    <div className="box p-4 col-sm-12 col-md-5 col-lg-3">
                        <img src={pic3} alt="pic3" className="pic3 img-fluid" />
                        <p>Sonar Moyna <span>19 July 2021</span> </p>
                        <h4>Why is skin Surgeon Considered Underrated</h4>
                        <button className='main-btn'>Read More</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default LatestNews;