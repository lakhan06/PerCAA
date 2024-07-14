import React from 'react'
import './topComp.css'
import PU from '/logos/PULogo.png'
import ACM from '/logos/acmChapterLogo.png'
import MNIT from '/logos/Mnit_logo.png'

function TopComp() {
  return (
    <div className='topComp'>
        <div className='top'>
            <div className="top-logos">
                <img src={PU} alt="poornima university logo" />
                <img src={ACM} alt="acm chapter logo" />
            </div>
            <div className="top-head">
                <div className='top-line'>International Conference on Pervasive Computing Advances and Applications</div>
                <div className='top-line'>PERCAA - 2024</div>
                <div className='top-line'> -- Dates -- </div>
            </div>
            <div className="top-logos">
                <img src={MNIT} alt="" />
            </div>
        </div>
    </div>
  )
}

export default TopComp