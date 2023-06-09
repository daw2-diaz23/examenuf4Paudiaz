
import { router } from "./router";
export const header = {
    template: `
    <header>
      <nav class="navbar navbar-dark ">
        <div class="container-fluid">
          <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
          <div>
            <button id="panel" class="btn btn-secondary ms-2">PANEL</button>
            <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
            <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
          </div>
        </div>
      </nav>
    </header>
    `,
    script: ()=>{
      console.log('Hola soy el header')
      document.querySelector('#panel').addEventListener('click', ()=>{
          console.log('click en panel')
          router.panel()
      });
      document.querySelector('#login').addEventListener('click', ()=>{
          console.log('click en login')
          router.login()
      });
      document.querySelector('#registro').addEventListener('click', ()=>{
          console.log('click en registro')
          router.registro()
      });
  }
}