/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.

2. Make a POST request to add to that dataset.

*/

//1.

function myfetch(url, requestOptions, afterJson) {
    return fetch(url, requestOptions).then((response) => response.json()).then(afterJson)
}

fetch("http://localhost:3000/pokemon")
// //convert the resulting JSON into some 35 value
.then(response => response.json())
// myfetch("http://localhost:3000/pokemon", undefined,)
.then(pokemon =>{
    pokemon.forEach(pokemon => {
        const li = document.createElement("li");
    li.textContent = pokemon.name;
    document.querySelector("#pokemon").append(li)
    });
    // const li = document.createElement("li");
    // li.textContent = pokemon(0).name;
    // document.querySelector("#pokemon").append(li)

})
// Let's try making a GET request to display existing data on the page.

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.

document.querySelector("form").addEventListener("submit", event =>{
    event.preventDefault();
// console.log(document.querySelector("form"))





myfetch("http://localhost:3000/pokemon", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",//the type od content were POSTing
        "Accept" : "application/json" //The type of content we hope to recieve
    },
    /// ...  and this body
    body: JSON.stringify({
        name: document.querySelector("form").name.value,
        types: [
            document.querySelector("form").forms.value,
            document.querySelector("form").forms.value,
            
        ]      
    })
},
pokemon =>{
    const li = document.createElement("li");
    li.textContent = pokemon.name;
    document.querySelector("#pokemon").append(li)
})
// .then(response => response.json())
// .then(pokemon =>{
//     const li = document.createElement("li");
//     li.textContent = pokemon.name;
//     document.querySelector("#pokemon").append(li)
// })

})


// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 3. Try writing PATCH and DELETE requests!

fetch('http://localhost:3000/DOG')  
.then(response => console.log(response))


 //fetch("string representing a URL to a data source")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // Use the data from the response to do DOM manipulation
//   });
/*
  Here we are calling `fetch()` and passing a URL to a data source as the
  argument. The function call returns a Promise object that represents what the data
  source sent back. It does *not* return the actual content. (More about this
  later.)
*/