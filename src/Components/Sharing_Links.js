import React from 'react';
import appstore from './Images/appStore.png';
import playstore from './Images/googlePlay.png';
import fb from './Images/facebook.png';
import ytb from './Images/youtube.png';
import inst from './Images/instagram.png';
import lnkd from './Images/linkedin.png';
import twtr from './Images/twitter.png';

function Sharing_Links() {
    return (
        <div>
            <section className='pad'>
                <div className='container-fluid'>
                    <div className='row '>
                        <div className='col-12 links'>
                            <h5> Popular Hobbies & Activities </h5>
                            <p>
                                <a href=''>Music Classes</a> | <a href=''>Dance Classes</a> |
                                <a href=''>Art & Craft</a> | <a href=''>Coding for Kids</a> |
                                <a href=''>Sports Coaching</a> | <a href=''>Language Learning</a> |
                                <a href=''>Yoga for Kids</a> | <a href=''>Cooking Classes</a> |
                                <a href=''>Robotics</a> | <a href=''>Horse Riding</a> |
                                <a href=''>Photography</a> | <a href=''>Drama & Theater</a> |
                                <a href=''>Chess Classes</a> | <a href=''>Public Speaking</a> |
                                <a href=''>Swimming</a> | <a href=''>Martial Arts</a> |
                                <a href=''>Creative Writing</a> | <a href=''>Gardening</a> |
                                <a href=''>Pottery</a> | <a href=''>Film Making</a> |
                                <a href=''>Animal Care</a> | <a href=''>Adventure Sports</a> |
                                <a href=''>Digital Art</a> | <a href=''>Sewing & Knitting</a> |
                                <a href=''>Environmental Activities</a> | <a href=''>Woodworking</a> |
                                <a href=''>Book Clubs</a> | <a href=''>Volunteer Work</a> |
                                <a href=''>Fitness Training</a> | <a href=''>Bird Watching</a> |
                                <a href=''>STEM Projects</a> | <a href=''>Calligraphy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='pad'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6 social-icons'>
                            <h5> <span>Follow us on</span>
                                <a href=''><img src={fb} alt="facebook icon" /></a>
                                <a href=''><img src={ytb} alt="youtube icon" /></a>
                                <a href=''><img src={inst} alt="instagram icon" /></a>
                                <a href=''><img src={lnkd} alt="linkedin icon" /></a>
                                <a href=''><img src={twtr} alt="twitter icon" /></a>
                            </h5>
                        </div>
                        <div className='col-6 text-end store-images d-flex'>
                            <img src={playstore} alt="play store png" />
                            <img src={appstore} alt="app store png" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sharing_Links;
