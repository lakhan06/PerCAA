import React from 'react'
import './topComp.css'
import pce from '/Assets/Poornima_Logo.jpg'
import ACM from '/logos/acmChapterLogo.png'
import MNIT from '/logos/Mnit_logo.png'
import IEEE from '/logos/IEE_logo.jpg'
import BL  from '/Assets/bentham_logo.webp'
function TopComp() {
  return (
    <div className='topComp'>
        <div className='top'>
            <div className="top-logos">
                <img src={pce} alt="poornima university logo" className='pce_logo'/>
                <img src={ACM} alt="acm chapter logo" className='acm_logo'/>
            </div>
            <div className="top-head">
                <div className='top-line'>International Conference on Pervasive Computing Advances and Applications</div>
                <div className='top-line'>PERCAA - 2024</div>
                <div className='top-line'> -- Dates -- </div>
            </div>
            <div className="top-logos">
                <img src={MNIT} alt="mnit_logo" className='mnit_logo'/>
                <img src={BL} alt='Bentham Logo'/>
            </div>
        </div>
    </div>
  )
}

export default TopComp