/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node finding an exiting tag within html
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector("#today"))
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
document.querySelectorAll("p").forEach(pElement => {
    console.log(pElement)
});
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("#today").textContent)

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#today").textContent = "Today!";
document.querySelector("#today").style.color = "green";

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#tomorrow").remove();

// ~ Create + Append a node
// -> createElement(), append()

const image = document.createElement("img");
image.src = "https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg";
document.body.append(image)

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.


// function displayList(name, array,) {
//     // const bName = name
//     // const sArray= array

//     //  console.log("Books", "TheShinning")
// }
// console.log("Books", "TheShinning")

// document.querySelector("dates").append(header)

// li


function displayList(name, array){
    let header = document.createElement("h1")
    header.textContent = name;
    document.querySelector("#dates").append(header)
    
}