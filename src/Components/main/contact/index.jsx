import React from 'react'

const Contact = () => {
    return (
        <div className='contact section' id="contact">
            <h2 className='contact__title ' style={{ textAlign: "center", fontSize: "25px", fontWeight: "800" }}>Contact me</h2>
            <p className='' style={{ textAlign: "center", marginBottom: "2rem", fontSize: "13px" }}>Get in touch</p>
            <div className='contact__container container grid'>
                <div>
                    <div className='contact__info'>
                        <i className="uil uil-phone-alt contact__icon"></i>

                        <div>
                            <h3 className='contact__title'>Call </h3>
                            <p className='contact__subtitle'>+82 10 9151 9002</p>
                        </div>
                    </div>

                    <div className='contact__info'>
                        <i className="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 className='contact__title'>Email </h3>
                            <p className='contact__subtitle'>abdulkhamidovakbarjon@gmail.com</p>
                        </div>
                    </div>

                    <div className='contact__info'>
                        <i className="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 className='contact__title'>Location </h3>
                            <p className='contact__subtitle'>성남시 수정구 시민로 145번길 11-2</p>
                        </div>
                    </div>
                </div>
                <form action='' className='contact__form grid'>
                    <div className='contact__inputs grid'>
                        <div className='contact__content '>
                            <label for="" className='contact__label'>Name </label>
                            <input type='text' className='contact__input' />
                        </div>
                        <div className='contact__content '>
                            <label for="" className='contact__label'>Email </label>
                            <input type='email' className='contact__input' />
                        </div>
                    </div>
                    <div className='contact__content '>
                        <label for="" className='contact__label'>Project </label>
                        <input type='text' className='contact__input' />
                    </div>
                    <div className='contact__content '>
                        <label for="" className='contact__label'>Message </label>
                        <textarea className='contact__input' rows='7' cols="0" />
                    </div>
                    <div>
                        <a href='abdulkhamidovakbarjon@gmail.com' className='button button--flex '>
                            Send Message
                            <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
