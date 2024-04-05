// To destructure an object within an object, separate the "nests" you want with a colon.
// Writing `export default` before our component saves us from writing `export default [function]` at the end of the file.
import {useState} from 'react'

export default function Item({ item: { name, price } }) {
  //Create a state tha manages whether or not the itemn is in cart
  const [inCart, setInCart] = useState(false)
  function click (){
    //change the value of isInCart to its opposite boolean value.
  setInCart(!inCart) 

  
  }
  
  return (
    <li>
      {/* Since we destructured props.item, we save ourselves from writing `item.name` and `item.price`. */}
      <h2>{name} for only ${price}!</h2>
      <p> 
        {/* <button onClick =(()=> {console.log("Clicked")})> another way of typing it other than line 8 above*/}
        <button onClick={click}>
          <strong>{inCart ?  "Remove from Cart" : "Add to Cart"}</strong>
        </button>
        {/* Some manual spacing, nothing to see here... */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{inCart ?  "In Cart" : "Not in Cart"}</span>
      </p>
      {/* Some manual spacing between <Item> components, nothing to see here... */}
      <br/>
    </li>
  );
}