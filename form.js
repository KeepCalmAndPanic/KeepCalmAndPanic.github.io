const page1 = document.getElementById("formPage1");
const page2 = document.getElementById("formPage2");
const page3 = document.getElementById("formPage3");
const page4 = document.getElementById("formPage4");
const page5 = document.getElementById("formPage5");

const progressBar = document.querySelector("progress");

const summaryName = document.getElementById("summaryName");
const summaryEmail = document.getElementById("summaryEmail");
const summaryStay = document.getElementById("summaryStay");
const summaryGuests = document.getElementById("summaryGuests");
const summaryRoom = document.getElementById("summaryRoom");
const summaryEquipment = document.getElementById("equipmentSummary");
const summaryCooking = document.getElementById("cookingSummary");
const summaryAgreement = document.getElementById("agreementSummary");

function getFormData(){

    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const startDate = document.getElementById("startDate").value;
    const leaveDate = document.getElementById("leaveDate").value;
    const agreement = page1.querySelector("input[name=conservationAgreement]:checked").value;
    
    const roomType = page2.querySelector("select").value;
    const adults = document.getElementById("adultsStaying").value;
    const children = document.getElementById("childrenStaying").value;

    const surfBoards = document.getElementById("surfBoards").value;
    const umbrella = document.getElementById("umbrella").value;
    const towels = document.getElementById("towels").value;
    const goggles = document.getElementById("goggles").value;
    const gogglesColor = document.getElementById("gogglesColor").value;
    
    const gas = document.getElementById("gas").checked;
    const bbq = document.getElementById("BBQ").checked;
    const oven = document.getElementById("oven").checked;
    const microwave = document.getElementById("microwave").checked;
    const email = document.getElementById("email").value;

    

    return data = {
        name: fName + " " + lName,
        stayLength: startDate + " to " + leaveDate,
        agreement: agreement,

        roomType: roomType,
        totalGuests: "There are " +adults+" adults and " + children + " children booked to stay.",
        surfBoards: surfBoards,
        umbrellas: umbrella,
        towels: towels,
        goggles: goggles,
        gogglesColor: gogglesColor,
        gas: gas,
        bbq: bbq,
        oven: oven,
        microwave: microwave,
        email: email,


    };
}
function test(){
    console.log(getFormData());
}
function submitData(){
    const data = getFormData();
    summaryName.innerHTML = data.name;
    summaryEmail.innerHTML = data.email;
    summaryStay.innerHTML = data.stayLength;
    summaryGuests.innerHTML = data.totalGuests;
    summaryRoom.innerHTML = data.roomType;
    summaryEquipment.innerHTML = "";
    summaryCooking.innerHTML = ""

    if(document.getElementById("agree").checked){
        summaryAgreement.innerHTML ="You have agreed with the Conservation Agreement.";
    }else{
        summaryAgreement.innerHTML ="You have not agreed with Conservation Agreement.";
    }
    

    var equipment ="";
    if(data.surfBoards > 0){
        equipment = equipment + "<div class=\"row\">Surfboards: " + data.surfBoards + "</div>";
    }
    if(data.umbrellas > 0){
        equipment = equipment + "<div class=\"row\">Beach Umbrellas: " + data.umbrellas + "</div>";
    }
    if(data.towels > 0){
        equipment = equipment + "<div class=\"row\">Towels: " + data.towels + "</div>";
    }
    if(data.goggles > 0){
        equipment = equipment + "<div class=\"row\">Goggles: " + data.goggles + 
            "   Colour: <div id=\"goggleColour\" style=\"background-color: "+ data.gogglesColor +"\"></div></div>";

    }
    if(equipment.length > 0){
        summaryEquipment.innerHTML = "<fieldset style=\"width: 50%\"><legend>Equipment Booked</legend>" + equipment+"</fieldset>";
    }

    var cooking ="";
    if(data.gas){
        cooking = cooking + "Gas Stovetop, ";
    }
    if(data.bbq){
        cooking = cooking + "BBQ, ";
    }
    if(data.microwave){
        cooking = cooking + "Microwave, ";    
    }
    if(data.oven){   
        cooking = cooking + "Oven ";
    }
    if(cooking.length > 0){
        summaryCooking.innerHTML = "Cooking facitilies needed: " + cooking;
    }
  

}

function showPage(page){
    switch (page){
        case 1:
            page1.style.display = "block";
            page2.style.display = "none";
            page3.style.display = "none";
            page4.style.display = "none";
            page5.style.display = "none";
            progressBar.value = 0;
            
            break;
        case 2:
            page1.style.display = "none";
            page2.style.display = "block";
            page3.style.display = "none";
            page4.style.display = "none";
            page5.style.display = "none";
            progressBar.value = 1;
            break;
        case 3:
            page1.style.display = "none";
            page2.style.display = "none";
            page3.style.display = "block";
            page4.style.display = "none";
            page5.style.display = "none";
            progressBar.value = 2;
            break;
        case 4:
            page1.style.display = "none";
            page2.style.display = "none";
            page3.style.display = "none";
            page4.style.display = "block";
            page5.style.display = "none";
            progressBar.value = 3;
            break;
        case 5:
            page1.style.display = "none";
            page2.style.display = "none";
            page3.style.display = "none";
            page4.style.display = "none";
            page5.style.display = "block";
            progressBar.value = 4;
            submitData();
            break;
    }
}
const adultsStaying = document.querySelector("#adultsStaying");
const adultsOutput = document.querySelector("#adultsOutput");

adultsOutput.textContent = adultsStaying.value;
adultsStaying.addEventListener("change",function (){adultsOutput.value = this.value});

const childrenStaying = document.querySelector("#childrenStaying");
const childrenOutput = document.querySelector("#childrenOutput");

childrenOutput.textContent = childrenStaying.value;
childrenStaying.addEventListener("change",function (){childrenOutput.value = this.value});