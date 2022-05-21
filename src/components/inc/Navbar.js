import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg sticky-top">
                        <div className="container-fluid">
                            <div className="col-md-4">
                                <Link className="navbar-brand" to="/">Navbar</Link>
                            </div>
                            <div className="col-md-8 my-auto">
                                <div className="float-end">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/' >Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/about' >About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar