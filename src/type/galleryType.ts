export type Gallery ={
    id?:string;
    name:string;
    description:string;
 }
 export type ImageType = {
    id?: string;
    image: any;
    photoGalleryId: string;
  };
  
  export type ImagesType = {
    original: string;
    thumbnail: string;
  };


export type addGalleryType = {
  addGalleryControler:()=>void;
  setGalleryList: React.Dispatch<React.SetStateAction<any>>;
  closeModal:()=>void;
}
