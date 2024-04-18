export type ProductType = {
    id: string,
    name:string,
    email:string,
    category:string,
    info:string;
    seller:string;
    tel:string;
    image:any;
    weight:number;
    preis:number | string;
}

export type ProductCardProps = {
    data:any;
    setProductData:React.Dispatch<React.SetStateAction<any>>
    setUpdateIsModalOpen:React.Dispatch<React.SetStateAction<any>>
    setClickProduct:React.Dispatch<React.SetStateAction<any>>
}

export type AddProductType = {
    closeModal:() => void;
    setProductData:React.Dispatch<React.SetStateAction<any>>
}

export type ProductListProps = {
    data:any
    closeModal: () => void 
    setProductData:React.Dispatch<React.SetStateAction<any>>
    setUpdateIsModalOpen:React.Dispatch<React.SetStateAction<any>>
    setClickProduct:React.Dispatch<React.SetStateAction<any>>
}

export type UpdateProductType = {
    closeModal : () => void;
    setProductData:React.Dispatch<React.SetStateAction<any>>
    clickProduct: any;
}