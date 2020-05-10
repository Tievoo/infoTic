
  
function closeNavDER() {
    document.getElementById("mySidenav").style.width = "0";
}

window.onload = function time() {

    //arrays
    let diaArr = ['Domingo ', 'Lunes ', 'Martes ', 'Miércoles ', 'Jueves ', 'Viernes ', 'Sábado ']
    let mesesArr = ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    let fecha = new this.Date();
    let diaNum = fecha.getDate();     
    let diaString = diaArr[fecha.getDay()]
    let mesString = mesesArr[fecha.getMonth()]
    let año = fecha.getFullYear();

    
    document.getElementById("hour").innerHTML = 'Fecha de hoy: ' + diaString + diaNum + ' de ' + mesString + ' de ' + año
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
var instance = M.Sidenav.getInstance(elem);

function openNavDER() {
    instance.open
    
}
