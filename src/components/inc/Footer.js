import './Footer.css'

const Footer = () => {

    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div className="container-fluid bg-light-dark">
            <div className="p-5">
                <div className="row">

                    <div className="col-md-4 col-sm-11 col-xs-11">
                        <div className="footer-text pull-left">
                            <div className="d-flex">
                                <h1 className="font-weight-bold mr-2 px-3 t-span"> E </h1>
                                <h1> Xample</h1>
                            </div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>

                            <div className="social mt-2 mb-3">

                                <i className="fa fa-facebook-official fa-lg" ></i>
                                <i className="fa fa-instagram fa-lg"></i>
                                <i className="fa fa-twitter fa-lg"></i>
                                <i className="fa fa-linkedin-square fa-lg"></i>
                                <i className="fa fa-facebook"></i>

                            </div>

                        </div>
                    </div>


                    <div className="col-md-2 col-sm-1 col-xs-1 mb-2"></div>

                    <div className="col-md-2 col-sm-4 col-xs-4">

                        <h5 className="heading">Services</h5>
                        <ul >
                            <li>IT Consulting -</li>
                            <li>Development</li>
                            <li>Cloud</li>
                            <li>DevOps & Support</li>
                        </ul>

                    </div>


                    <div className="col-md-2 col-sm-4 col-xs-4">

                        <h5 className="heading">Industries</h5>
                        <ul className="card-text">
                            <li>Finance</li>
                            <li>Public Sector</li>
                            <li>Smart Office</li>
                            <li>Retail</li>
                        </ul>

                    </div>


                    <div className="col-md-2 col-sm-4 col-xs-4">

                        <h5 className="heading">Company</h5>
                        <ul className="card-text">
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Join Us</li>
                        </ul>

                    </div>

                </div>


                <div className="divider mb-4" >
                </div>


                <div className="row" >

                    <div className="col-md-6 col-sm-6 col-xs-6">

                        <div className="pull-left">

                            <p><i className="fa fa-copyright"></i> &copy; {getYear()} thenanosoft.com</p>

                        </div>

                    </div>



                    <div className="col-md-6 col-sm-6 col-xs-6">


                        <div className="pull-right mr-4 d-flex policy">

                            <div>Terms of Use</div>
                            <div>Privacy Policy</div>
                            <div>Cookie Policy</div>

                        </div>



                    </div>



                </div>
            </div>

        </div>
    )
}

export default Footer