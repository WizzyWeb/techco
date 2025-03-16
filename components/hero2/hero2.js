import React from 'react';
import Link from 'next/link'
import circle1 from '/public/images/hero/circle_engine_1.webp'
import circle2 from '/public/images/hero/circle_engine_2.webp'
import circle3 from '/public/images/hero/circle_engine_3.webp'
import circle4 from '/public/images/hero/circle_engine_4.webp'
import shape1 from '/public/images/hero/shape_image_1.webp'
import shape2 from '/public/images/hero/shape_image_2.webp'
import shape3 from '/public/images/hero/shape_image_3.webp'
import shape4 from '/public/images/hero/shape_image_4.webp'
import Image from 'next/image';

const Hero2 = (props) => {

    return (

        <section className="software_company_hero_section xb-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="content_wrap">
                            <div className="heading_focus_text has_underline text-white d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                            🚀 We Help Businesses Succeed in the Digital Age
                            </div>
                            <h1 className="text-white">
                                We Help Companies in <mark>Digitizing</mark> Their Businesses.
                            </h1>
                            <p>
                               In today’s fast-moving digital world, staying ahead is key to growth. At WizzyWeb, we provide cutting-edge solutions to digitize your business and drive success.                            </p>
                            <ul className="step_list text-white unordered_list_block">
                                <li>Official Google Partner</li>
                                <li>Facebook Verified Business</li>
                            </ul>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <Link className="btn" href="/contact">
                                        <span className="btn_label" data-text="Contact Us Today!">Get Started Today!</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <a className="hotline_block" href="tel:+918084887530">
                                        <span className="hotline_icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <span className="hotline_content">
                                            <small>Contact Us</small>
                                            <strong className="text-white">(+91) 808-488-7530</strong>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="engine_image">
                            <div className="image_wrap_1">
                                <Image src={circle1} alt="Engine" />
                            </div>
                            <div className="image_wrap_2">
                                <Image src={circle2} alt="Engine" />
                            </div>
                            <div className="image_wrap_3">
                                <Image src={circle3} alt="Engine" />
                            </div>
                            <div className="image_wrap_4">
                                <Image src={circle4} alt="Engine" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape_image_1">
                <Image src={shape1} alt="Engine" />
            </div>
            <div className="shape_image_2">
                <Image src={shape2} alt="Engine" />
            </div>
            <div className="shape_image_3">
                <Image src={shape3} alt="Engine" />
            </div>
            <div className="shape_image_4">
                <Image src={shape4} alt="Engine" />
            </div>
        </section>
    )
}

export default Hero2;