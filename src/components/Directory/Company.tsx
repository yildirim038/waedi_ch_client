import HeaderComponent from "../Header/HeaderComponents";
import Footer from '../Footer/Footer'
import '../../pages/Directory.css'
import { useEffect, useState } from "react";
import { DirectoryFormState } from "../../type/directoryTypes";
import { getDirectoryData } from "../../services/directoryService";
import CompanyCard from "./CompanyCard";
import { filterList } from "../../untils/untils";

const Company: React.FC = () => {
  const [directoryList, setDirectoryList] = useState<DirectoryFormState[]>([]);
  const [companyList, setCompanyList] = useState<DirectoryFormState[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);  
  const typeList: string[] = [];
  const isNotFiltered = () => setIsFiltered(false)
  useEffect(() => {
    getDirectoryData(setDirectoryList);
  }, []);

  useEffect(() => {
    setCompanyList(directoryList.filter((company) => company.category === 'company'));
  }, [directoryList]);

  companyList.forEach((company) => {
    if (!typeList.includes(company.companyType)) typeList.push(company.companyType);
  });

  return (
    <div>
      <HeaderComponent />
      <div className="row">
        <div className="directory-side-bar-container col-12 col-sm-4 col-md-3">
          <h3>Geschäfte</h3>
          <ul>
            {typeList.map((data) => (
              <li key={data}>
                <button className="directory-side-menu-button" onClick={() => filterList(data,companyList ,setCompanyList,setIsFiltered)}>{data}</button>
              </li>
            ))}
          </ul>
          {!isFiltered && <a className="side-menu-back" href="/directory">zurück Verzeichnisse</a>}:
          { isFiltered && <a className="side-menu-back" href="/company" onClick={isNotFiltered}>zurück Geschäfte</a>}
        </div>
        <div className="directory-text col-12 col-sm-8 col-md-9">
          <div className="row">
            {companyList.map((data) => (
              <CompanyCard key={data.id} data={data} setComponyList={setDirectoryList} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;
