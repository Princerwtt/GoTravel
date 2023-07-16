import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='footer'>
        <div style={{color:'black'}} >
          <p style={{color:'black'}} >Made with ❤ </p>
          <p style={{color:'black'}} >© 2023 goTravel.</p>
        </div>
        <div style={{color:'black'}} >
          <p style={{fontWeight:'bold',color:'black'}} >goTravel</p>
          <br/>
          <Link to='/terms' className='link'  >
            <p style={{color:'black'}} >Terms</p>
          </Link>
          <Link to='/privacypolicy' className='link' >
            <p style={{color:'black'}} >Privacy policy</p>
          </Link>
          <Link to='/copyright' className='link' >
            <p style={{color:'black'}} >Copyright</p>
          </Link>
        </div>
        <div style={{color:'black'}} >
          <p style={{fontWeight:'bold',color:'black'}}  >Contributers</p>
          <br/>
          <Link to='https://www.linkedin.com/in/prince-rawattt/' target='_blank' className='link' >
            <p style={{color:'black'}} >Prince Rawat</p>
          </Link>
          <Link to='https://www.linkedin.com/in/shivamkumar8009/' target='_blank' className='link' >
            <p style={{color:'black'}} >Shivam Kumar</p>
          </Link>
          <Link to='http://www.linkedin.com/in/pranjul56667' target='_blank' className='link' >
            <p style={{color:'black'}} >Kumar Pranjul</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer