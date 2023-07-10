function results() {
    const var1 = document.getElementById('combo1');
    const var2 = document.getElementById('combo2');
    const var3 = document.getElementById('combo3');
    const var4 = document.getElementById('combo4');
    const var5 = document.getElementById('combo5');

    const val1 = parseInt(var1.value);
    const val2 = parseInt(var2.value);
    const val3 = parseInt(var3.value);
    const val4 = parseInt(var4.value);
    const val5 = parseInt(var5.value);
   

    // console.log(total);
    const discount20 = 0.20;
    var total = 0;
    if (var1.checked) {
        total+=val1;
        document.getElementById('result').innerHTML = total;           
    }
    if (var2.checked) {
        total+=val2;
        document.getElementById('result').innerHTML = total;           
    }
    if (var3.checked) {
        total+=val3;
        document.getElementById('result').innerHTML = total;           
    }
    if (var4.checked) {
        total+=val4;
        document.getElementById('result').innerHTML = total;           
    }
    if (var5.checked) {
        total+=val5;
        document.getElementById('result').innerHTML = total;           
    }

    if (total>=2000){
        var final = total * discount20;
        var res = total - final;
        document.getElementById('result').innerHTML = 'Order has been placed successfully. You are requested to pay Rs. '+ Math.round(res) +' on delivery.' ;
    }
    else{
        if(total==0){
            document.getElementById('result').innerHTML = 'No selection has been made.'
        }else{
            document.getElementById('result').innerHTML = 'Order has been placed successfully. You are requested to pay Rs. '+ Math.round(total) +' on delivery.' ;

        }
        
    }
}