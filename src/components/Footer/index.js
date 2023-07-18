import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='footer'>
          <div style={{color:'black',background:'whitesmoke'}} >
            <p style={{color:'black',background:'whitesmoke'}} >Made with ❤ </p>
            <p style={{color:'black',background:'whitesmoke'}} >© 2023 goTravel.</p>
          </div>
          <div style={{color:'black',background:'whitesmoke'}} >
            <p style={{fontWeight:'bold',color:'black',background:'whitesmoke'}} >goTravel</p>
            <br/>
            <Link to='/terms' className='link'  >
              <p style={{color:'black',background:'whitesmoke'}} >Terms</p>
            </Link>
            <Link to='/privacypolicy' className='link' >
              <p style={{color:'black',background:'whitesmoke'}} >Privacy policy</p>
            </Link>
            <Link to='/copyright' className='link' >
              <p style={{color:'black',background:'whitesmoke'}} >Copyright</p>
            </Link>
          </div>
          <div style={{color:'black',background:'whitesmoke'}} >
            <p style={{fontWeight:'bold',color:'black',background:'whitesmoke'}}  >Contributers</p>
            <br/>
            <Link to='https://www.linkedin.com/in/prince-rawattt/' target='_blank' className='link' >
              <p style={{color:'black',background:'whitesmoke'}} >Prince Rawat</p>
            </Link>
            <Link to='https://www.linkedin.com/in/shivamkumar8009/' target='_blank' className='link' >
              <p style={{color:'black',background:'whitesmoke'}} >Shivam Kumar</p>
            </Link>
            <Link to='http://www.linkedin.com/in/pranjul56667' target='_blank' className='link' >
              <p style={{color:'black',background:'whitesmoke'}} >Kumar Pranjul</p>
            </Link>
          </div>
      </div>
    </>
  )
}

export default Footer