import HeaderComponent from "../Header/HeaderComponents";
import Footer from '../Footer/Footer'
import '../../pages/Directory.css'
import { useEffect, useState } from "react";
import { DirectoryFormState } from "../../type/dataType";
import { getDirectoryData } from "../../services/directoryService";
import CompanyCard from "./CompanyCard";
import { filterList } from "../../untils/untils";

const Public: React.FC = () => {
const [directoryList, setDirectoryList] = useState <DirectoryFormState[]>([]);
const [publicList, setPublicList] = useState<DirectoryFormState[]>([]);
const [isFiltered, setIsFiltered] = useState(false);  
const typeList: string[] = [];

useEffect(()=>{
 getDirectoryData(setDirectoryList);
},[])
useEffect(() => {
    setPublicList(directoryList.filter((company) => company.category === 'facts'));
}, [directoryList]);

publicList.forEach((company) => {
    if (typeList.indexOf(company.companyType) === -1) {
      typeList.push(company.companyType);
    }
});

function isNotFiltered () {
    setIsFiltered(false)
}

return (
    <div>
        <HeaderComponent/>
        <div className="row">
            <div className="directory-side-bar-container col-12 col-sm-4 col-md-3">
                <h3>Öffentliches</h3>
                {typeList.map((data) => (
                    <li key={data}>
                        <button className="directory-side-menu-button" onClick={() => filterList(data,publicList ,setPublicList,setIsFiltered)}>{data}</button>
                    </li>
            ))}
                {!isFiltered && 
            <a className="side-menu-back" href="/directory">
            zurück Verzeichnisse
          </a>
          }:{isFiltered && 
            <a onClick={isNotFiltered} className="side-menu-back" href="/public">
            zurück Öffentliches
          </a>
          }
            </div>
            <div className="directory-text col-12 col-sm-8 col-md-9">
            <div className="row">
            {publicList.map(data => {
                return (
                        <CompanyCard key={data.id} data={data} setComponyList={setDirectoryList} />
                    )    
            })}
        </div>
            </div>
        </div>
        <Footer/>
    </div>
    
    );
};
  
export default Public;     