import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const discordInviteLink = 'https://discord.gg/eeCgjAzS';

  const handleDiscordJoin = () => {
    window.location.href = discordInviteLink;
  };

  return (
    <div className='footer'>
      <div style={{ color: 'black', background: 'whitesmoke' }}>
        <p style={{ color: 'black', background: 'whitesmoke' }}>Made with ❤</p>
        <p style={{ color: 'black', background: 'whitesmoke' }}>© 2023 goTravel.</p>
      </div>
      <div style={{ color: 'black', background: 'whitesmoke' }}>
        <p style={{ fontWeight: 'bold', color: 'black', background: 'whitesmoke' }}>goTravel</p>
        <br />
        <Link to='/terms' className='link'>
          <p style={{ color: 'black', background: 'whitesmoke' }}>Terms</p>
        </Link>
        <Link to='/privacypolicy' className='link'>
          <p style={{ color: 'black', background: 'whitesmoke' }}>Privacy policy</p>
        </Link>
        <Link to='/copyright' className='link'>
          <p style={{ color: 'black', background: 'whitesmoke' }}>Copyright</p>
        </Link>
      </div>
      <button classsName="footer-btn" onClick={handleDiscordJoin}>
        Join Discord Server
      </button>
      <div style={{ color: 'black', background: 'whitesmoke' }}>
        <p style={{ fontWeight: 'bold', color: 'black', background: 'whitesmoke' }}>Contributers</p>
        <br />
        <a href='https://www.linkedin.com/in/prince-rawattt/' target='_blank' rel='noopener noreferrer' className='link'>
          <p style={{ color: 'black', background: 'whitesmoke' }}>Prince Rawat</p>
        </a>
        <a href='https://www.linkedin.com/in/shivamkumar8009/' target='_blank' rel='noopener noreferrer' className='link'>
          <p style={{ color: 'black', background: 'whitesmoke' }}>Shivam Kumar</p>
        </a>
        <a href='http://www.linkedin.com/in/pranjul56667' target='_blank' rel='noopener noreferrer' className='link'>
          <p style={{ color: 'black', background: 'whitesmoke' }}>Kumar Pranjul</p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
