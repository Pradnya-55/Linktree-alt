import React from 'react'
import './Linkcard.css'

import ImgTwitter from './../img/img-twitter.png'

function Linkcard() {
    return(
        <div className="link-card">
            <div className="container-link-handle">
             <div>
                 <img src={ImgTwitter} className="card-img"/>
             </div>
              <div>
                 <span>Twitter Handle</span>
              </div>

            
            </div>
        </div>
    )

}

export default Linkcard