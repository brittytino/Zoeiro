import React from 'react';
import bus from './Images/icon_bus.svg';
import car from './Images/icon_car.svg';
import dr from './Images/icon_dr.svg';
import flight from './Images/icon_flieght.svg';
import hotel from './Images/icon_hotel.svg';
import vedio from './Images/icon_video.svg';
import movie from './Images/icon_movie.svg';
import job from './Images/icon_jobs.svg';
import mask from './Images/icon_mask.svg';
import order from './Images/icon_order.svg';
import paise from './Images/icon_paise.svg';
import shope from './Images/icon_shop.svg';
import spa from './Images/icon_spa.svg';
import table from './Images/icon_table.svg';
import tools from './Images/icon_tools.svg';
import train from './Images/icon_train.svg';

function Service_section() {
  return (
    <div>
      <section className='pad'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 paragraph'>
              <p>
                Welcome to our platform, your gateway to discovering a world of hobbies and activities for your child. From creativity to physical development, we help you find trusted centers and experts to nurture your child's passions.
              </p>
            </div>
            <div className='col-12 paragraph'>
              <p>
                Our services connect you with a variety of hobby classes and activities across the country, from major cities like Mumbai, Delhi, and Bangalore to smaller towns. Whether it's art, music, sports, or technology, our listings cover a wide range of options to help your child explore and grow.
              </p>
            </div>
            <div className='col-12 paragraph'>
              <p>
                We offer a 'Free Listing' feature for hobby centers, enabling them to showcase their specialities. Through our platform, you can explore reviews, ratings, and expert recommendations, ensuring your child gets the best learning experience.
              </p>
            </div>
            <div className='col-12 justify'>
              <h5>Some of the services that will be useful to you and your child are:</h5>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={mask} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Art & Craft Classes</a>
              </span>
              <p>
                Explore creative art and craft classes that help children develop fine motor skills and express their imagination through various mediums.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={paise} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Music Lessons</a>
              </span>
              <p>
                Connect with music instructors who offer lessons in instruments, vocals, and rhythm, helping your child discover the joy of music.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={hotel} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Sports Activities</a>
              </span>
              <p>
                Enroll your child in various sports activities that promote physical fitness, teamwork, and discipline. Find classes for football, swimming, tennis, and more.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={bus} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Dance Classes</a>
              </span>
              <p>
                Find the best dance instructors in your area to teach your child different dance styles, from classical to contemporary.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={shope} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Coding for Kids</a>
              </span>
              <p>
                Introduce your child to the world of coding with beginner-friendly programming classes that enhance their logical thinking and problem-solving skills.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={table} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Language Classes</a>
              </span>
              <p>
                Help your child become multilingual with language classes that focus on learning new languages and improving communication skills.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={order} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Cooking & Baking</a>
              </span>
              <p>
                Enroll your child in cooking and baking classes that teach them the basics of culinary arts while encouraging creativity in the kitchen.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={job} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>STEM Learning</a>
              </span>
              <p>
                Explore STEM (Science, Technology, Engineering, Mathematics) classes designed to spark curiosity and innovation in your child.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={movie} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Theater & Drama</a>
              </span>
              <p>
                Unleash your child's inner actor with theater and drama classes that build confidence, communication, and creativity.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={vedio} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Online Learning Platforms</a>
              </span>
              <p>
                Access online platforms that offer a range of courses and activities, allowing your child to learn from the comfort of your home.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={flight} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Outdoor Adventures</a>
              </span>
              <p>
                Find outdoor adventure programs that offer experiences like camping, trekking, and nature exploration to build resilience and appreciation for the outdoors.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={train} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Robotics Workshops</a>
              </span>
              <p>
                Let your child explore the world of robotics with workshops that teach them how to build and program robots, fostering creativity and technical skills.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={car} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Automotive Workshops</a>
              </span>
              <p>
                Ignite a passion for automobiles in your child with workshops where they can learn about car mechanics, maintenance, and driving simulations.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={spa} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Yoga & Meditation</a>
              </span>
              <p>
                Introduce your child to the benefits of yoga and meditation classes, which help in building focus, flexibility, and emotional well-being.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={tools} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>DIY Projects</a></span>
              <p>
                Encourage hands-on learning with DIY (Do It Yourself) projects that allow your child to create and build while enhancing problem-solving skills.
              </p>
            </div>
            <div className='col-3 px-3 justify'>
              <span className='row'>
                <img src={dr} alt=" " className='col-2 text-center' />
                <a href='' className='col-10'>Health & Fitness</a>
              </span>
              <p>
                Explore health and fitness classes designed for children, focusing on building strength, endurance, and a love for physical activity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service_section;
