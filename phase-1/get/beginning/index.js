/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/
// fetch
// create = POST
// read = GET
// update = PATCH
// delete = DELETE


// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
fetch("https://cat-fact.herokuapp.com/facts/random")
// fetch is a promise, so erll use .then() to handle its suceessful state
// here well convert our JSON response into usable JS
.then(response => response.json())
.then(fact => {
    document.querySelector("#cat").textContent = fact.text;
})

// fetch is a promise, so erll use .catch() to handle its unsuceessful state
.catch(error => console.log (error));
// 
// A synchronous request to https://anapioficeandfire.com/api/books.
fetch ("https://anapioficeandfire.com/api/books")
.then(response => response.json())
.then(books =>{
    books.forEach(books => {
        const li = document.createElement("li")
        li.textContent = books.name;
        //parent.apppend(child)
        document.querySelector("#got").append(li)
       
    });

})
// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon (name){
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.json();
    console.log(pokemon)
}
getPokemon ("ditto")
// ~ Challenge: Make a GET request to an API of your choice!