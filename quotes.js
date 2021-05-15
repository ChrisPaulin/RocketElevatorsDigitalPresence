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
    };
  
function quotecalculate () {

  console.log("test")
        var form_select = document.getElementById("building-type-select");
        var unitePrice;
        var percentage;
        if (document.getElementById('standard-option').checked) {
          unitePrice = 7565
          percentage = 0.1
        } else if (document.getElementById('premium-option').checked) {
          unitePrice = 12345
          percentage = 0.13
        } else if(document.getElementById('excelium-option').checked) {
          unitePrice = 15400
          percentage = 0.16 
        }
        if (form_select.value==1) {
          var numberOfAppartements = document.getElementById('number-of-appartments-r').value;
          var numberOfFloors = document.getElementById('number-of-floors-r').value;
          var averageAppPerFloor = Math.ceil(numberOfAppartements/numberOfFloors);
          var doorForApp = Math.ceil(averageAppPerFloor/6);
          var columnFloorRatio = Math.ceil(numberOfFloors/20);
          var numberOfElevatorRequired =  doorForApp * columnFloorRatio;
          var totalPriceOfElevators = numberOfElevatorRequired * unitePrice;
          var installationFee = totalPriceOfElevators * percentage;
          var total = totalPriceOfElevators + installationFee;
        } else if (form_select.value==2){
          var numberOfElevators = document.getElementById('number-of-elevators').value;
          var numberOfFloors = document.getElementById('number-of-basements').value;
          var numberOfBasements = document.getElementById('number-of-companies').value;
          var numberOfElevatorRequired = numberOfElevators
          var totalPriceOfElevators = numberOfElevators * unitePrice;
          var installationFee = totalPriceOfElevators * percentage;
          var total = totalPriceOfElevators + installationFee;
        } else if (form_select.value==3){
          var numberOfFloors = document.getElementById('number-of-floors-cor').value;
          var numberOfBasements = document.getElementById('numbers-of-basements-cor').value;
          var numberOfMaxOccupants = document.getElementById('maximum-occupancy-cor').value;
          var totalFloor = (Number(numberOfFloors) + Number(numberOfBasements));
          var totalOccupants = numberOfMaxOccupants * totalFloor;
          var numberOfElevators = totalOccupants/1000;
          var columnFloorRatio = Math.ceil(totalFloor/20);
          var eleColumnRatio = Math.ceil(numberOfElevators / columnFloorRatio);
          var numberOfElevatorRequired = eleColumnRatio * columnFloorRatio;
          var totalPriceOfElevators = numberOfElevatorRequired * unitePrice;
          var installationFee = totalPriceOfElevators * percentage;
          var total = totalPriceOfElevators + installationFee;
        } else if (form_select.value==4){
          var numberOfFloors = document.getElementById('number-of-floors-H').value;
          var numberOfBasements = document.getElementById('number-of-basements-H').value;
          var numberOfMaxOccupants = document.getElementById('maximum-occupancy-H').value;
          var totalFloor = (Number(numberOfFloors) + Number(numberOfBasements));
          var totalOccupants = numberOfMaxOccupants * totalFloor;
          var numberOfElevators = totalOccupants/1000;
          var columnFloorRatio = Math.ceil(totalFloor/20);
          var eleColumnRatio = Math.ceil(numberOfElevators / columnFloorRatio);
          var numberOfElevatorRequired = eleColumnRatio * columnFloorRatio;
          var totalPriceOfElevators = numberOfElevatorRequired * unitePrice;
          var installationFee = totalPriceOfElevators * percentage;
          var total = totalPriceOfElevators + installationFee;
        };
        
        document.getElementById('elevator-unit-price').value = (Number(unitePrice).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ("$"));
        document.getElementById('elevator-amount').value = numberOfElevatorRequired;
        document.getElementById('elevator-total-price').value = (totalPriceOfElevators.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ("$"));
        document.getElementById('installation-fees').value = (installationFee.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ("$"));
        document.getElementById('final-price').value = (total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + ("$"));
      };



    