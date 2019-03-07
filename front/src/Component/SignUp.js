import React, { Component } from 'react';
// import Swal from 'sweetalert2';
// import { Button } from 'semantic-ui-react'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }

        console.log(this.state);
    }
    
    render() {

       

        console.log("test json", JSON.stringify(this.state));

        return (
            <div>
            <form action="http://192.168.16.237:5000/signup" method="post">
                <h1 className="inputname"> Renseigner votre prénom</h1>
                <input className="inputlastname" type="text" name="name"  />

                <h1 className="inputPseudo">Renseigner votre nom</h1>
                <input className="inputPseudo" type="text" name="lastname"  />

                <h1 className="inputMail">renseigner votre mail</h1>
                <input className="inputMail" type="email" name="email"  />

                <h1 className="inputPassword">password</h1>
                <input className="inputPassword" type="text" name="password" />

                <h1 className="inputverifPassword">verif-Password</h1>
                <input className="inputverifPassword" type="text" name="verifpassword" /><br />


                <button type="submit" >Soumettre</button>
                

                {/* <h1>{JSON.stringify(this.state)}</h1> */}
               
            </form>
           

            </div>
        )
    }
}
export default SignUp;