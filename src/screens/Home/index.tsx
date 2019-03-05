import * as React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Products from './Products';
import Features from './Features';
import Offers from './Offers';
import {FaQuoteLeft, FaMailBulk} from 'react-icons/fa';
import Bestseller from './Bestsellers';
import Testimonials from './Testimonials';
import Footer from './Footer';

interface IProps {}

const categoriesData = [
  {
    id: '01',
    name: 'Women',
    url: './images/saree.jpg',
  },
  {
    id: '02',
    name: 'Women',
    url: './images/saree.jpg',
  },
  {
    id: '03',
    name: 'Women',
    url: './images/saree.jpg',
  },
  {
    id: '04',
    name: 'Women',
    url: './images/saree.jpg',
  },
  {
    id: '05',
    name: 'Women',
    url: './images/saree.jpg',
  },
];

let productsData = [
  {
    id: '01',
    name: 'Saree 1 has a very very very very very very long title',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '02',
    name: 'Saree 2',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '03',
    name: 'Saree 3',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '04',
    name: 'Saree 4',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '05',
    name: 'Saree 5',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
];

let collectionsData = [
  {
    id: '01',
    name: 'Saree 1',
    url: './images/saree-2.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '02',
    name: 'Saree 2',
    url: './images/saree-2.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '03',
    name: 'Saree 3',
    url: './images/saree-2.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '04',
    name: 'Saree 4',
    url: './images/saree-2.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '05',
    name: 'Saree 5',
    url: './images/saree-2.jpg',
    price: 200,
    special: 'COD Available',
  },
];

let offersData = [
  {
    id: '01',
    name: 'offer 1',
    imageUrl: './images/offer.jpg',
    url: '',
  },
  {
    id: '02',
    name: 'offer 1',
    imageUrl: './images/offer.jpg',
    url: '',
  },
  {
    id: '03',
    name: 'offer 1',
    imageUrl: './images/offer.jpg',
    url: '',
  },
];

const Home = (props: IProps) => {
  return (
    <div className="page Home">
      <div className="page__wrapper">
        <Banner />
        <Categories categories={categoriesData} />
        <Products type="products" />
        <Products type="collections" data={collectionsData} widthType="wide" />
        <Features />
        <Offers data={offersData} />
        <Bestseller />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
