import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
function Header() {
   return (
    <>
    <img src='./logo.png' className='logo'/>
    <img src='./pizza.png' width={735} height={804} className='pizza'/>
    <img src='./Vector.png' width={752} height={839} className='vector'/>
    
    </>
   ) 
}
export default Header