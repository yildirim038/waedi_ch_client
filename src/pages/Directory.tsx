import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import './Directory.css'
import AddDirectory from "../components/Directory/AddDirectory";
import CompanyCard from "../components/Directory/CompanyCard";
import { getDirectoryData } from "../services/directoryService";
import { useEffect, useState } from "react";
import { DirectoryFormState } from "../type/dataType";
const Directory: React.FC = () => {
  const [allDirectory, setAllDirectory] = useState <DirectoryFormState[]>([]);
  useEffect(()=>{
    getDirectoryData(setAllDirectory)
  },[])
    
    
    return (
    <div>
        <HeaderComponent/>
        <div className="row">
            <div className="directory-side-bar-container col-6 col-sm-4 col-md-3">
                <h3>Verzeichnisse</h3>
                <ul>
                    <li><a href="/verein">Verein</a></li>
                    <li><a href="/geschäfte">Geschäfte</a></li>
                    <li><a href="/kultur">Kultur</a></li>
                    <li><a href="/offentliches">Öffentliches</a></li>
                </ul>
            </div>
            <div className="directory-text col-6 col-sm-8 col-md-9">
                    <p>Suchen Sie einen Handwerker, ein bestimmtes Geschäft oder einen Verein?
                       Brauchen Sie ein bestimmtes Produkt oder benötigen Sie eine Dienstleistung?
                       Hier finden Sie für jeden Belang die passende Lösung </p>
                    <p> Viel Spass beim Stöbern durch die Listen!</p>
            </div>
        </div>
        <AddDirectory/>
        <div className="row">
        {allDirectory.map(data => {
            return(
              
      <CompanyCard data={data} setComponyList={setAllDirectory} />
           
          
            )
              
        })}
        </div>
        <Footer/>
    </div>
    
    );
};
  
  export default Directory;     