import * as React from 'react';
import {FaMailBulk} from 'react-icons/fa';

interface IProps {}

const Footer = (props: IProps) => (
  <div className="Footer">
    <div className="Footer__Wrapper">
      <div className="Footer__Help">
        <p>Have questions?</p>
      </div>
      <div className="Footer__Contact">
        <p>
          Email us at
          <span>
            <FaMailBulk />
          </span>
          care@shopprime.com
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
