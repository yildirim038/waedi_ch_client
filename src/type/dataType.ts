
export type isAuthenticated = {
    isAuthenticated: boolean;
    openModal: () => void;
    closeModal: () => void;
    onLogout: () => void;
    isModalOpen:boolean;
    handleSomeAction?:() => void
}
  
export interface EventFormState {
    id?:string,
    eventType:string,
    name:string,
    startdatum:string,
    enddatum:string,
    adresse:string,
    plz:number,
    ort:string,
    link:string,
    image:any,
    text:string
}


export type setAuthInfo = React.Dispatch<React.SetStateAction<{
    isAuthenticated: boolean;
    role: string;
}>>
