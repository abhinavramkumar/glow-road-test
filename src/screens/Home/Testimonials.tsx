import * as React from 'react';
import {FaQuoteLeft} from 'react-icons/fa';

interface IProps {}

const Testimonials = (props: IProps) => (
  <section className="Testimonials">
    <div className="Products__Title">
      <h2>Our Customer say</h2>
    </div>
    <div className="Testimonials__Wrapper">
      <div className="Testimonials__Quote">
        <FaQuoteLeft />
      </div>
      <div className="Testimonials__Text">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          inventore, distinctio quis dolorem, odit repudiandae natus maiores, ex
          iusto enim laboriosam minima culpa similique ratione! Suscipit, culpa.
          Iure, cum autem!
        </p>
        <p className="Testimonials__User">- Jane Doe, New York</p>
      </div>
    </div>
  </section>
);

export default Testimonials;
