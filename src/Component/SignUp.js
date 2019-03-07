import React, {Component} from 'react';

class SignUp extends Component{
constructor(props){
super(props);
this.state ={mail : "emailRenseignéDansInput"};
console.log(this.state.mail);
}
updateEmailField =()=>{
const newMail = document.getElementById('emailId').value;
this.setState({mail : newMail});
}
render(){
return(
<div>
{/* <form> */}
{/* <h1 className="inputPseudo">Les-vioks</h1>
<input className="inputPseudo" type="text" name="pseudo" /> */}

<h1 className="inputMail">{this.state.mail}</h1>
<input className="inputMail" type="email" name="email" id="emailId" />

{/* <h1 className="inputPassword">********</h1>
<input className="inputPassword" type="text" name="password" /> */}

<button type="submit" onClick={this.updateEmailField}>C'est parti mon kiki</button>
{/* </form> */}
</div>
)
}
}
export default SignUp;