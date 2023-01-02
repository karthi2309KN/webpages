const main = document.getElementById('main')


main.innerHTML="<p> Loading........ </p>";

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");

fetchPromise
    .then((response)=>{
        return response.json();
        console.log('')
})
.then((people)=>{
    main.innerHTML= listOfNames(people);
});

function listOfNames(people){
    const names = people

        .map((person)=>{
        return `<li>${person.name}</li>`
    }).join("\n");

    return `<ul>${names}</ul>`;
    console.log('names')
}
