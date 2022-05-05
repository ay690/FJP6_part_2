let addbtn = document.querySelector(".act-btn");
let modal = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-ki-cont");
let addflag = false;

addbtn.addEventListener("click", function(e){
   // console.log("clicked");
   //display modal
   //generate ticket
   //if addFlag == true then only display your modal else if false then no modal display
   addflag = !addflag; 
   //console.log(addflag);
   if(addflag){ //if true then display modal
      modal.style.display = "flex"; 
   }else{
      modal.style.display = "none";
   }
})

modal.addEventListener("keydown", function(e){
   let key = e.key;

   if(key == "Shift"){
      createTicket();
      modal.style.display = "none";
      addflag = false;
      textareaCont.value = ""; //text area pe value name ki attribute hoti hai
      //so innerText nahi daala jaata textareaCont.value daala jaata hai
   }
})

//to generate tickets dyanamically via.DOM
//since it is a repititive work we will use function
//main-cont ke andar add your tickets

function createTicket() {
   
   let ticketCont = document.createElement("div");
   ticketCont.setAttribute("class", "ticket-cont");

   ticketCont.innerHTML = `
   <div class="ticket-colour"></div>
   <div class="ticket-id">#Sample-id</div>
   <div class="ticket-task">Lorem ipsum dolor sit amet, 
   consectetur adipisicing elit. Quo, similique?
   </div>`;

   mainCont.appendChild(ticketCont);
}