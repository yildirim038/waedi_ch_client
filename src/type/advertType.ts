export type AdvertType = {
  id:string
  name: string;
  email: string;
  publish: boolean;
  adresse: string;
  plz: number;
  ort: string;
  image: any;
  link: string;
 };
 
export type AdvertUpdateType = {
  id: string;
  name: string;
  email: string;
  publish: boolean;
  adresse: string;
  plz: number;
  ort: string;
  image: any;
  link: string;
  advertPage: string;
  advertType: string;
  };

export type AddAdvertType = {
  closeModal:() => void;
  setAdvertData:React.Dispatch<React.SetStateAction<any>>
}

export type AdvertCardType = {
  advertData :AdvertType[]; 
  setAdvertData:React.Dispatch<React.SetStateAction<any>>;
  setIsModalUpdateOpen:React.Dispatch<React.SetStateAction<boolean>>
  setClickId:React.Dispatch<React.SetStateAction<string>>
};

export type UpdateAdvertType = {
  clickId: string;
  closeModal: () => void;
  setAdvertData: React.Dispatch<React.SetStateAction<any>>;
  returnAllAdvert: () => void;
};