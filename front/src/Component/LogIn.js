import React, {Component} from 'react';

class LogIn extends Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }
    render(){
        return(
            <div>
            <form action="http://192.168.16.237:5000/signup" method="post">

                <h1 className="inputPseudo">Renseigner votre nom</h1>
                <input className="inputPseudo" type="text" name="lastname" id="lastnameId" />

                <h1 className="inputverifPassword">Password</h1>
                <input className="inputverifPassword" type="text" name="password" id ="passwordId" /><br />

                <button type="submit" >Soumettre</button>
            </form>
            </div>
        )
    }
}
export default LogIn;