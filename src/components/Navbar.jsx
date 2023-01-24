import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <h1>Logo</h1>
    <div className='navlinks'>
      <a href="index.html">Button 1</a>
      <a href="index.html">Button 2</a>
      <a href="index.html">Button 3</a>
      <a href="index.html">Button 4</a>
    </div>
    <div className="button">
      <input className='btn' type="button" value='Button 1' />
      <input className='btn' type="button" value='Button 2' />
    </div>
  </nav>
  )
}

export default Navbar