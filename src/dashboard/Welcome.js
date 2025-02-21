import React from 'react'
import formData from '../signUp/Signup'

const Welcome = () => {
  return (
    <div className='wrapper vh-100 vw-100 bg-primary d-lg-flex gap-0'>
      <nav className='side-hero '>
        <h1>{formData.email}</h1>
      </nav>
      <main className='board-grid d-flex flex-column justify-content-center align-items-center'>
      </main>
    </div>
  )
}

export default Welcome
