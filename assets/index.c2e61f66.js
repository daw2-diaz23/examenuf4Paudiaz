(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s={template:`
    <header>
      <nav class="navbar navbar-dark ">
        <div class="container-fluid">
          <a class="navbar-brand">Gesti\xF3n de incidencias FPLLEFIA</a>
          <div>
            <button class="btn btn-secondary ms-2">PANEL</button>
            <button class="btn btn-secondary ms-2">LOGIN</button>
            <button class="btn btn-secondary ms-2">REGISTRO</button>
          </div>
        </div>
      </nav>
    </header>
    `,script:()=>{console.log("Hola HEADER")}};document.querySelector("header").innerHTML=s.template;s.script();
