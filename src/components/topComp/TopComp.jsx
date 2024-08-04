import './topComp.css'
import pce from '/img/Poornima_Logo_logo.jpg'
import ACM from '/logos/ACM_Jaipur.png' 
import ACM_chapter from '/logos/ACM_chapter.png'
import IET_logo from '/logos/IET_logo.png';
import spocus_LOGO from '/logos/spocus.png'
import acm from "/logos/acm_logo.png"
function TopComp() {
  return (
    <div className='topComp'>
      <div className='top'>
        <div className="top-logos">
          <img src={pce} alt="poornima university logo" className='pce_logo' />
          <img src={acm} alt="acm chapter logo" className='acm_logo' />
        </div>
        <div className="top-head">
          {/* <div className='top-line'>International Conference on Pervasive Computing Advances and Applications</div> */}
          <div className="topmarquee">International Conference on Pervasive Computing Advances and Applications</div>
          <div className='top-line percaa'>PerCAA 2024</div>
          <div className='top-line'> 18-19 October, 2024 </div>
        </div>
        <div className="top-logos">
          {/* <img src={acm} alt="Poornima College Of Engineering" className='sp_logo' /> */}
          <img className='IET_LOGO' src={IET_logo} alt='IET Logo'  />
          <img className='spocus_LOGO' src={spocus_LOGO} alt='spocus_LOGO'  />
        </div>
      </div>
      <div className="smallmarquee"> <div className="top-logos-marquee">
      <img src={pce} alt="poornima university logo" className='pce_logo' />
      <img src={acm} alt="acm chapter logo" className='acm_logo' />
        <img src={IET_logo} alt='IET Logo' />
        <img className='spocus_LOGO' src={spocus_LOGO} alt='spocus_LOGO'  />
      </div></div>
    </div>
  );
}

export default TopComp;
