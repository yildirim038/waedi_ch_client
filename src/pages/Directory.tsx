import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'

const Directory: React.FC = () => {
    return (
    <div>
        <HeaderComponent/>
        <div className="row">
            <div className="col-6 col-sm-4 col-md-2">
                <ul>
                    <li>Verein</li>
                    <li>Geschäfte</li>
                    <li>Kultur</li>
                    <li>Öffentliches</li>
                </ul>
            </div>
            <div className="col-6 col-sm-8 col-md-10">
                    <p>Eklerung</p>
            </div>
        </div>
        <Footer/>
    </div>
    
    );
};
  
  export default Directory;     