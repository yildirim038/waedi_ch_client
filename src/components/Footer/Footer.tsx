import './Footer.css'
import facebookIcon from '../../img/facebook.svg'
import twiterxIcon from '../../img/twitterx.png'
import instagram from  '../../img/instagram.png'

const Footer: React.FC = () => {
    const date = new Date ()
    const year = date.getFullYear()
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
                    <div className=" col-12  col-sm-3">
                        <div><a href="/">Startseite</a></div>
                        <div><a href="/events">Event</a></div>
                        <div><a href="/gallery">Fotogalerie</a></div>
                        <div><a href="/interviews">Interviews</a></div>
                    </div>
                    <div className=" col-12  col-sm-3">
                        <div><a href="/directory">Verzeichnisse</a></div>
                        <div><a href="/club">Vereine</a></div>    
                        <div><a href="/company">Geschäfte</a></div>
                        
                    </div>
                    <div className=" col-12  col-sm-3">
                        <div><a href="/advert">Werbung</a></div>
                        <div><a href="/market">Markt</a></div>
                        <div><a href="/kultur">Kultur</a></div>
                      
                    </div>
                    <div className=" col-12  col-sm-3">
                        <div><a href="/history">Geschichte</a></div>
                        <div><a href="/info">Info</a></div>
                        <div><a href="/contact">Kontakt</a></div>
                        <div><a href="/public">Öffentliches</a></div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div><p className="footer-text">Copyright © 2023 - {year} waedi.ch, abc4IT GmbH, Instruct AG - Impressum </p></div>
     </div>
    );
  };
  
  export default Footer;