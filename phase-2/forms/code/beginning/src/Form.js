import { useState } from "react"

export default function Form() {

    const [userInput, setUserInput]= useState ({
        name: " ", 
        movie: " "
    })
    // const [name, setName] = useState("");
    // const [movie, setMovie] = useState("");
    function changeInput (event) { 
        
    setUserInput ({
        ...userInput, [event.target.name] :  event.target.value

    })
    }

    return (
        <form>
            <label><strong>Name </strong>
                <input name="name" value ={userInput.name}onChange={changeInput}/>
            </label>
            <br/><br/>
            <label><strong>Movie </strong>
                <input name ="movie" value ={userInput.movie}onChange={changeInput}/>
            </label>
            <br/><br/>
            <em>Your lucky number is</em> <strong>2</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up"/>
            <h2>Members</h2>
            <sub>Fill out the form to add your first member!</sub>
        </form>
    )
}