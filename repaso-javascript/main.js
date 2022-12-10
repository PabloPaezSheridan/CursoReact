var nombres = ["pablo", "santiago"]

/*
function MostrarNumerosYNombre(iteraciones,nombre)
{
    
    var result = `<h4>Mi nombre es: ${nombre}</h4>`
    for(var i=0; i <= iteraciones; i++)
    {
        result += `<p> Estoy en el numero ${i}</p>`
    }
    return result
}

var datos = document.getElementById("datos"); 

datos.innerHTML = MostrarNumerosYNombre(6,nombre);
*/

nombres.forEach(function(nombre){
    document.write(nombre+ '</br>');
})

var alumno = {
    nombre: "Pablo",
    edad: 15
}

document.write("<h1>"+alumno.nombre+"</h1>")
