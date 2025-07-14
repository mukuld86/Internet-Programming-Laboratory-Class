function ABC(){
    document.getElementById("abc").innerHTML="LPU expects good placements out of you!";
}   
function dialog(){
    window.alert("Dialog Message!")
}
function alertmsg(){
    document.write("Write something here")
}

function confDialg(){
    var retVal=confirm("Do you want to continue?");
        if(retVal==true){
            document.getElementById("prntMsg").innerHTML="User wants to continue!"
            return true;
        }
        else{
            document.getElementById("prntMsg").innerHTML="User does not want to continue!"
            return false;
        }
}

function promptDialog(){
    var val=window.prompt("Enter your name:","your name");
    document.getElementById("printName").innerHTML += val;
    console.log("Hello World");
}
