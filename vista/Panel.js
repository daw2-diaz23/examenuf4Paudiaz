export const panel = {
    template: `
    <h1>Administración de incidencias<h1>
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
        <td>Problema de conexión a la red</td>
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
        <td>Carolina Ramírez</td>
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
        <td>Problema de conexión</td>
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
            
    ` ,

    script: ()=>{
        console.log('Hola panel');
      }
   
  }