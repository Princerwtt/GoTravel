import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='footer'>
          <div style={{color:'black',background:'#423F3E'}} >
            <p style={{color:'black',background:'#423F3E'}} >Made with ❤ </p>
            <p style={{color:'black',background:'#423F3E'}} >© 2023 goTravel.</p>
          </div>
          <div style={{color:'black',background:'#423F3E'}} >
            <p style={{fontWeight:'bold',color:'black',background:'#423F3E'}} >goTravel</p>
            <br/>
            <Link to='/terms' className='link'  >
              <p style={{color:'black',background:'#423F3E'}} >Terms</p>
            </Link>
            <Link to='/privacypolicy' className='link' >
              <p style={{color:'black',background:'#423F3E'}} >Privacy policy</p>
            </Link>
            <Link to='/copyright' className='link' >
              <p style={{color:'black',background:'#423F3E'}} >Copyright</p>
            </Link>
          </div>
          <div style={{color:'black',background:'#423F3E'}} >
            <p style={{fontWeight:'bold',color:'black',background:'#423F3E'}}  >Contributers</p>
            <br/>
            <Link to='https://www.linkedin.com/in/prince-rawattt/' target='_blank' className='link' >
              <p style={{color:'black',background:'#423F3E'}} >Prince Rawat</p>
            </Link>
            <Link to='https://www.linkedin.com/in/shivamkumar8009/' target='_blank' className='link' >
              <p style={{color:'black',background:'#423F3E'}} >Shivam Kumar</p>
            </Link>
            <Link to='http://www.linkedin.com/in/pranjul56667' target='_blank' className='link' >
              <p style={{color:'black',background:'#423F3E'}} >Kumar Pranjul</p>
            </Link>
          </div>
      </div>
    </>
  )
}

export default Footer