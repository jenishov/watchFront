import React from 'react';
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer__content'>
                    <div className='footer__content-info'>

                        <div>
                            <h3 className='title'>Follow Us.</h3>
                            <p className='subtitle'>We are always looking for new <br/>
                                projects and collaborations. <br/>
                                Feel free to contact us.
                            </p>
                            <div className='footer__content-icons'>
                                <ImFacebook/>
                                <BsTwitter/>
                                <RiInstagramFill/>
                            </div>
                        </div>
                        <div>
                            <h3 className='title'>Contact Us.</h3>
                            <p className='subtitle'>
                                One Apple Park Way <br/>
                                Cupertino, CA 95014
                            </p>
                            <p className='footer__content-tel'>(408) 996-1010</p>
                            <a href="support@apple.com">support@apple.com</a>

                        </div>


                    </div>



                </div>

            </div>


        </footer>
    );
};

export default Footer;