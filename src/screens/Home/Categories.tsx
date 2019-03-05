import * as React from 'react';
import {ICategory} from '../../config/types';

interface IProps {
  categories: Array<ICategory>;
}

const Categories = ({categories}: IProps) => {
  React.useEffect(() => {});

  return (
    <section className="Categories">
      <div className="Categories__Wrapper">
        {categories.map(category => (
          <figure key={category.id} className="Categories__Category">
            <img src={category.url} alt={category.name} />
            <figcaption>{category.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Categories;
