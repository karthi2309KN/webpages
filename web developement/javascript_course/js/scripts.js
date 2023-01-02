/* console.log("StateMent 1");
console.log("StateMent 1"); */

/* console.log(document.getElementById("blue_box").innerHTML);

console.log(document.getElementById("blue_box").innerHTML="testCase to check wheather it works or not");

console.log(document.getElementById(blue_box).innerHTML); */

/* var user_data = "karthi";
document.getElementById("user_greeting_message").innerHTML= "hello "+user_data+" !"; */

// boolean

/* var orderValue=2800;
if(orderValue>=3000){
    console.log("You are eligible to finance your order")
}

else{
    console.log("You are not eligible to finance your order")
} */

/* function sum_of_Numbers(num1,num2){
    sum=num1+num2;
    return sum;
}

console.log(sum_of_Numbers(3,5)); */

/* var data={
    'firstName':'karthi',
    'secondName':'keyan',
    'fullName':function(){
        return this.firstName+" "+this.secondName;       
    }
};

console.log(data.fullName()); */

/* document.getElementById("click-me").onclick=function(){
    alert("hoo no you have clicked the button!!!!")
}

document.getElementById("hover-me").onmouseover=function(){
    alert("you moved the cursor over the button.")
}

document.getElementById("leave-me").onmouseout=function(){
    alert("you have leaved the button?????")
}


document.onkeydown = function(event){
    if(event.keyCode == 65){
        alert("You Have Pressed A key.");
    }
} */

/* function show_alert(){
    alert('you clicked the button.');
}

function display_alert(){
    alert('you moved the cursor on the button.');
}

function displays_alert(){
    alert('you released the button.');
} */


/* document.getElementById("color_button").onclick = function() {
    document.getElementById("color_button").style['background-color'] = "red";
    document.getElementById("color_button").style.transform = "translateX(500px)";
}; */

/* document.getElementById("color_button").onclick = function() {
    this.style['background-color'] = "purple";
    this.style.transform = "translateX(100px)";
}; */


/* var button=document.getElementById("color_button");

button.onclick = function() {
    button.style['background-color'] = "purple";
    button.style.transform = "translateX(100px)";
}; */


/* for (a=0;a<10;a++){
    if(a%2==0){
        console.log(a);
    }
} */

/* var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];

for (a=0;a<students.length;a++){
    console.log(students[a]);
} */

/* var car = {
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'

}

for(var prop in car){
    console.log(prop+': '+car[prop]);
}; */

/* var elements = document.getElementsByTagName("p");
    for (var a =  0; a < elements.length; a++){
        elements[a].style.color="#425F57";
        elements[a].style['fontFamily']="cursive";
    } */

   /*  var count=0;
    while (count<5){
        console.log(count);
        count++;
    } */

 /*    var count  = ;
    do{
        console.log(count);
        count++;
    }while(count < 5 ); */

/* isMember = false;
age = 70;

if(isMember || age >=65){
    console.log("free");
}else{
    if(age<=18){
        console.log("$ 6.00");
    } else {
        console.log("$ 12.00");
    }
}
 */

/* var employees = [
        
    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']
        
    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']
        
    },

    {
        'name': 'George Banks',
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
    }
    
];

document.getElementById("children").innerHTML="";

for  (var a=0;a<employees.length;a++){
    var childrenList = employees[a].children;
    
    for (var b=0;b<childrenList.length;b++){
        var child = childrenList[b];
        document.getElementById("children").innerHTML += "<li>" +child+ "</li>";
    }
} */
/* 
for(let a=0; a<3;a++){
    console.log("parent log:",a);
    for(let a=0;a<3;a++){
        console.log("child log:",a);
    }
} */

/* console.log("Message_1");

window.setTimeout(function(){
    console.log("Message_2");
},3000); */

/* document.getElementById("show-loader").onclick = function(){
    document.getElementById("spinner-loader").style.display = "block";
    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";
    },5000);
}; */
/* 
var count = 0;
window.setInterval(function(){
    console.log(count);
    count++;
},1000); */

/* 
var num = 0;
while(num<=20){
    num++;

    if (num % 2 != 0){
        continue;
    }
    console.log(num);
} */
/* 
document.getElementById("show_option").onclick=function(){

    var selectField = document.getElementById("options");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption].innerHTML;
    document.getElementById("selected_option").innerHTML = selectedValue;
} */

