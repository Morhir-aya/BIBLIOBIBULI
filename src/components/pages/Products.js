import React from 'react';
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function Products() {
  return(
    <>
    <h1 className='products'>PRODUCTS</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/11.jpg'
              text='34 Great Books to Read Right Now for Any Mood or Interest'
              label='Recommendations'
              path='#'
            />
            <CardItem
              src='images/12.jpg'
              text='Are paper books really disappearing?'
              label='News'
              path='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/13.jpeg'
              text='100 best books that make good holiday reads for summer 2022'
              label='Recommendations'
              path='#'
            />
            <CardItem
              src='images/16.gif'
              text='Competition Issues in Books and e-Books'
              label='News'
              path='#'
            />
            <CardItem
              src='images/15.jpg'
              text='40 Books All Teens Should Read Before They Turn 18 '
              label='Recommendations'
              path='#'
            />
          </ul>
        </div>
      </div>
    
  
    </>
  );
}

export default  Products;