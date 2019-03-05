import * as React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
  data: Array<any>;
}

const Offers = (props: IProps) => {
  return (
    <div className="Offers">
      <div className="Offers__Wrapper">
        {props.data.map(offer => (
          <div key={offer.id} className="Offers__Offer">
            <Link to={offer.url}>
              <img src={offer.imageURL} alt={offer.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
