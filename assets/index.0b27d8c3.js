(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const d={template:`
    <h1>Administraci\xF3n de incidencias<h1>
    <h2>Tickets pendientes</h2>
    
    <table class="table table-dark">
    <thead>
        <tr>
        <th scope="col">Codigo</th>
        <th scope="col">Fecha</th>
        <th scope="col">Aula</th>
        <th scope="col">Grupo</th>
        <th scope="col">Ordenador</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Alumno</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">123459</th>
        <td>18/04/2023</td>
        <td>T6</td>
        <td>DAW1</td>
        <td>PC3</td>
        <td>Error de impresora</td>
        <td>Ana Martinez</td>
        <td><button type="button" class="btn btn-success">Resolver</button></td>
        <td><button type="button" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        <tr>
        <th scope="row">123460</th>
        <td>19/04/2023</td>
        <td>T8</td>
        <td>DAW2</td>
        <td>PC 4</td>
        <td>problema de acceso a archivos</td>
        <td>Ana Martinez</td>
        <td><button type="button" class="btn btn-success">Resolver</button></td>
        <td><button type="button" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        <tr>
        <th scope="row">123461</th>
        <td>20/04/2023</td>
        <td>T6</td>
        <td>DAW1</td>
        <td>PC 1</td>
        <td>Aplicacion se cierra inesperadamente</td>
        <td>Sofia Fernandez</td>
        <td><button type="button" class="btn btn-success">Resolver</button></td>
        <td><button type="button" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        <tr>
        <th scope="row">123462</th>
        <td>19/04/2023</td>
        <td>T8</td>
        <td>DAW2</td>
        <td>PC 4</td>
        <td>problema de acceso a archivos</td>
        <td>Ana Martinez</td>
        <td><button type="button" class="btn btn-success">Resolver</button></td>
        <td><button type="button" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        <tr>
        <th scope="row">123463</th>
        <td>21/04/2023</td>
        <td>T7</td>
        <td>DAW2</td>
        <td>PC 2</td>
        <td>Problema de conexi\xF3n a la red</td>
        <td>Luis Torres</td>
        <td><button type="button" class="btn btn-success">Resolver</button></td>
        <td><button type="button" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        <tr>
        <th scope="row">123460</th>
        <td>19/04/2023</td>
        <td>T8</td>
        <td>DAW2</td>
        <td>PC 4</td>
        <td>problema de acceso a archivos</td>
        <td>Ana Martinez</td>
        <td><button type="button" class="btn btn-success">Resolver</button></td>
        <td><button type="button" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        <tr>
        <th scope="row">123463</th>
        <td>22/04/2023</td>
        <td>T8</td>
        <td>DAW1</td>
        <td>PC 3</td>
        <td>Archivos corruptos</td>
        <td>Carolina Ram\xEDrez</td>
        <td><button type="button" class="btn btn-success">Resolver</button></td>
        <td><button type="button" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    </tbody>
    </table>

    
    <h2 class="mt-5">Tickets Resueltos</h2>
    
    <table class="table table-dark">
    <thead>
        <tr>
        <th scope="col">Codigo</th>
        <th scope="col">Fecha</th>
        <th scope="col">Fecha Resuelto</th>
        <th scope="col">Aula</th>
        <th scope="col">Grupo</th>
        <th scope="col">Ordenador</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Alumno</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">123457</th>
        <td>16/04/2023</td>
        <td>15/04/2023</td>
        <td>T7</td>
        <td>DAW2</td>
        <td>PC1</td>
        <td>Problema de conexi\xF3n</td>
        <td>Maria Lopez</td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        <tr>
        <th scope="row">123458</th>
        <td>17/04/2023</td>
        <td>15/04/2023</td>
        <td>T8</td>
        <td>DAW1</td>
        <td>PC 2</td>
        <td>pantalla en blanco</td>
        <td>Juan Rodriguez</td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        <tr>
        <th scope="row">123459</th>
        <td>18/04/2023</td>
        <td>15/04/2023</td>
        <td>T8</td>
        <td>DAW1</td>
        <td>PC 3</td>
        <td>Error de impresora</td>
        <td>Ana Martinez</td>
        <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-comment"></i></button></td>
        <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    </tbody>
    </table>
            
    `,script:()=>{console.log("Hola panel")}},r={template:`
  <div class="pt-5">
    <h1 class="w-100 text-center">Registro</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">User: </label>
      <input type="text" class="form-control"">

      <label for="pass" class="mt-2 form-label">Contrase\xF1a: </label>
      <input type="text" class="form-control">

      <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
    </form>
  </div>
  `,script:()=>{console.log("Hola registro")}},l={template:`
    <div class="pt-5">
      <h1 class="w-100 text-center">Login</h1>
      <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
        <label for="email" class="mt-2 form-label">User: </label>
        <input type="text" class="form-control">
  
        <label for="pass" class="mt-2 form-label">Contrase\xF1a: </label>
        <input type="text" class="form-control">
  
        <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
      </form>
    </div>
    `,script:()=>{console.log("Hola Login")}},s={panel:()=>{document.querySelector("main").innerHTML=d.template,d.script()},login:()=>{document.querySelector("main").innerHTML=l.template,l.script()},registro:()=>{document.querySelector("main").innerHTML=r.template,r.script()}},c={template:`
    <header>
      <nav class="navbar navbar-dark ">
        <div class="container-fluid">
          <a class="navbar-brand">Gesti\xF3n de incidencias FPLLEFIA</a>
          <div>
            <button id="panel" class="btn btn-secondary ms-2">PANEL</button>
            <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
            <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
          </div>
        </div>
      </nav>
    </header>
    `,script:()=>{console.log("Hola soy el header"),document.querySelector("#panel").addEventListener("click",()=>{console.log("click en panel"),s.panel()}),document.querySelector("#login").addEventListener("click",()=>{console.log("click en login"),s.login()}),document.querySelector("#registro").addEventListener("click",()=>{console.log("click en registro"),s.registro()})}};document.querySelector("header").innerHTML=c.template;c.script();
