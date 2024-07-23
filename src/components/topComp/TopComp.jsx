import React from 'react'
import './topComp.css'
import pce from '/Assets/Poornima_Logo.png'
import ACM from '/logos/acmChapterLogo.png'
import SP from '/logos/Springer_logo.png'
import BL  from '/Assets/bentham_logo.png'
// import IEEE from '/logos/IEE_logo.jpg'
function TopComp() {
  return (
    <div className='topComp'>
    <div className="topmarquee" scrollamount="10">International Conference on Pervasive Computing Advances and Applications</div>
        <div className='top'>
            <div className="top-logos">
                <img src={pce} alt="poornima university logo" className='pce_logo'/>
                <img src={ACM} alt="acm chapter logo" className='acm_logo'/>
            </div>
            <div className="top-head">
                {/* <div className='top-line'>International Conference on Pervasive Computing Advances and Applications</div> */}
                <div className='top-line percaa'>PerCAA 2024</div>
                <div className='top-line'> -- Dates -- </div>
            </div>
            <div className="top-logos">
            <img src={SP} alt="Springer logo" className='sp_logo'/>
            <img src={BL} alt='Bentham Logo'/>
            </div>
        </div>
        <div className="smallmarquee" scrollamount="10"> <div className="top-logos-marquee">
                <img src={pce} alt="poornima university logo" className='pce_logo'/>
                <img src={ACM} alt="acm chapter logo" className='acm_logo'/>
              <img src={SP} alt="Springer logo" className='sp_logo'/>
                <img src={BL} alt='Bentham Logo'/>
            </div></div>
    </div>
  )
}

export default TopComp