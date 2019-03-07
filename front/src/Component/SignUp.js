import React, { Component } from 'react';
import { Form, Segment, Button, Grid} from 'semantic-ui-react';

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
            {/* <form action="http://192.168.16.237:5000/signup" method="post">
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
            
            <Grid verticalAlign = "middle" >
                <Grid.Column>
            <Segment inverted>
                <Form inverted  action="http://192.168.16.237:5000/signup" method="post">
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Prénom' type="text" name="name" />
                        <Form.Input fluid label='Nom' type="text" name="lastname" />
                        <Form.Input fluid label='email' type="email" name="email"/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Mot de passe' type="text" name="password"/>
                        <Form.Input fluid label='Confirmation'type="text" name="verifpassword"/>  
                    </Form.Group>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Button type='submit'>Soumettre</Button>
                </Form>
            </Segment>
            </Grid.Column>
            </Grid>
           

            </div>
        )
    }
}
export default SignUp;