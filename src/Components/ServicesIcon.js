import React from 'react';
import bus from './Images/martial-arts-svgrepo-com.svg';
import car from './Images/si_car.svg';
import dth from './Images/si_dth.svg';
import flight from './Images/si_flight.svg';
import gas from './Images/si_gas.svg';
import hotel from './Images/si_hotel.svg';
import loan from './Images/si_insurance.svg';
import light from './Images/si_light.svg';
import mbl from './Images/si_mobile.svg';
import train from './Images/si_train.svg';
import wtr from './Images/si_water.svg';

function ServicesIcon() {
    return (
        <div>

            <section className='pad'>
                <div className='container-fluid'>
                    <div className='row  px-4'>
                        <div className='col-12'>
                            <div className='row serviceIcon'>
                                <div className='col-3 p-5 msgbox'>
                                    <h3>Hobbies & Skill Development</h3>
                                    <p>Explore a wide range of hobbies for your child's skill development</p>
                                    <a href='' >Discover More</a>
                                </div>
                                <div className='col-9 '>
                                    <div className='row justify-content-around px-4 py-5'>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={mbl} alt="" ></img>
                                            </div>
                                            <a href=''>Music Lessons</a>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={light} alt="" ></img>
                                            </div>
                                            <a href=''>Dance Classes</a>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={dth} alt="" ></img>
                                            </div>
                                            <a href=''>Art & Craft</a>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={wtr} alt="" ></img>
                                            </div>
                                            <a href=''>Coding for Kids</a>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={gas} alt="" ></img>
                                            </div>
                                            <a href=''>Sports Coaching</a>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={loan} alt="" ></img>
                                            </div>
                                            <a href=''>Photography</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row serviceIcon1'>
                                <div className='col-3 p-5 msgbox'>
                                    <h3>Skill Development Centers</h3>
                                    <p>Connect with top skill development centers near you</p>
                                    <a href='' >Find Out More</a>
                                </div>
                                <div className='col-9 '>
                                    <div className='row justify-content-around px-4 py-5'>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={flight} alt="" ></img>
                                            </div>
                                            <a href=''>STEM Activities</a>
                                            <p className='text-danger'>Empowering Young Innovators</p>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={bus} alt="" ></img>
                                            </div>
                                            <a href=''>Martial Arts</a>
                                            <p className='text-danger'>Build Strength & Discipline</p>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={train} alt="" ></img>
                                            </div>
                                            <a href=''>Public Speaking</a>
                                            <p className='text-danger'>Boost Confidence</p>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={hotel} alt="" ></img>
                                            </div>
                                            <a href=''>Robotics</a>
                                            <p className='text-danger'>Learn & Create Robots</p>
                                        </div>
                                        <div className='iconbox text-center'>
                                            <div className='imgbox'>
                                                <img src={car} alt="" ></img>
                                            </div>
                                            <a href=''>Yoga for Kids</a>
                                            <p className='text-danger'>Mind & Body Wellness</p>
                                        </div>
                                        <div className='iconbox text-center'>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesIcon;
