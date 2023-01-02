//excersice-1

/* var first_name=prompt("Enter your firstname :");
var last_name=prompt("Enter your lastname :");
var user_birth_year=prompt("Enter your birthYear :");
var name = first_name + last_name;
var date1 = new Date();
var currentYear = date1.getFullYear();
var age = currentYear - user_birth_year;
document.getElementById("student_message").innerHTML="Hi, my name is "+ name + " I'm "+age+  " years old and I'm learning Javascript."; */

//excercise-2

/* var num1=prompt("Enter the first number :");
var num2=prompt("Enter the second nunmber :");
var sum = num1/num2;
var n = sum.toFixed(2);
document.getElementById("result").innerHTML=n; */

//exercise-3

var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

document.getElementById("shipments").onchange=function(){
    var selectedOption = document.getElementById("shipments").value;
    var leadtime = shipments[selectedOption].leadTime;
    var Fee = shipments[selectedOption].fee;
    var Delivery_fee = Fee.toFixed(2); 

    var orderedDate = new Date();
    var deliveryDate = new Date(orderedDate.getTime()+(86400000*leadtime));

    document.getElementById("order_date").innerHTML=orderedDate.toISOString().slice(0,10);
    document.getElementById("delivery_date").innerHTML=deliveryDate.toISOString().slice(0,10);
    document.getElementById("delivery_fee").innerHTML=Delivery_fee;


    console.log(orderedDate.toISOString().slice(0,10));
    console.log(deliveryDate.toISOString().slice(0,10));
}

var phones = 
        {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': '450',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': '869',
                'currency': 'EUR',
                'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': '519',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
            }
        };



var radioButtons = document.getElementsByName("product");
4
        for(var a=0 ; a < radioButtons.length;a++){
            radioButtons[a].onchange=function(){
                
                for (var b = 0; b < radioButtons.length; b++){
                    if(radioButtons[b].checked){
                        var selectedRadio = radioButtons[b].value;
                        console.log(selectedRadio);
                    }
                }
            }
        }



//watch Excercise:

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var millisec = date.getMilliseconds();

document.getElementById("stopwatch").innerHTML=(hour,':',minutes,':',seconds,' ',millisec);