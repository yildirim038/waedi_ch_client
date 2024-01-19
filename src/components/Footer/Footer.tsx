import './Footer.css'
import facebookIcon from '../../img/facebook.svg'
import twiterxIcon from '../../img/twitterx.png'
import instagram from  '../../img/instagram.png'

const Footer: React.FC = () => {
    return (
     <div className="footer-container">
        <div className="row">
            <div className="footer-sozial-media-container col-12 col-sm-6 col-md-4">
                <div>waedi_ch</div>
                <div>
                  <a href="https://www.facebook.com/"><img className='sozial-media-icon' src={facebookIcon} alt="facebook" /></a>
                  <a href="https://twitter.com/"><img className='sozial-media-icon' src={twiterxIcon} alt="twitterx" /></a>
                  <a href="https://www.instagram.com/"><img className='sozial-media-icon' src={instagram} alt="twitterx" /></a>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-8">
                <div className="row">
                    <div className=" col-12  col-sm-6">
                        <div><a href="/">Startseite</a></div>
                        <div><a href="/events">Event</a></div>
                        <div><a href="/galerie">Fotogalerie</a></div>
                        <div><a href="/interviews">Interviews</a></div>
                    </div>
                    <div className=" col-12  col-sm-6 ">
                        <div><a href="/directory">Verzeichnisse</a></div>
                        <div>Vereine</div>
                        <div>Kultur</div>
                        <div>Öffentliches</div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div><p className="footer-text">Copyright © 2023 waedi.ch, abc4IT GmbH, Instruct AG - Impressum </p></div>
     </div>
    );
  };
  
  export default Footer;