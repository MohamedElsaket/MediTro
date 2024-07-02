import './Achievements.css'

const Achievements = () => {
    return ( 
        <section className="achievements p-5">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <div className="box p-5">
                        <h2>120</h2>
                        <h4>Years With You</h4>
                        <p>Etiam ante ante, molestie vitae cursus ac, 
                            pharetra euismod libero.
                        </p>
                    </div>
                    <div className="box p-5">
                        <h2>400</h2>
                        <h4>Awards</h4>
                        <p>Etiam ante ante, molestie vitae cursus ac, 
                            pharetra euismod libero.
                        </p>
                    </div>
                    <div className="box p-5">
                        <h2>250</h2>
                        <h4>Doctors</h4>
                        <p>Etiam ante ante, molestie vitae cursus ac, 
                            pharetra euismod libero.
                        </p>
                    </div>
                    <div className="box p-5">
                        <h2>800</h2>
                        <h4>Satisfied Client</h4>
                        <p>Etiam ante ante, molestie vitae cursus ac, 
                            pharetra euismod libero.
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Achievements;