/* document.getElementById("show_radio").onclick = function(){
    var radio = document.getElementsByName("gender");
    var radio_selected;
    for (var a=0;a< radio.length; a++){
        if(radio[a].checked){
            radio_selected = radio[a].value;
        }
    }
    document.getElementById("selected_radio").innerHTML = radio_selected;
}; */ 


/* document.getElementById("Show_check").onclick = function () {


    var check = document.getElementByName("interest");

    document.getElementById("selected_check").innerHTML = "<ul>";

    for (var b = 0;  b < check.length; b++) {
        if (check[b].checked) {
            document.getElementById("selected_check").innerHTML += '<li>' + check[b].value + '</li>';
        }
    }
 document.getElementById("selected_check").innerHTML += "</ul>";

}; */

/* document.getElementById("education_level").onchange=function(){
    var selectField = document.getElementById("education_level");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    document.getElementById("selected_level").innerHTML = selectedValue.innerHTML;
};*/

/* var check = document.getElementsByName("meal");

for (var a = 0;a<check.length; a++){
    check[a].onchange = function(){
        
        document.getElementById("selected_check").innerHTML+="<ul>";
        for(var b=0;b<check.length; b++){
            if(check[b].checked){
                document.getElementById("selected_check").innerHTML+="<li>"+check[b].value+"</li>";
            }
        }

        document.getElementById("selected_check".innerHTML)+="</ul>";
    }
} */

// on change Event
/* 
var check = document.getElementsByName("meal");
    for(var a=0;a<check.length;a++){
        check[a].onchange=function(){
            document.getElementById("selected_check").innerHTML+="<ul>";
            for (var b=0;b<check.length;b++){
                if(check[b].checked){
                    document.getElementById("selected_check").innerHTML += "<li>"+check[b].value+"</li>";
                }
            }
            document.getElementById("selected_check").innerHTML+="</ul>";
        }
    } */

/*     var bestSellersSlider = {
        
        products: ['product 1', 'product 2', 'product 3'],
        
        interval: 3000,
        
        infinite: true,
    
        get_products: function() {
            console.log(this.products);
        }

    };

    bestSellersSlider.get_products(); */

/*     window.onmousemove = function(e){
        if (e.pageY < 5) {
            alert("Don't miss our flash sale. Go to the the products section for exclusive discounts.");
        }
    }; */


    //jason concept
 /* 
    var employee = {
        'name': "Maria Silva",
        'birth_date': '1988-10-01'
    };

    var employee_json = JSON.stringify(employee);
    console.log(employee_json);

    var employee_obj = JSON.parse(employee_json);
    console.log(employee_obj); */

// localStorage


//window.localStorage.setItem("name","Ivan");

/* $("#submit-name").click(function(){
    var name = $("#name-user").val();

    if (!name){
        alert("please type your name");
    } else{
        localStorage.setItem("name",name);
        greet_user();
    }
});

$("#not-me").click(function(){

        localStorage.removeItem("name");
        $("#welcome-area").hide();
        $("#name-field").show();

});

function greet_user(){
    $("#name-field").hide();
    $("#welcome-text").text("Hi "+localStorage.name+" ,how are you");
    $("#not-me").text("Not "+localStorage.name+" ?");
    $("#welcome-area").show();
}


if(localStorage.name){
    greet_user();
}
 */

/* function add_leading_zero(number){
    if(number<10){
        return "0" + number.toString();
    }else{
        return number.toString();
    }
}

window.setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    document.getElementById("hours").innerHTML=add_leading_zero(hours);
    document.getElementById("minutes").innerHTML=add_leading_zero(minutes);
    document.getElementById("seconds").innerHTML=add_leading_zero(seconds);
    
},1000); */

/* $("#hide").click(function(){
    $(".example:first").hide();
});

var content = $("#sample_text").html();
console.log(content);


var content = $("#sample_text_").html("NewContent");


var new_content = $("#sample-text-only").text();
console.log(new_content); */

//#fullName
//#submit

/* $("#fullName").keyup(function(){
    if ($("#fullName").val()==""){
        $("#submit").hide();
    }else{
        $("#submit").show();
    }
}); */


$("#change_image").click(function(){
            $("#imagem_js").css("transform","translateY(1000px)")
});

/* document.getElementById("color_button").onclick = function() {
    document.getElementById("color_button").style['background-color'] = "purple";
    document.getElementById("color_button").style.transform = "translateX(100px)";
}; */



