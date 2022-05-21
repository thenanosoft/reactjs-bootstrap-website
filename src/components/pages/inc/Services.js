import { Link } from "react-router-dom"
import ServiceImg from '../../assets/images/Service.jpg';
import './Services.css';

const Services = () => {
    return (
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5 text-center">
                        <h3 className="main-heading">Services</h3>
                        <div className="underline mx-auto"></div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-scale-up shadow">
                            <img className="card-img-top" src={ServiceImg} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Service 1</h5>
                                <div className="underline"></div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" className="btn btn-primary">Button 1</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-scale-up  shadow">
                            <img className="card-img-top" src={ServiceImg} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Service 2</h5>
                                <div className="underline"></div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" className="btn btn-primary">Button 2</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-scale-up shadow">
                            <img className="card-img-top" src={ServiceImg} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Service 3</h5>
                                <div className="underline"></div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" className="btn btn-primary">Button 3</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services