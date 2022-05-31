let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let allCells = document.querySelectorAll(".cell");
let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let lastSelectedCell;

cellsContentDiv.addEventListener("scroll", function(e){
    //console.log(e);
    let scrollFromtTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromtTop + "px";
    leftCol.style.left = scrollFromLeft + "px";
    topLeftCell.style.top = scrollFromtTop + "px";
    topLeftCell.style.left = scrollFromLeft + "px";
})

for(let i=0;i<allCells.length;i++){
    allCells[i].addEventListener("click",function(e){
        let rowId = Number(e.target.getAttribute("rowid"));
        let colId = Number(e.target.getAttribute("colid"));
        let address = String.fromCharCode(65+colId)+(rowId+1)+"";
        // console.log(address);
        let cellObject = db[rowId][colId];
        addressInput.value = address;
        //UI update
        formulaInput.value = cellObject.formula;
    })

    allCells[i].addEventListener("blur",function(e){

        //console.log(e);
        lastSelectedCell = e.target;
        let cellValue = e.target.textContent;

        // let rowId  = e.target.getAttribute("rowid");
        // let colId = e.target.getAttribute("colid");

        let {rowId,colId} = getRowIdColIdFromElement(e.target);
        
        let cellObject = db[rowId][colId];
        if(cellObject.value == cellValue){
            return;
        }
        cellObject.value = cellValue;
        console.log("After UPdate",cellObject);
    })
}

formulaInput.addEventListener("blur",function(e){
    let formula = e.target.value;
    if(formula){
        
    }

})



