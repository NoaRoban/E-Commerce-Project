import React from 'react'
import './Root.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import root_img from '../Assets/hero_image.png'
function Root() {
  return (
    <div className='root'>
        <div className="root-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className='root-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} hlt="hand-icon" />
                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div className="root-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arow-icon" />
            </div>
        </div>
        <div className="root-right">
            <img src={root_img} alt="root-img" />
        </div>
    </div>
  )
}

export default Root