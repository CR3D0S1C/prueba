        window.addEventListener("load",inicio);
        function inicio(){
            document.getElementById("ampliar").onclick=function(){  
                if(document.getElementById("opciones").style.display=="none" ){ 
                    document.getElementById("opciones").style.display="block";
                }else { 
                    document.getElementById("opciones").style.display="none";
                }
            }   

            window.addEventListener('resize', function(e){
              if (window.innerWidth > 800){
                document.getElementById("forma").style.display="block"
              }
              
            })
        }
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
  
  document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hmensaje enviado!");
  });
})
