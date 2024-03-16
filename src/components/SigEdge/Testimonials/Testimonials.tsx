import React from 'react';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-container">
    <h1 className="testimonials-header">WHAT OUR STUDENTS<br></br> ARE SAYING</h1>
    <div className="testimonial-row">
      <div className="testimonial-column">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sesa-f250c.appspot.com/o/dontelewis.jfif?alt=media&token=fe433d52-d845-4718-a4c7-67569a4ccb4b"
          alt="Donte Lewis"
          className="testimonial-image"
        />
        <h3>Donte Lewis <br />Inside Sales Rep. at Angi</h3>
        <p>&quot;I just attended Ashton Harvey&apos;s Significant Edge Sales bootcamp and I cannot wait to get my career started in Tech sales! Ashton is a dynamic and professional trainer. If you get the chance to attend one of his trainings in person, don&apos;t hesitate, just go!&quot;</p>
      </div>

      <div className="testimonial-column">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sesa-f250c.appspot.com/o/katy%20ricardo.jfif?alt=media&token=f38d24d4-3c5e-494c-86b8-7bb96a192aa5"
          alt="Katy Ricardo"
          className="testimonial-image"
        />
        <h3>Katy Ricardo <br />Sales Dev. Rep. ServiceNow</h3>
        <p>&quot;If anyone is on the fence about joining the Significant Edge Sales Program, here is the simple answer... just do it!&quot;</p>
      </div>

      <div className="testimonial-column">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sesa-f250c.appspot.com/o/elijahawoke.jfif?alt=media&token=1833abda-9cd0-4e47-a873-4f44550bce8d"
          alt="Elija Awoke"
          className="testimonial-image"
        />
        <h3>Elija Awoke <br />Enterprise SDR at Brex</h3>
        <p>&quot;I always thought that I was a fantastic salesman. Thanks to working with Ashton I have been able to make tiny tweaks that helped me increase my close rates from 30% to 60% within 3 months!&quot;</p>
      </div>

      <div className="testimonial-column">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sesa-f250c.appspot.com/o/kris.jfif?alt=media&token=69c31fcf-8ac3-4a19-8e4d-9a84764fa42f"
          alt="Kristopher Rush"
          className="testimonial-image"
        />
        <h3>Kristopher Rush <br />Digital Account Executive at ServiceNow</h3>
        <p>&quot;Ashton is dynamic, engaging and super supportive! Getting started in tech sales seemed way out of reach, but after attending today&apos;s bootcamp, I feel empowered to take the next step in my career. Thank you Ashton and team.&quot;</p>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
