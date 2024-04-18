import HeaderComponent from "../Header/HeaderComponents";
import Footer from '../Footer/Footer'
import '../../pages/Directory.css'
import { useEffect, useState } from "react";
import { DirectoryFormState } from "../../type/directoryTypes";
import { getDirectoryData } from "../../services/directoryService";
import CompanyCard from "./CompanyCard";
import { filterList } from "../../untils/untils";

const Culture: React.FC = () => {
const [directoryList, setDirectoryList] = useState <DirectoryFormState[]>([]);
const [cultureList, setCultureList] = useState<DirectoryFormState[]>([]);
const [isFiltered, setIsFiltered] = useState(false);  
const typeList: string[] = [];
const isNotFiltered = () => setIsFiltered(false)

useEffect(()=>{
 getDirectoryData(setDirectoryList);
},[])

useEffect(() => {
    setCultureList(directoryList.filter((company) => company.category === 'kultur'));
  }, [directoryList]);

cultureList.forEach((company) => {
    if (typeList.indexOf(company.companyType) === -1) typeList.push(company.companyType);
  });

return (
  <div>
    <HeaderComponent/>
    <div className="row">
      <div className="directory-side-bar-container col-12 col-sm-4 col-md-3">
        <h3>Kultur</h3>
        <ul>
          {typeList.map((data) => (
            <li key={data}>
                <button className="directory-side-menu-button" onClick={() => filterList(data,cultureList ,setCultureList,setIsFiltered)}>{data}</button>
            </li>
          ))}
        </ul>
        {!isFiltered && <a className="side-menu-back" href="/directory">zurück Verzeichnisse</a>}:
        { isFiltered && <a onClick={isNotFiltered} className="side-menu-back" href="/kultur">zurück Kultur</a>}
      </div>
      <div className="directory-text col-12 col-sm-8 col-md-9">
        <div className="row">
          {cultureList.map(data => {
            return <CompanyCard key={data.id} data={data} setComponyList={setDirectoryList} />
          })}
        </div>
      </div>
    </div>
    <Footer/>
  </div>
 );
};
export default Culture;     