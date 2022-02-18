import React from 'react'
import '../Assets/Css/ErrorPage.css'

function ErrorPage() {
  return (

    <div className='header-401'>
      <br/>

          <p className='ErrorPage'>401</p>
          <h2 className='ErrorPage-Details'>he page you are trying to access could not be loaded until you first log in with a valid user ID and password !!!</h2>
      <br/> 

      <a className='nav-link' href="/">Back Home</a> 

    </div> 
  )
}

export default ErrorPage