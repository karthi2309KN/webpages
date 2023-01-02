/*
const myPromise = new Promise((resolve, reject)=>{
    const error = true;
    if(!error){
        resolve("Yes, resolved the promise")
    }else{
        reject("no!rejected the promise--")
    }
});

const myNextPromise = new Promise((resolve,reject)=>{
    setTimeout(function (){
       resolve("myNextPromise resolved");
    },3000);
})

myNextPromise.then(value=>{
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});*/

//thenables:

/*const users=fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
        return response.json();
    })
.then(data =>{
    console.log(data);
})
console.log(users)*/
/*
const  myUsers = {
    userList:[]
}*/

/*
const getAllUserEmail = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    console.log(jsonUserData)

    const userEmailArray = jsonUserData.map(user=>{
        return user.email;
    })
    console.log(userEmailArray)

    const userMobileNum = jsonUserData.map(user=>{
        return user.phone;
    })
    console.log(userMobileNum)

    const userCompany = jsonUserData.map(user=>{
        return user.company.name;
    })
    console.log(userCompany);

    postToAnotherFunc(userCompany);
}
const postToAnotherFunc = (data)=>{
    console.log(data);
}

getAllUserEmail();*/


/*const jokeObject={
    id:'5h399pWLjkdks',joke:"did the beaver say to the tree It's been nice gnawing you."
}


const postData = async(jokeObj)=>{
    const response = await fetch("https://httpbin.org/post",{
        method:"POST",
        headers:{
            "CONTENT-tYPE":"application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse.headers);
    }
    postData(jokeObject);*/

const requestJoke = async(firstName, lastName)=> {
    const response=await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName} & lastName=${lastName}`);
    const jsonResponse=await response.json();

    console.log(jsonResponse.value);
}
requestJoke("Arshad","s");