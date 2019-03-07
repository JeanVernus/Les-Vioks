import React, {Component} from 'react';
import { Form, Segment, Button} from 'semantic-ui-react';

class LogIn extends Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }
    render(){
        return(
            <div>
                <Segment inverted>
            <Form inverted  action="http://192.168.16.237:5000/signup" method="post">

               
                <Form.Input fluid label = "Pseudo" className="inputPseudo" type="text" name="lastname" id="lastnameId" />

               
                <Form.Input fluid label = "Password" className="inputverifPassword" type="text" name="password" id ="passwordId" /><br />

                <Button type="submit" >Soumettre</Button>
            </Form>
            </Segment>
            </div>
        )
    }
}
export default LogIn;