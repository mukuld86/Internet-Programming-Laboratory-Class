var txt="";
var i;
var obj={
    name:"Rahul",
    age:20,
    Dept:"CSE",
    Address:"Punjab"
    };
for (i in obj){
    txt += obj [i] + " ";
    document.getElementById("simple").innerHTML=txt;
    
}