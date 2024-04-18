import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import { token } from "../untils/untils";
import { useEffect, useState } from "react";
import { getProductData } from "../services/marketService";
import ProductList from "../components/Market/ProductList";
import AddProduct from "../components/Market/AddProduct";
import plusIcon from '../img/plus-svgrepo-com 1.png';
import { ProductType } from "../type/productType";
import UpdateProduct from "../components/Market/UpdateProduct";



const Market: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickProduct, setClickProduct] = useState({});
    const [isUpdateModalOpen, setUpdateIsModalOpen] = useState(false);
    const role = JSON.parse(token).role;
    const openModal = () =>  setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    const closeUpdateModal = () => setUpdateIsModalOpen(false)

    useEffect(() => {
        getProductData(setProducts);
    },[])    

    return (
        <>
            {!isModalOpen &&  !isUpdateModalOpen && (
                <div >  
                    <HeaderComponent/>
                    <div className="market-container">
                        <div className="row">
                            {products.map( (product,index) => {
                            return <ProductList key={index} data={product} setProductData={setProducts} setUpdateIsModalOpen={setUpdateIsModalOpen} setClickProduct={setClickProduct}/>
                            })}
                        </div>
                    </div>
                    {role? 
                        (<div><button onClick={openModal} className="event-plus-icon"><img src={plusIcon} alt="add Event" /></button></div> ):
                        (<h3 className="text-center">Um ein Produkt hinzuzufügen, melden Sie sich an oder registrieren Sie sich <a href="/register">hier.</a></h3>)
                    } 
                    <Footer/>
                </div>
            )}   
            {isModalOpen &&(
                <AddProduct closeModal={closeModal} setProductData={setProducts}/>
            )
            }
            {isUpdateModalOpen &&(
                <UpdateProduct closeModal={closeUpdateModal} setProductData={setProducts} clickProduct={clickProduct}/>
            )
            }
        </>
    );
}; 
export default Market;     