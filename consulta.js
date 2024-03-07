const listapagos= function (Rut, Razónsocial){
    this.Rut= Rut
    this.Razónsocial=Razónsocial
    }
let prov1 = new listapagos (123, "Bioterra")
let prov2 = new listapagos (124, "Sudel")
let prov3 = new listapagos (125, "Granelur")
let prov4 = new listapagos (126, "Ijasa")
let prov5 = new listapagos (127, "Tor")

let lista = [prov1,prov2,prov3,prov4,prov5];

const Buscar = document.getElementById ("buscar");
const mostrarbusqueda= document.querySelector("#mostrarbusqueda");

Buscar.addEventListener("click", function(){

    const result1 = document.getElementById("ingrut").value;        
        const pagoencontrado = lista.find(item => item.Rut === parseInt(result1));
        if( result1 === "") {
            Swal.fire({
                icon: "No ingresaste el rut",
                title: "Favor, Ingrese el Rut",
                text: "Recuerde que su extención es de 12 digitos",//en este caso solo puse tres numeros como ejemplo, pero aca el rut tiene 12 digitos.
                
            });         
            return;
        }
    
        
        
if (pagoencontrado) {
            const pagoviernes = document.createElement("div");
            
            pagoviernes.innerHTML =`<p>${pagoencontrado.Razónsocial} puede pasar el viernes desde 8:30 a 12:00</p>`;
            mostrarbusqueda.appendChild(pagoviernes);

         localStorage.setItem(pagoencontrado,JSON.stringify(result1));
            
            console.log(pagoencontrado);
            result1=JSON.localStorage.getItem("lista")
            console.log(typeof(result1))

            
            return pagoencontrado;  } else {
            Swal.fire("No se encontró pago para esta semana, vuelva a consultar la semana que viente");
            
            }
           
            
           
    

});        
 
  
   




