import React from 'react';

function Footer() {
    return (
        <div>
            <section id='footer' className='pad'>
                <div className='container-fluid'>
                    <div className='row footer py-5'>
                        <div className='col-sm-12 col-md-3'>
                            <h5>Quick Links</h5>
                            <div className='row'>
                                <ul className='col-6'>
                                    <li><a href=''>About Us</a></li>
                                    <li><a href=''>Parent Resources</a></li>
                                    <li><a href=''>We're Hiring</a></li>
                                    <li><a href=''>Customer Support</a></li>
                                    <li><a href=''>Free Listings</a></li>
                                    <li><a href=''>Latest Updates</a></li>
                                    <li><a href=''></a></li>
                                </ul>
                                <ul className='col-6'>
                                    <li><a href=''>Advertise with Us</a></li>
                                    <li><a href=''>Media Coverage</a></li>
                                    <li><a href=''>Success Stories</a></li>
                                    <li><a href=''>Submit Feedback</a></li>
                                    <li><a href=''>Partner with Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-8'>
                            <h5>Explore Categories</h5>
                            <div className='row'>
                                <ul className='col-2'>
                                    <li><a href=''>Music Classes</a></li>
                                    <li><a href=''>Dance Workshops</a></li>
                                    <li><a href=''>Sports Training</a></li>
                                </ul>
                                <ul className='col-2'>
                                    <li><a href=''>Coding Camps</a></li>
                                    <li><a href=''>Art & Crafts</a></li>
                                    <li><a href=''>Language Courses</a></li>
                                </ul>
                                <ul className='col-2'>
                                    <li><a href=''>Science Clubs</a></li>
                                    <li><a href=''>Theater Groups</a></li>
                                    <li><a href=''>Math Clubs</a></li>
                                </ul>
                                <ul className='col-2'>
                                    <li><a href=''>Cooking Classes</a></li>
                                    <li><a href=''>Public Speaking</a></li>
                                    <li><a href=''>Chess Clubs</a></li>
                                </ul>
                                <ul className='col-2'>
                                    <li><a href=''>Yoga for Kids</a></li>
                                    <li><a href=''>Gardening Classes</a></li>
                                    <li><a href=''>Robotics Workshops</a></li>
                                </ul>
                                <ul className='col-2'>
                                    <li><a href=''>Photography</a></li>
                                    <li><a href=''>Drama Classes</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section id='footer' className='pad'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8 my-4'>
                            <p>Copyright © 2008-2023. All Rights Reserved. | Privacy Policy | Terms of Service | Legal Notice</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
