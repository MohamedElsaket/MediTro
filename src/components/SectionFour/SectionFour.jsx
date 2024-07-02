import SimpleSlider from '../../Ui/ServicesCarousel'
import './SectionFour.css'

const SectionFour = () => {
    return ( 
        <section className="secFour">
            <div className="container ">
                <div className="row">
                    <div className="text col-lg-5">
                        <h5>Services</h5>
                        <h2>We Cover A Big Variety Of Medical Services</h2>
                        <p className='p-0 mt-4 mb-4'>We provide the special tips and advice's of heath care treatment and high level of best.</p>
                        <button className='main-btn'>All Services</button>
                    </div>
                    <div className="slider col-lg-7">
                        <SimpleSlider />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SectionFour;