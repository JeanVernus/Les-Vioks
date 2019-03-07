import React, { Component } from 'react';
import Swal from 'sweetalert2';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "Renseigner votre email",
            name: "Renseigner votre Prénom",
            lastName: "Renseigner votre nom",
            password: "Renseigner votre mot de passe",
            verifPassword: "Renseigner votre mot de passe",
        }

        console.log(this.state);
    }
    updateEmailField = () => {


            const inputMail= document.getElementById('emailId').value;
            const inputName = document.getElementById('nameId').value;
            const inputLastName = document.getElementById('lastnameId').value;
            const inputPassword = document.getElementById('passwordId').value;
            const inputVerifPassword = document.getElementById('verifpasswordId').value;
       

        if (inputPassword !== inputVerifPassword) {
            
            console.log("test comparaison");
            

            Swal.fire({
                type: "error",
                title: "Oops...",
                text: "Mauvais mot de passe"
            })
        }
        else{
            this.setState({
                mail: inputMail,
                name: inputName,
                lastName: inputLastName,
                password: inputPassword,
                verifPassword: inputVerifPassword
            });
        }
    }
    render() {

       

        console.log("test json", JSON.stringify(this.state));
        return (
            <div>

                <h1 className="inputname"> Renseigner votre prénom</h1>
                <input className="inputlastname" type="text" name="name" id="nameId" />

                <h1 className="inputPseudo">Renseigner votre nom</h1>
                <input className="inputPseudo" type="text" name="lastname" id="lastnameId" />

                <h1 className="inputMail">renseigner votre mail</h1>
                <input className="inputMail" type="email" name="email" id="emailId" />

                <h1 className="inputPassword">password</h1>
                <input className="inputPassword" type="text" name="password" id="passwordId" />

                <h1 className="inputverifPassword">verif-Password</h1>
                <input className="inputverifPassword" type="text" name="verifpasswordId" id ="verifpasswordId" /><br />


                <button type="submit" onClick={this.updateEmailField}>Soumettre</button>


                <h1>{JSON.stringify(this.state)}</h1>
               


            </div>
        )
    }
}
export default SignUp;