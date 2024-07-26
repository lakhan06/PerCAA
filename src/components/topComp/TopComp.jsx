import './topComp.css'
import pce from '/Assets/Poornima_Logo_logo.jpg'
import ACM from '/logos/ACM_Jaipur.png' 
import ACM_chapter from '/logos/ACM_chapter.png'
// import BL  from '/Assets/bentham_logo.png'
// import IEEE from '/logos/IEE_logo.jpg'
import IET_logo from '/logos/IET_logo.png';

function TopComp() {
  return (
    <div className='topComp'>
      <div className='top'>
        <div className="top-logos">
          <img src={pce} alt="poornima university logo" className='pce_logo' />
          <img src={ACM} alt="acm chapter logo" className='acm_logo' />
        </div>
        <div className="top-head">
          {/* <div className='top-line'>International Conference on Pervasive Computing Advances and Applications</div> */}
          <div className="topmarquee">International Conference on Pervasive Computing Advances and Applications</div>
          <div className='top-line percaa'>PerCAA 2024</div>
          <div className='top-line'> 18-19 October, 2024 </div>
        </div>
        <div className="top-logos">
          <img src={ACM_chapter} alt="Springer logo" className='sp_logo' />
          <img className='IET_LOGO' src={IET_logo} alt='IET Logo'  />
        </div>
      </div>
      <div className="smallmarquee"> <div className="top-logos-marquee">
        <img src={pce} alt="poornima university logo" className='pce_logo' />
        <img src={ACM} alt="acm chapter logo" className='acm_logo' />
        <img src={ACM_chapter} alt="Springer logo" className='sp_logo' />
        <img src={IET_logo} alt='IET Logo' />
      </div></div>
    </div>
  );
}

export default TopComp;
