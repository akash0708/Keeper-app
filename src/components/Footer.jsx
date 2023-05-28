import React from 'react'

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <div className='footer'>
      <p className='footer-text'>Copyright &#64; {yr}</p>
    </div>
  )
}

// make it dynamic