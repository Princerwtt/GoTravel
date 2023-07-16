import React from 'react'
import './style.css'
// import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';


function Copyright() {
  return (
    <>
        <div style={{margin:'2rem', fontFamily:'sans-serif'}} >
            <div>
                <h1>gotravel (Travelchime Inc.) Copyright Policy</h1>
                <p>Our Copyright Policy specifies how copyright holders and their authorized agents can request for content to be removed, as well as the consequences to users who upload such content to Wanderlog.</p>
            </div>
            <div>
              <h1>Digital Millennium Copyright Act (DMCA) Notice</h1>
              <p>Travelchime Inc. (Wanderlog) respects the intellectual property, including copyrights and trademarks, of content creators. We expect our users to do so too and exercise caution to make sure they are not infringing on the rights of others. As a service provider under the Digital Millennium Copyright Act (“DMCA”), we will promptly remove allegedly infringing content when properly notified. We will also terminate the accounts and use technical measures to prevent repeat offenders from accessing and using our services.</p>
            </div>
            <div>
              <h1>DMCA Takedown Notice and Process</h1>
              <p>To ensure that your notice is processed quickly, please follow the following procedures:</p>
              <p style={{margin:'0 1rem'}} > 1. File a notice, ideally by email to dmca@wanderlog.com, or alternatively by mail to our Copyright Agent (see below).</p>
              <p style={{margin:'0 1rem'}} > 2. Include in the notice:</p>
              <p style={{margin:'0 3rem'}} >Your name, address, telephone number, and email address (if any). <br />A description of the allegedly infringed copyrighted work. <br />A description (ideally, a URL) of where on Wanderlog’s service we may find the potentially infringing material. <br />A statement of good faith belief that the use of the copyrighted work is not authorized by the copyright owner, its agent, or the law. <br />A statement that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf, under penalty of perjury. <br />An electronic or physical signature.</p>
              <p>We may disclose notices with affected users and third-party databases such as the Lumen Database.</p>
            </div>
            <div>
              <h1>DMCA Counter-Notifications</h1>
              <p>If you are a Wanderlog user and would like to dispute and reverse the removal of your contributions due to an earlier DMCA takedown notice, you must:</p>
              <p> 1. File a counter-notice, ideally by email to dmca@wanderlog.com, or alternatively by mail to our Copyright Agent (see below).</p>
              <p> 2. Include in the notice:</p>
              <p style={{margin:'0 3rem'}} >Your name, address, telephone number, and email address (if any). <br />A description (ideally, a URL) of where on Wanderlog’s service we may find the removed material, and if possible, a copy of the original material. <br />A statement of your good faith belief that the material was removed or disabled as a result of mistake or misidentification, under penalty of perjury. <br />A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside of the United States, the United States District Court for the Northern District of California, and that you will accept service of process from the person who filed the original DMCA notice or an agent of that person. <br />An electronic or physical signature.</p>
              <p>Pursuant to the DMCA, we will forward any complete counter-notification to the person who filed the original DMCA notice. The copyright owner and its agents may then choose to file a lawsuit against you for copyright infringement. If we do not receive notice that such a lawsuit has been filed within 10 business days after we provide notice of your counter-notification to the copyright owner or their agent, we may restore the challenged materials. Until that time, your materials will remain removed.</p>
            </div>
            <div>
              <h3>Copyright Agent</h3>
              <p>For the fastest processing, we recommend you send notices and counter-notices by email to dmca@wanderlog.com: they will be processed the more quickly, and you do not necessarily need to also send a notice by mail.</p>
              <p>If you would strongly prefer to send it by mail, you can send it to:</p>
              <p>Travelchime Inc. <br />Attn: Legal – Copyright Agent <br /> C42,Awas Vikas Colony, <br /> Unnao. 209801 </p>
            </div>
            <div>
              <h1>Bans for Repeat Infringers</h1>
              <p>If we find that content uploaded by the same user has repeatedly caused us to receive DMCA notices, we will delete the user's account and restrict their access to Wanderlog using technological measures.</p>
            </div>
        </div>
        <br/>
      <hr className='hr-tag' />
      <br/>
      <Footer/>
    </>
  )
}

export default Copyright