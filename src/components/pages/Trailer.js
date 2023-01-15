import React from 'react'
import '../../App.css';
import Footer from '../Footer';

function Trailer() {
  return (
    <>
      <h1 className='trailer'>TRAILER</h1><br/><br/>
      <div  className='v-d-o'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SKVcQnyEIT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <br/><br/>
      <Footer />
    </>
  )
}

export default Trailer
