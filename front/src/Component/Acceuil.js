import React, {Component} from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn'
import { Form, Segment, Button} from 'semantic-ui-react';



class Acceuil extends Component {
    constructor(props){
        super(props)
        this.state ={
            etat : 0

        }
    }
    goSignIn=()=>{
        this.setState({ etat : 1})
    }
    gologIn=()=>{
        this.setState({ etat : 2})
    }

    render(){
        if (this.state.etat === 1){
            return <SignUp/>
        }
        else if (this.state.etat === 2){
            return <LogIn/>
        }
        return(
            <div className = "test">
                <Form group>
                <h1>BIENVENUE CHEZ LES VIOKS</h1>
                <div className= "button1">
                <Button  circular  size = "massive" value="Sign'in" onClick ={this.goSignIn}>Inscription</Button>
                <Form.Group/>
                <Button circular border="blue" size = "massive" value="Log'in" onClick={this.gologIn}> Connexion</Button>
                </div>
                </Form>
            </div>
        )
    }
}
export default Acceuil;