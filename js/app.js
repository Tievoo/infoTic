window.onLoad = function time() {
  let date = new this.Date()
  var datestr = str(date.getDate())
  document.getElementById("hour").innerHTML = datestr
}
function dengue_hover(){
    $("#snimg2").addClass('shown').removeClass('hidden')
    $("#snimg1").addClass('hidden').removeClass('shown')
  }
  function backtonormdng(){
    $("#snimg1").addClass('shown').removeClass('hidden')
    $("#snimg2").addClass('hidden').removeClass('shown')
  }
  function esi_hover(){
    $("#snimg3").addClass('shown').removeClass('hidden')
    $("#snimg1").addClass('hidden').removeClass('shown')
  }
  function backtonormesi(){
    $("#snimg1").addClass('shown').removeClass('hidden')
    $("#snimg3").addClass('hidden').removeClass('shown')
  }
  function crn_hover(){
    $("#snimg4").addClass('shown').removeClass('hidden')
    $("#snimg1").addClass('hidden').removeClass('shown')
  }
  function backtonormcrn(){
    $("#snimg1").addClass('shown').removeClass('hidden')
    $("#snimg4").addClass('hidden').removeClass('shown')
  }
  function cam_hover(){
    $("#snimg5").addClass('shown').removeClass('hidden')
    $("#snimg1").addClass('hidden').removeClass('shown')
  }
  function backtonormcam(){
    $("#snimg1").addClass('shown').removeClass('hidden')
    $("#snimg5").addClass('hidden').removeClass('shown')
  }
  
$(document).ready(function(){
    $('.sidenav').sidenav({

        edge: 'right',
        outDuration: 250,
    });
});

