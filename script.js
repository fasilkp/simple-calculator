var screen=document.getElementById('screen');
var screen2=document.getElementById('screen2');
var operation=false;
function calculate(val){
    var inl=(screen.value.length)-1
        if(operation){
            if(val=='+' || val=='-' || val=='*' || val=='/'){
                screen.value=screen.value
            }
            else{
                operation=false
            }
        }
        if(!operation){
            screen.value=screen.value+val;
        }
        if(val=='+' || val=='-' || val=='*' || val=='/'){
            operation=true
        }
        if(screen.value[0]==0){
            if(screen.value[1]=="1" || screen.value[1]=="2" ||screen.value[1]=="3" ||screen.value[1]=="4" || screen.value[1]=="5" || screen.value[1]=="6" || screen.value[1]=="7" ||screen.value[1]=="8" || screen.value[1]=="9" ||screen.value[1]=="0" ||screen.value[1]=="(" ||screen.value[1]==")"){
                screen.value=val
            }
        }
        else if(screen.value[0]=="*" || screen.value[0]=="/" || screen.value[0]==")"){
            screen.value=val;
        }
     
}
function clearScr(){
    screen.value="";
    screen2.value="";
}
function equalTo(){
    screen2.value=screen.value
    var result=eval(screen.value)
    screen.value=result
}
function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}