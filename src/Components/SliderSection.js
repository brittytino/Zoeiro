import React from 'react';
import slider1 from './Images/inst23.jpeg';
import slider2 from './Images/43.webp';
import slider3 from './Images/spo23.jpeg';
import slider4 from './Images/4.png';
import slider12 from './Images/sliderImg12.png';
import slider13 from './Images/sliderImg13.png';
import slider14 from './Images/sliderImg14.png';
import Carousel from 'react-bootstrap/Carousel';

function SliderSection() {
    return (
        <div>
            <section className='pad'>
                <div className='container-fluid'>
                    <div className='row px-4'>
                        <div className='col-5 Carousel'>
                            <Carousel>
                                                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider12}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider13}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider14}
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                                
                                
                            </Carousel>
                        </div>
                        <div className='col-7'>
                            <div className='row'>
                                <div className='col-3 firstCard'>
                                    <img src={slider1} alt='Music Classes' className='img-fluid' />
                                    <div className='topText'>
                                        <h4>Music</h4>
                                        <span>Learn <br /> Instruments</span>
                                    </div>
                                </div>
                                <div className='col-3 secondCard'>
                                    <img src={slider2} alt='Dance Classes' className='img-fluid' />
                                    <div className='topText'>
                                        <h4>Dance</h4>
                                        <span>Express <br /> Through Dance</span>
                                    </div>
                                </div>
                                <div className='col-3 thirdCard'>
                                    <img src={slider3} alt='Sports Coaching' className='img-fluid' />
                                    <div className='topText'>
                                        <h4>Sports</h4>
                                        <span>Improve <br /> Skills</span>
                                    </div>
                                </div>
                                <div className='col-3 fourthCard'>
                                    <img src={slider4} alt='Coding for Kids' className='img-fluid' />
                                    <div className='topText'>
                                        <h4>Coding</h4>
                                        <span>Build <br /> Future Skills</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SliderSection;
