import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
function Header() {
   return (
      <>
      <img src='./logo.png' className='logo' />
         <div className='head'>
            <div className='heading'>
               <h1 className='heading1'>
                  Discover the<br />
                  Best Food <br />and Drinks
               </h1>

               <p>Naturally made Healthcare Products for the <br/>better care & support of your body.</p>
            </div>
            <div>
               
               <img src='./pizza.png' className='pizza' />
               <img src='./Vector.png' className='vector' />
            </div>
         </div>
      </>
   )
}
export default Header