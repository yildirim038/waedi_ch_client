export type Gallery ={
    id?:string;
    name:string;
    description:string;
 }
 export type GalleryType ={
  id:string;
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
  setImageList:React.Dispatch<React.SetStateAction<any>>;
}

export type GalleryDataType ={
  id:string;
  name:string;
  description:string;
  images:ImageType[]
  newImages:ImagesType[]

}
export type ImgType ={
  image:string,
  photoGalleryId:string
}
