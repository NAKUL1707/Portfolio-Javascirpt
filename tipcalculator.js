function five(){
    let bill = parseFloat(document.getElementById("box1").value)
    if(isNaN(bill)||bill<=0){
        alert ("enter a vaild number");
        return;
    }
    let FIVE_PERCENT= (bill*5)/100
    document.getElementById("tipamount").innerHTML=`the amount for the tip is ${FIVE_PERCENT}`;
}
function ten(){
    let bill = parseFloat(document.getElementById("box1").value)
    if(isNaN(bill)||bill<=0){
        alert ("enter a vaild number");
        return;
    }
    let TEN_PERCENT= (bill*10)/100
    document.getElementById("tipamount").innerHTML=`the amount for the tip is ${TEN_PERCENT}`;
}
function generate_bill(){
    let bill = parseFloat(document.getElementById("box1").value);
    let tiptext= document.getElementById("tipamount").innerHTML;
    // converts the whole line into array and then gets the last element that why i have used lenght - 1.
    // here the sentance is `the aomount for the tip is tipamount i.e is either ten percent or five percent.
    let tipamt = parseFloat(tiptext.split(" ")[tiptext.split(" ").length - 1]) || 0;
    let total = bill+tipamt;
    document.getElementById("totalamont").innerHTML=`the total bill is:: ${total}`;
} 


