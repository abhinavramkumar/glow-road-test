import * as React from 'react';
import {FaBars, FaCartArrowDown} from 'react-icons/fa';
import {connect} from 'react-redux';
import {ICart} from '../../config/types';

type IProps = IStateToProps;

const Header = (props: IProps) => {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="Navbar__Wrapper">
          <div className="Navbar__Menu">
            <div className="Navbar__Menu-Trigger">
              <button className="button button--icon">
                <FaBars />
              </button>
            </div>
            <div className="Navbar__Menu-List" />
          </div>
          <div className="Navbar__Cart">
            <button className="button button--icon">
              <FaCartArrowDown />
              <span>{props.cart.length}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface IStateToProps {
  cart: Array<ICart>;
}

const mapStateToProps = ({cart}: any): IStateToProps => ({
  cart,
});

export default connect(mapStateToProps)(Header);
