
export type isAuthenticated = {
    isAuthenticated: boolean;
    onLogout: () => void;
    handleSomeAction?:() => void
}
  
export interface EventFormState {
    id?:string,
    name:string,
    startdatum:string,
    enddatum:string,
    adresse:string,
    plz:number,
    ort:string,
    link:string,
    image:string
}

export type setAuthInfo = React.Dispatch<React.SetStateAction<{
    isAuthenticated: boolean;
    role: string;
}>>
