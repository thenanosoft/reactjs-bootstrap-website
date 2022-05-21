const SinglePageHeader = ({ title }) => {
    return (
        <section className="py-4 bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>{title}</h4>
                    </div>

                    <div className="col-md-8 my-auto">
                        <h6 className="float-end">Home / {title}</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePageHeader