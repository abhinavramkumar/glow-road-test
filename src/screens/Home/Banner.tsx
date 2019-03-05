import * as React from 'react';
import {Link} from 'react-router-dom';

interface IProps {}

const Banner = (props: IProps) => {
  return (
    <div className="Banner">
      <div className="container">
        <div className="Banner__Wrapper">
          <div className="Banner__Image">
            <img src="http://www.fillmurray.com/80/80" alt="" />
          </div>
          <div className="Banner__Text">
            <h1>PrimoFashion</h1>
            <p>
              Sarees for life. We are a saree design company.
              <span>
                <Link className="link" to="/">
                  (more)
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
