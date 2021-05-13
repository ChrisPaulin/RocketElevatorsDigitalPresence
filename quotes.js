// js selection show/hide

function showDiv(select){
    if(select.value==1) {
        document.getElementById('1').style.display = "block";
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
   } else if (select.value==2) {
        document.getElementById('1').style.display = "none";
        document.getElementById('2').style.display = "block";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
   } else if (select.value==3) {
        document.getElementById('1').style.display = "none";
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "block";
        document.getElementById('4').style.display = "none";
   }else if (select.value==4) {
        document.getElementById('1').style.display = "none";
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "block";
   }else {
        document.getElementById('1').style.display = "none";
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
        }


     //function double checked button unit price elevator and fees installation   
    }

    function CheckedButton( num){
     var btnradio = document.getElementById('p'+num);
         btnradio = document.getElementById('i'+num);
     btnradio.checked = btnradio.checked;
 }