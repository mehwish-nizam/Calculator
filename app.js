function clearfield(){
    var inp = document.getElementById("inp");
    inp.value = "";
}
function getnumber(num){
    var inp = document.getElementById("inp");
    inp.value += num;
}
function getresult(){
    var inp = document.getElementById("inp");
    inp.value = eval(inp.value);
}
function deletelast(){
    var inp = document.getElementById("inp");
    inp.value = inp.value.slice(0,-1);
}
function getsquare(){
    var inp = document.getElementById("inp");
    inp.value = inp.value*inp.value
}
function getroot(){
    var inp = document.getElementById("inp");
    inp.value = Math.sqrt(inp.value);
}