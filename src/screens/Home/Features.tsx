import * as React from 'react';
import {FaShippingFast} from 'react-icons/fa';

interface IProps {}

const Features = (props: IProps) => (
  <section className="Features">
    <div className="Features__Wrapper">
      <div className="Features__Feature">
        <FaShippingFast />
        <p>Easy Returns</p>
      </div>
      <div className="Features__Feature">
        <FaShippingFast />
        <p>Easy Returns</p>
      </div>
      <div className="Features__Feature">
        <FaShippingFast />
        <p>Easy Returns</p>
      </div>
    </div>
  </section>
);

export default Features;
