function agregaElementoLista(arr) {
   //obtenemos el valor del campo de la tarea
   let listas=document.getElementById("lista").value;

   //validamos que el valor no sea vacio
    if(listas ===""){
        alert("porfavor, ingrese un elemento");
        return;
    }
 // crear elemento en la lista 
 let nuevoElemto=document.createElement("li");
 nuevoElemto.textContent=listas + "  ";

 //crear boton eliminar
 let botonEliminar=document.createElement("button");
 botonEliminar.textContent="Eliminar";
 botonEliminar.onclick=function(){nuevoElemto.remove();}

 //agregar boton de eliminar al elemento de la lista 
 nuevoElemto.appendChild(botonEliminar);
  
 //agregar elemento/ la tarea a la lista
 document.getElementById("listaElemento").appendChild(nuevoElemto);

 //limpiar cuadro de texto del nombre de la tarea
 document.getElementById("lista").value="";


    
}