export const registro =  {
  template: `
  <div class="pt-5">
    <h1 class="w-100 text-center">Registro</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">User: </label>
      <input type="text" class="form-control"">

      <label for="pass" class="mt-2 form-label">Contraseña: </label>
      <input type="text" class="form-control">

      <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
    </form>
  </div>
  `,
  script: ()=>{
    console.log('Hola registro');
  }
}