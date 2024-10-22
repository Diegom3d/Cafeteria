const NombreUsuario = document.getElementById("NombreUsuario");
const Contraseña = document.getElementById("Contraseña");
const UsuarioD = document.getElementById("UsuarioDelete");
const numero_tarjeta = document.getElementById("numero_tarjeta");
const cvv = document.getElementById("cvv");
const Apellido = document.getElementById("Apellido");

 
 
NombreUsuario.addEventListener('click', postClienteReg)
Contraseña.addEventListener('click', postClienteReg)
UsuarioD.addEventListener('click', postUsuarioDelete)
nombre.addEventListener('click', postPago)
numero_tarjeta.addEventListener('click', postPago)
cvv.addEventListener('click', postPago)

 
async function postClienteReg() {
  var Nombre = document.getElementById("Nombre").value;
  var Apellido = document.getElementById("Apellido").value;
  var  NombreUsuario= document.getElementById("NombreUsuario").value;
  var Contraseña = document.getElementById("Contraseña").value;
  
  var data = {
      Nombre: Nombre,
      Apellido: Apellido,
      NombreUsuario:NombreUsuario,
      Contraseña: Contraseña


  };

  try {
      const response = await fetch("http://localhost:3001/insert/ClienteReg", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });
      const result = await response.json();
      alert("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}

async function postPago() {
  var Nombre = document.getElementById("Nombre").value;
  var numero_tarjeta = document.getElementById("numero_tarjeta").value;
  var cvv= document.getElementById("cvv").value;
  var Contraseña = document.getElementById("Contraseña").value;
  
  var data = {
      Nombre: Nombre,
      numero_tarjeta:numero_tarjeta,
      Contraseña: Contraseña


  };

  try {
      const response = await fetch("http://localhost:3001/insert/Pago", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });
      const result = await response.json();
      alert("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}

async function eliminarCliente() {
  var UsuarioD = document.getElementById("UsuarioD").value;


  try {
      const response = await fetch("http://localhost:3001/delete/ClienteReg/" + UsuarioD, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          }
      });

      if (response.ok) {
          alert("Cliente eliminado exitosamente");
      } else {
          alert("Error al eliminar cliente");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("Error al eliminar cliente");
  }
}









  
 