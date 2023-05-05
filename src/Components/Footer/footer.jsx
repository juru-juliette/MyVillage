import React, { Component } from 'react';
import './footer.css'
import {GiVillage } from "react-icons/gi";

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer>
                    <div className="row primary">
                        <div className="column about col-xl-3 col-lg-12">

                            <h3 className='footer-logo'><GiVillage style={{fontSize: '8rem',marginTop:'2rem'}}/></h3>
                              <span className='span-title'>MyVillage</span>
                        </div>

                        <div className="column links col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <h3 className='footer-h3'>Useful Links</h3>

                            <ul>
                                <li className='footer-links'><a href="/">Relocate</a></li>
                                <li className='footer-links'><a href="/">Check Status</a></li>
                            </ul>

                        </div>

                        <div className='column col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6'>
                            <h3 className='footer-h3'>Support</h3>
                            <ul>
                                <li className='footer-links'><a href="/">About Us</a></li>
                                <li className='footer-links'><a href="/">Cookies Policy</a></li>
                                <li className='footer-links'><a href="/">Terms Of Service</a></li>
                            </ul>

                        </div>

                        <div className="column subscribe col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <h3 className='footer-h3'>Social Media</h3>

                            <div className="social">
                                <a href="/"><i class="fa-brands fa-facebook"></i></a>
                                <a href="/"><i class="fa-brands fa-instagram"></i></a>
                                <a href="/"><i class="fa-brands fa-twitter"></i></a>
                                <a href="/"><i class="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>

                    </div>

                    <div className="copyright">
                        {/* <p>Copyright My Village 2023 All right reserved</p> */}
                        <p class="copywrite-text">
                        &copy;2023 My Village. All rights reserved<script>document.write(new Date().getFullYear());</script>
                            </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;