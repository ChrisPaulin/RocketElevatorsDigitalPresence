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
    }

    // Cette fonction est caller avec "onKeyUp" pour ta case "Number of elevator cages to be deployed".
function potato() {
  console.log("test")
  // On sauvegarde ce qui est inscrit dans le field dans une valeur
  var fraise = document.getElementById('NumberOfElevatorCagesC5-input').value;
  console.log(fraise)
  // On dit que le field du nombre total d'ascenceurs est égal à notre variable fraise
  document.getElementById("elevators-final-output").value = fraise; 
}


    function selectASAP () {
        var percetage;
        var unitePrice;
        if (document.getElementById('standard-option').checked) {
          unitePrice = 7565
          percetage = 0.1
        } else if (document.getElementById('premium-option').checked) {
          unitePrice = 12345
          percetage = 0.13
        } else if(document.getElementById('excelium-option').checked) {
          unitePrice = 15400
          percetage = 0.16
        }
        if (form_select.value==1) {
          var numOfAppartements = document.getElementById('NumberOfAppartementsR1-input').value;
          var numOfFloors = document.getElementById('NumberofFloorsR2-input').value;
          var numOfBasements = document.getElementById('NumberOfBasementsR3-input').value;
          var appFloorRatio = Math.ceil(numOfAppartements/numOfFloors);
          var doorForApp = Math.ceil(appFloorRatio/6);
          var columnFloorRatio = Math.ceil(numOfFloors/20);
          var noe =  doorForApp * columnFloorRatio;
          var totalEleCost = noe * unitePrice;
          var instalFee = totalEleCost * percentage;
          var total = totalEleCost + instalFee;
        } else if (form_select.value==2){
          var numOfCages = document.getElementById('NumberOfElevatorCagesC5-input').value;
          var numOfFloors = document.getElementById('NumberOfFloorContainedNoBasementsC2').value;
          var numOfBasements = document.getElementById('NumberOfBasementsC3').value;
          var noe =  numOfCages;
          var totalEleCost = noe * unitePrice;
          var instalFee = totalEleCost * percetage;
          var total = totalEleCost + instalFee;
        } else if (form_select.value==3){
          var numOfFloors = document.getElementById('NumberOfSeparateTenantCompaniesCOR2-input').value;
          var numOfBasements = document.getElementById('NumberOfBasementsCOR3-input').value;
          var numOfMaxOccupants = document.getElementById('MaximumNumberOfOccupantsPerFloorCOR5-input').value;
          var totalFloor = (Number(numOfFloors) + Number(numOfBasements));
          var totalOccupants = numOfMaxOccupants * totalFloor;
          var numOfElevators = totalOccupants/1000;
          var columnFloorRatio = Math.ceil(totalFloor/20);
          var eleColumnRatio = Math.ceil(numOfElevators / columnFloorRatio);
          var noe = eleColumnRatio * columnFloorRatio;
          var totalEleCost = noe * unitePrice;
          var instalFee = totalEleCost * percetage;
          var total = totalEleCost + instalFee;
        } else if (form_select.value==4){
          var numOfFloors = document.getElementById('NumberOfFloorContainedNoBasementsH2-input').value;
          var numOfBasements = document.getElementById('NumberOfBasementsH3-input').value;
          var numOfMaxOccupants = document.getElementById('MaximumNumberOfOccupantsPerFloorH5-input').value;
          var totalFloor = (Number(numOfFloors) + Number(numOfBasements));
          var totalOccupants = numOfMaxOccupants * totalFloor;
          var numOfElevators = totalOccupants/1000;
          var columnFloorRatio = Math.ceil(totalFloor/20);
          var eleColumnRatio = Math.ceil(numOfElevators / columnFloorRatio);
          var noe = eleColumnRatio * columnFloorRatio;
          var totalEleCost = noe * unitePrice;
          var instalFee = totalEleCost * percetage;
          var total = totalEleCost + instalFee;
        };
        var totalEleCost = noe * unitePrice;
        var instalFee = totalEleCost * percetage;
        var total = totalEleCost + instalFee;
        document.getElementById('unitePrice').value = (Number(unitePrice).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ("$"));
        document.getElementById('numOfElevators').value = noe;
        document.getElementById('totalPriceOfElevators').value = (totalEleCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ("$"));
        document.getElementById('installationFee').value = (instalFee.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ("$"));
        document.getElementById('totalFee').value = (total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + ("$"));
      };