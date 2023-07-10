function package()
{
debugger;
var name_pattern=/[a-zA-Z\s]/g;
var number_pattern=/^[9,8,70-9]{10}/g;
var aadhar_pattern=/[1-9]{12}/g;
var card_pattern=/[0-9]{16}/g;
var cvv_pattern=/[0-9]{3}/g;

var input_name=document.getElementById("name").value;
var input_number=document.getElementById("number").value;
var input_aadhar=document.getElementById("aadhar").value;
var input_card=document.getElementById("card").value;
var input_cvv=document.getElementById("cvv").value;
var check=0;

if(input_name.match(name_pattern)==null)
{
document.getElementById("display_result").innerHTML="Invalid Name";
check++;
}
else if(input_number.match(number_pattern)==null)
{
document.getElementById("display_result").innerHTML="Invalid Mobile Number";
check++;
}
else if(input_aadhar.match(aadhar_pattern)==null){

document.getElementById("display_result").innerHTML="Invalid Adhaar Number"
check++;
}
else if(input_card.match(card_pattern)==null){

document.getElementById("display_result").innerHTML="Invalid CVV Number";
check++;
}
else {
    


var total=0;
// var input_package=document.getElementsByClassName("order-package");
var input_adult=Number(document.getElementById("adults").value);
var input_child=Number(document.getElementById("children").value);
var total_persons=Number(input_adult+input_child);
var date=document.getElementById("dateofcheck").value;

var package_input=document.getElementById("package").value;

var num;
var amt;

var package1=11000;
var package2=20000;
var package3=29000;
var package4=37000;
var package5=45000;

if(package1==package_input)
{
    var num=2;
    var amt=11000;
    if(total_persons>num)
    {
        num=total_persons-num;

        for(let i=0;i<num;i++)
        {
            amt+=3000;
        }
        document.getElementById("display_result").innerHTML="Total amount Rs."+amt+" is paid successfully. Tour booking is confirmed! Tour check-in Date is"+date;
    }
}


else if(package2==package_input)
{
var num=3;
var amt=20000;
if(total_persons>num)
{
    num=total_persons-num;
    
    for(let i=0;i<num;i++)
    {
        amt+=3500;
    }
    document.getElementById("display_result").innerHTML="Total amount Rs."+amt+" is paid successfully. Tour booking is confirmed! Tour check-in Date is"+date;
}
}


else if(package3==package_input)
{
var num=3;
var amt=29000;
if(total_persons>num)
{
    num=total_persons-num;
   
    for(let i=0;i<num;i++)
    {
        amt+=3500;
    }
    document.getElementById("display_result").innerHTML="Total amount Rs."+amt+" is paid successfully. Tour booking is confirmed! Tour check-in Date is"+date;
}
}


else if(package4==package_input)
{
var num=4;
var amt=37000;
if(total_persons>num)
{
    num=total_persons-num;
  
    for(let i=0;i<num;i++)
    {
        amt+=4000;
    }
    document.getElementById("display_result").innerHTML="Total amount Rs."+amt+" is paid successfully. Tour booking is confirmed! Tour check-in Date is"+date;
}
}


if(package5==package_input)
{
var num=4;
var amt=45000;
if(total_persons>num)
{
    num=total_persons-num;
    alert(num);
    for(let i=0;i<num;i++)
    {
        amt+=4000;
    }
    document.getElementById("display_result").innerHTML="Total amount Rs."+amt+" is paid successfully. Tour booking is confirmed! Tour check-in Date is"+date;
}

else{
    document.getElementById("display_result").innerHTML="No Selection was made";
}

}

}
}

