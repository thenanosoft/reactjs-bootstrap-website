import SinglePageHeader from "./inc/SinglePageHeader"
import VMC from "./inc/VMC"

const About = () => {
    return (
        <>
            <SinglePageHeader title="About" />

            <section className="section bg-light-c border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ipsam neque quas earum dicta, voluptatem tenetur a veritatis error rerum molestias deleniti ab facilis, dolorum nostrum ea. Aliquam, consectetur. Consectetur.</p>
                </div>
            </section>

            <VMC />
        </>
    )
}

export default About