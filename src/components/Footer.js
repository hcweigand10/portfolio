import React from 'react'
import github from '../assets/images/github.png'

export default function Footer() {
    return (
        <div className='container-footer'>
            <div className='row-footer'>
                <a className='col-4' href='https://github.com/hcweigand10' target="_blank" rel="noreferrer">
                    <div>
                        <img className="footer-img" src={github} alt="github logo"/>
                    </div>
                </a>
                <a className='col-4' href='https://www.linkedin.com/in/henryweigand/' target="_blank" rel="noreferrer">
                    <div>
                        <img className="footer-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3prr_fFyfepItejcxBiLKAHaHa%26pid%3DApi&f=1" alt="linkedin logo"/>
                    </div>
                </a>
                <a className='col-4' href='mailto:henryweigand10@gmail.com' target="_blank" rel="noreferrer">
                    <div>
                        <img className="footer-img-email" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.l9F_dUdfqGqi6ziWHreXTAHaHa%26pid%3DApi&f=1" alt="email logo"/>
                    </div>                            
                </a>
            </div>
        </div>
    )
}