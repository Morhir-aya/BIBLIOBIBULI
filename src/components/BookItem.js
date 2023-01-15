import React from 'react';
import { Link } from 'react-router-dom';

function BookItem(props) {
  return (
    <>
      <li className='books__item'>
        <Link className='books__item__link' to={props.path}>
          <figure className='books__item__pic-wrap' data-category={props.label}>
            <img className='books__item__img' alt='Travel Image' src={props.src} />
          </figure>
          <div className='books__item__info'>
            <h5 className='books__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default BookItem;
