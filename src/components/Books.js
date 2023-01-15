import React from 'react';
import './Books.css';
import BookItem from './BookItem';

function Books() {
  return (
    <div className='books'>
      <h1>Check out these EPIC Recommendations</h1>
      <div className='books__container'>
        <div className='books__wrapper'>
          <ul className='books__items'>
            <BookItem
              src='images/11.jpg'
              text='34 Great Books to Read Right Now for Any Mood or Interest'
              label='Recommendations'
              path='#'
            />
            <BookItem
              src='images/12.jpg'
              text='Are paper books really disappearing?'
              label='News'
              path='#'
            />
          </ul>
          <ul className='books__items'>
            <BookItem
              src='images/13.jpeg'
              text='100 best books that make good holiday reads for summer 2022'
              label='Recommendations'
              path='#'
            />
            <BookItem
              src='images/16.gif'
              text='Competition Issues in Books and e-Books'
              label='News'
              path='#'
            />
            <BookItem
              src='images/15.jpg'
              text='40 Books All Teens Should Read Before They Turn 18 '
              label='Recommendations'
              path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Books;