import React, {Component} from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn'


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
            <div>
                <input className="button1" type="button" value="Sign'in" onClick ={this.goSignIn}></input>
                <input className="button2" type="button" value="Log'in" onClick={this.gologIn}></input>
            </div>
        )
    }
}
export default Acceuil;