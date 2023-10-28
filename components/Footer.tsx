import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='text-center text-text text-xs non-selectable'>
      © {year} noted
    </footer>
  )
}

export default Footer