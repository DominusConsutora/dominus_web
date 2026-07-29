
import react from "react";

function FaqOne() {
            
    return (
        <>
            {/* Start FAQ Area  */}
            <div className="tmp-faq-area tmp-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="thumbnail"
                                data-aos="slide-right"
                                data-aos-duration="800"
                                data-aos-delay={100}
                            >
                                <img
                                    className="w-100 radius"
                                    loading="lazy"
                                    src="/assets/images/about/about-4.png"
                                    alt="About Images"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="tmp-accordion-style accordion"
                                data-aos="slide-up"
                                data-aos-duration="800"
                                data-aos-delay={100}
                            >
                                <div className="accordion" id="accordionExamplea">
                                    <div className="accordion-item card tmponhover">
                                        <h2 className="accordion-header card-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                What services do you provide?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExamplea"
                                        >
                                            <div className="accordion-body card-body">
                                                Corpox is a modern and professional business HTML template.
                                                It is designed for startups, agencies, and corporate
                                                websites. With clean code and responsive layout, it ensures
                                                seamless performance on all devices. Corpox helps you
                                                showcase your services, projects, and brand with style.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card tmponhover">
                                        <h2 className="accordion-header card-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                How does the consultation process work?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExamplea"
                                        >
                                            <div className="accordion-body card-body">
                                                After purchasing the product, if you need any support, you
                                                can share your issue with us by sending a mail to
                                                themespark11@gmail.com. Our support team will review your
                                                request and get back to you as soon as possible. We are
                                                always ready to assist you with installation.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card tmponhover">
                                        <h2 className="accordion-header card-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                How can I schedule a meeting?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExamplea"
                                        >
                                            <div className="accordion-body card-body">
                                                Yes, We will get update the Trydo. And you can get it any
                                                time. Next time we will comes with more feature.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card tmponhover">
                                        <h2 className="accordion-header card-header" id="headingFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                Do you offer customized business solutions?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExamplea"
                                        >
                                            <div className="accordion-body card-body">
                                                You can run Corpox easily. First You'll need to have node
                                                and npm on your machine. So Please open your command prompt
                                                then check your node -v and npm -v Version.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End FAQ Area  */}
        </>

    )
}

export default FaqOne