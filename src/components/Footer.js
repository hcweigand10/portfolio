import React from 'react'
import email from '../assets/images/email2.png'
import github from '../assets/images/github2.png'
import linkedin from '../assets/images/linkedin4.png'


export default function Footer() {
    return (
        <div className='container-footer'>
            <div className='row-footer'>
                <a className='' href='https://github.com/hcweigand10' target="_blank" rel="noreferrer">
                    <div>
                        <img className="footer-img" src={github} alt="github logo"/>
                    </div>
                </a>
                <a className='' href='https://www.linkedin.com/in/henryweigand/' target="_blank" rel="noreferrer">
                    <div>
                        <img className="footer-img" src={email} alt="linkedin logo"/>
                    </div>
                </a>
                <a className='' href='mailto:henryweigand10@gmail.com' target="_blank" rel="noreferrer">
                    <div>
                        <img className="footer-img" src={linkedin} alt="email logo"/>
                    </div>                            
                </a>
            </div>
        </div>
    )
}