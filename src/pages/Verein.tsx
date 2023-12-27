import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import './Directory.css'
const Verein: React.FC = () => {
    return (
    <div>
        <HeaderComponent/>
        <div className="row">
            <div className="directory-side-bar-container col-6 col-sm-4 col-md-3">
                <h3>Verein</h3>
                <ul>
                    <li><a href="#">Freizeit</a></li>
                    <li><a href="#">Freizeit</a></li>
                    <li><a href="#">Kultur</a></li>
                    <li><a href="#">Freizeit</a></li>
                </ul>
            </div>
            <div className="directory-text col-6 col-sm-8 col-md-9">
                    <p>Suchen Sie einen Handwerker, ein bestimmtes Geschäft oder einen Verein?
                       Brauchen Sie ein bestimmtes Produkt oder benötigen Sie eine Dienstleistung?
                       Hier finden Sie für jeden Belang die passende Lösung </p>
                    <p> Viel Spass beim Stöbern durch die Listen!</p>
            </div>
        </div>
        <Footer/>
    </div>
    
    );
};
  
  export default Verein;     