export interface DirectoryFormState {
    id?:string,
    category:string,
    companyType:string,
    organization:string,
    adresse:string,
    plz:number,
    ort:string,
    image:any,
    website:string,
    description?:string,
    contactFirstname:string,
    contactLastname:string,
    tel?:string,
    fax?:string,
    email:string,
}

export interface AddDirectoryType {
    closeModal: () => void;
}

export interface ComponyCardProps {
    data: DirectoryFormState; 
    setComponyList: React.Dispatch<React.SetStateAction<any>>;
}
export interface ComponyCardType {
    data: DirectoryFormState; 
}

