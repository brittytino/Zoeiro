import React from 'react';
import img1 from './Images/recentActivity_pytm.jpg';
import img2 from './Images/ra_spa.jpg';
import img3 from './Images/ra_twitter.jpg';
import img4 from './Images/ra_user.jpg';
import img5 from './Images/ra_ytb.jpg';
import userImg from './Images/user3.jpg';

function Recent_activity() {
    return (
        <div>
            <section className='pad'>
                <div className='container-fluid'>
                    <div className='col-12 justify px-4'>
                        <h3>Recent Activity</h3>
                    </div>
                    <div className='row my-5 justify-content-between' id='RecentActivity'>
                        <div className='col col-md-4 RecentActivity'>
                            <h4>Art & Craft Classes</h4>
                            <div className='imgbox'>
                                <img src={img1} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <img src={userImg} alt='user image' />
                                    <div>
                                        JOHN DOE
                                        <p className='text-muted'>Enrolled in Art & Craft</p>
                                    </div>
                                </div>
                                <p>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                                </p>
                                <p>
                                    My child loves the creativity involved in art and craft classes. It's been a great way for them to express themselves while learning new skills.
                                </p>
                            </div>
                        </div>
                        <div className='col col-md-4 RecentActivity'>
                            <h4>Music Lessons</h4>
                            <div className='imgbox'>
                                <img src={img2} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <img src={userImg} alt='user image' />
                                    <div>
                                        JANE DOE
                                        <p className='text-muted'>Enrolled in Music Lessons</p>
                                    </div>
                                </div>
                                <p>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                                </p>
                                <p>
                                    Learning music has helped my child develop discipline and patience. The lessons are enjoyable and well-structured.
                                </p>
                            </div>
                        </div>
                        <div className='col col-md-4 py-0 RecentActivity p-0'>
                            <h5 className='px-3'>How would you rate your experience?</h5>
                            <div className='startbox'>
                                <div className='row px-3 my-3'>
                                    <div className='col-4'>
                                        <div className='imgbox'>
                                            <img src={img1} alt='user image' />
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <h5>Art & Craft Classes</h5>
                                        <p>
                                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i> 
                                            <span className='text-muted'>102 Ratings</span>
                                        </p>
                                        <span className='mb-3'>
                                            <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                                            <br /><br />
                                            <a href='' className='pt-3'>Tap to rate</a>
                                        </span>
                                    </div>
                                    <hr />
                                    <div className='col-4'>
                                        <div className='imgbox'>
                                            <img src={img4} alt='user image' />
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <h5>Music Lessons</h5>
                                        <p>
                                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i> 
                                            <span className='text-muted'>89 Ratings</span>
                                        </p>
                                        <span className='mb-3'>
                                            <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                                            <br /><br />
                                            <a href='' className='pt-3'>Tap to rate</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col col-md-4 RecentActivity'>
                            <h4>Sports Training</h4>
                            <div className='imgbox'>
                                <img src={img3} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <div className='imgbox'>
                                        <img src={userImg} alt='user image' />
                                    </div>
                                    <div>
                                        SAM SMITH
                                        <p className='text-muted'>Enrolled in Sports Training</p>
                                    </div>
                                </div>
                                <p>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                                </p>
                                <p>
                                    Sports training has been a great way for my child to stay active and healthy. The coaches are supportive and knowledgeable.
                                </p>
                            </div>
                        </div>
                        <div className='col col-md-4 RecentActivity'>
                            <h4>Dance Classes</h4>
                            <div className='imgbox'>
                                <img src={img4} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <img src={userImg} alt='user image' />
                                    <div>
                                        LUCY LIU
                                        <p className='text-muted'>Enrolled in Dance Classes</p>
                                    </div>
                                </div>
                                <p>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                                </p>
                                <p>
                                    Dance classes have improved my child's confidence and coordination. It's a fun and engaging way for them to stay fit.
                                </p>
                            </div>
                        </div>
                        <div className='col col-md-4 RecentActivity'>
                            <h4>Cooking Classes</h4>
                            <div className='imgbox'>
                                <img src={img5} alt="" className='img-fluid' />
                            </div>
                            <div className='row px-3 my-3'>
                                <div className='col-6 d-flex'>
                                    <img src={userImg} alt='user image' />
                                    <div>
                                        MARK LEE
                                        <p className='text-muted'>Enrolled in Cooking Classes</p>
                                    </div>
                                </div>
                                <p>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                                </p>
                                <p>
                                    Cooking classes have been a delightful experience for my child. They are learning essential life skills while having fun.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Recent_activity;
