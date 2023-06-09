import { panel } from "./Panel";
import { registro } from "./Registro";
import { login } from "./Login";

export const router = {
    panel:()=>{
        document.querySelector('main').innerHTML = panel.template;
        panel.script()
    },
    login:()=>{
        document.querySelector('main').innerHTML = login.template;
        login.script()
    },
    registro:()=>{
       
        document.querySelector('main').innerHTML = registro.template;
        registro.script()
    }
   
}