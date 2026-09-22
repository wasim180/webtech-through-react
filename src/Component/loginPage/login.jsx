import { Heading1 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";
import { Input } from "../../Elementcomponent/Input";
import Button from "../../Elementcomponent/Button";
import loginStyle from "../../Theme/loginPage/login";

function Login(){
    return(
        <div style={loginstyle.loginContainer}>
            <div style={loginstyle.loginCard}>
                <Heading1 style={loginstyle.loginTitle} text="Welcome Back" />
                <Paragraph style={loginstyle.loginPara} text="Login to continue to Webtech Practice"  />
                <Label style={loginstyle.label} >Email</Label>
                <Input type="email" style={loginstyle.input} placeholder="Enter your email"/>
    
                <Label style={loginstyle.label} >Password</Label>
                <Input type="password" style={loginstyle.input} placeholder="Enter your password"/>
                <Button style={loginstyle.loginButton} name="Login" />

               <Paragraph style={loginstyle.signupText} text="Don't have an account? Sign Up"  />


            </div>
        </div>
    );
}
export default Login;