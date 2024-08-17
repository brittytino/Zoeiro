import React from 'react';
import gb_img1 from './Images/music.jpg';
import gb_img2 from './Images/dancewo.jpg';
import gb_img3 from './Images/drama.webp';
import gb_img4 from './Images/codi.jpeg';
import gb_img5 from './Images/art1.webp';
import gb_img6 from './Images/scien.jpg';
import gb_img7 from './Images/sports1.jpg';
import gb_img8 from './Images/yoga.jpeg';
import gb_img9 from './Images/cooking.jpg';
import gb_img10 from './Images/math.jpeg';
import gb_img11 from './Images/pubs.jpeg';
import gb_img12 from './Images/rob.jpeg';

function GallerySection() {
    return (
        <div>
            <section className='pad my-5'>
                <div className='container-fluid'>
                    <div className='row justify-content-between px-4 my-5'>
                        <div className='col galleryBox'>
                            <h5 className='px-4'>Music & Dance</h5>
                            <div className='row text-center px-4 mb-3'>
                                <div className='col-4'>
                                    <img src={gb_img1} alt='Music Classes' className='img-fluid mb-3'></img>
                                    <span>Music Classes</span>
                                </div>
                                <div className='col-4'>
                                    <img src={gb_img2} alt='Dance Workshops' className='img-fluid mb-3'></img>
                                    <span>Dance Workshops</span>
                                </div>
                                <div className='col-4'>
                                    <img src={gb_img3} alt='Drama Classes' className='img-fluid mb-3'></img>
                                    <span>Drama Classes</span>
                                </div>
                            </div>
                        </div>
                        <div className='col galleryBox ms-5'>
                            <h5 className='px-4'>Skill Development</h5>
                            <div className='row text-center px-4 mb-3'>
                                <div className='col-4'>
                                    <img src={gb_img4} alt='Coding Camps' className='img-fluid mb-3'></img>
                                    <span>Coding Camps</span>
                                </div>
                                <div className='col-4'>
                                    <img src={gb_img5} alt='Art & Crafts' className='img-fluid mb-3'></img>
                                    <span>Art & Crafts</span>
                                </div>
                                <div className='col-4'>
                                    <img src={gb_img6} alt='Science Clubs' className='img-fluid mb-3'></img>
                                    <span>Science Clubs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-between px-4 mt-4'>
                        <div className='col galleryBox'>
                            <h5 className='px-4'>Sports & Activities</h5>
                            <div className='row text-center px-4 mb-3'>
                                <div className='col-4'>
                                    <img src={gb_img7} alt='Sports Training' className='img-fluid mb-3'></img>
                                    <span>Sports Training</span>
                                </div>
                                <div className='col-4'>
                                    <img src={gb_img8} alt='Yoga for Kids' className='img-fluid mb-3'></img>
                                    <span>Yoga for Kids</span>
                                </div>
                                <div className='col-4'>
                                    <img src={gb_img9} alt='Cooking Classes' className='img-fluid mb-3'></img>
                                    <span>Cooking Classes</span>
                                </div>
                            </div>
                        </div>
                        <div className='col galleryBox ms-5'>
                            <h5 className='px-4'>Educational Workshops</h5>
                            <div className='row text-center px-4 mb-3'>
                                <div className='col-4'>
                                    <img src={gb_img10} alt='Math Clubs' className='img-fluid mb-3'></img>
                                    <span>Math Clubs</span>
                                </div>
                                <div className='col-4'>
                                    <img src={gb_img11} alt='Public Speaking' className='img-fluid mb-3'></img>
                                    <span>Public Speaking</span>
                                </div>
                                <div className='col-4'>
                                    <img src={gb_img12} alt='Robotics Workshops' className='img-fluid mb-3'></img>
                                    <span>Robotics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GallerySection;
