'use strict';

 let notas = [];

class notaAlumno{
    constructor(carnet,nombre,nota){
        this.carnet = carnet;
        this.nombre = nombre;
        this.nota = nota;
    }
    
}

function validateFields(){
    if (document.getElementById('carnet').value==""){
        alert('debe ingresar el carnet');
        return false;
    }

    if (document.getElementById('nombre').value==""){
        alert('debe ingresar el nombre');
        return false;
    }
    if (document.getElementById('nota').value==""){
        alert('debe ingresar la nota');
        return false;
    }

    return true;
}


/// poblar arreglo
function addRecord(){

    let carnet = document.getElementById('carnet').value;
    let nombre = document.getElementById('nombre').value;
    let nota = document.getElementById('nota').value;

    notas.push( new notaAlumno(carnet,nombre,nota));
}

function showData(){

    let rows = "";
    for(let index = 0; index < notas.length; index++){

        rows += '<tr>'
        rows += '<td>' + notas[index].carnet +'</td>'
        rows += '<td>' + notas[index].nombre +'</td>'
        rows += '<td>' + notas[index].nota +'</td>'
        rows += '</tr>'
    }

    document.getElementById('listado').innerHTML = rows;

 
}

function addData(){

    if(validateFields()== false){
        return;
    }

     // poblar arreglo
     addRecord();
     // mostrar datos
     showData();



}


 