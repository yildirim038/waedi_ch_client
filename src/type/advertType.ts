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