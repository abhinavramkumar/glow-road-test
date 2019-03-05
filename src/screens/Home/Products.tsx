import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {IProduct} from '../../config/types';

interface IProps {
  type: string;
  widthType?: string;
  data?: any;
}

type Props = IProps & IStateToProps;

const Products = ({data, type, widthType, products}: Props) => {
  return (
    <section className="Products">
      <div className="Products__Title">
        <h2>{`${type} (${products.length})`}</h2>
      </div>
      <div
        className={'Products__Wrapper' + (widthType === 'wide' ? ' wide' : '')}
      >
        {!data &&
          products.map((item: any) => (
            <figure key={item.id} className="Products__Product">
              <img src={item.url} alt={item.name} />
              <figcaption>
                <h3>
                  {item.name.length > 16
                    ? `${item.name.substr(0, 16)}...`
                    : item.name}
                </h3>

                <div className="Products__Product-Meta">
                  {type === 'products' && (
                    <p className="Products__Product-Meta-Price">
                      ₹{item.price}
                    </p>
                  )}
                  <p className="Products__Product-Meta-Special">
                    {item.special}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        {data &&
          data.map((item: any) => (
            <figure key={item.id} className="Products__Product">
              <img src={item.url} alt={item.name} />
              <figcaption>
                <h3>
                  {item.name.length > 16
                    ? `${item.name.substr(0, 16)}...`
                    : item.name}
                </h3>

                <div className="Products__Product-Meta">
                  {type === 'products' && (
                    <p className="Products__Product-Meta-Price">
                      ₹{item.price}
                    </p>
                  )}
                  <p className="Products__Product-Meta-Special">
                    {item.special}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
      </div>
      <div className="Products__Footer">
        <Link to="/" className="link">
          View More
        </Link>
      </div>
    </section>
  );
};

interface IStateToProps {
  products: Array<IProduct>;
}

const mapStateToProps = ({products}: any): IStateToProps => ({
  products,
});

export default connect(mapStateToProps)(Products);
