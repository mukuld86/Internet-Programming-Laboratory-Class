function disableDropDown(){
    document.getElementById("selectAnimal").disabled=true;    
}
function enableDropDown(){
    document.getElementById("selectAnimal").disabled=false;
}
function showCheckBoxAlert(){
    var x=document.getElementById("chkBox");
    if(!x.checked){
        alert("Checkbox is unchecked");
        return false;
    }    
    else{
        alert("Check box is checked");
        return true;
    }
}