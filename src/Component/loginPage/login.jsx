import Button from "../../Elementcomponent/Button";
import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import { Heading2 } from "../../Elementcomponent/Header";
import { Input, Label } from "../../Elementcomponent/Input";
import Link from "../../Elementcomponent/Link";
import Paragraph from "../../Elementcomponent/Paragraph";

import loginStylee from "../../Theme/login/login.jsx";
import { useState } from "react";

import { useNavigate } from "react-router";

import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";

function LoginCard() {

     const theme = useContext(ThemeContext);

  const loginStyle = loginStylee(theme);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [rememberMe, setRememberMe] = useState(false);

    function handleLogin() {

        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if (email.trim() === "") {

            setEmailError("Email is required.");

            isValid = false;

        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            setEmailError("Enter a valid email address.");

            isValid = false;
        }

        if (password.trim() === "") {

            setPasswordError("Password is required.");

            isValid = false;
        }

        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{6,}$/.test(password)) {
            setPasswordError(
                "Password must be at least 6 characters with uppercase, lowercase, number & special character."
            );
            isValid = false;
        }

        if (!isValid) {

            return;
        }

        alert("Login successful!");

        navigate("/dashboard");
    }
    return (
        <>
            <Card style={loginStyle.loginContainer} id="logincontainer">

                <Div style={loginStyle.loginCard} id="loginCard">

                    <Heading2 style={loginStyle.loginHeader} id="loginHeader" text="Welcome Back" />
                    <Paragraph style={loginStyle.loginPara} id="loginPara" text="Sign in to continue to your dashboard" />


                    <Label style={loginStyle.loginLabel} text="Email Address:" id="loginEmail" class="loginLabel" />
                    <Input style={loginStyle.loginInput} type="email" id="loginEmail" class="loginInput" placeholder="Enter the Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && (<Paragraph text={emailError} style={loginStyle.emailError} />)}

                    <Label style={loginStyle.loginLabel} text="Password: " id="loginPassword" class="loginLabel" />
                    <Input style={loginStyle.loginInput} type="password" id="loginPassword" class="loginInput" placeholder="Enter the password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && (<Paragraph text={passwordError} style={loginStyle.emailError} />)}

                    <Paragraph style={loginStyle.loginPasswordCondition} id="loginPasswordCondition" text="Password must be at least 6 characters long." />

                    <Div style={loginStyle.checkboxContainer} id="checkboxContainer">
                        <Input type="checkbox" id="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
                        <Paragraph style={loginStyle.remember} id="remember" text="Remember me for 30 days" />
                        <Link href="" style={loginStyle.forgotPassword} id="Forgotpassword" text="Forgot password?" />

                    </Div>
                    <Button style={loginStyle.signInBtn} id="SignInBtn" name="Sign In" disabled={!rememberMe}  onClick={handleLogin}  />

                    <Div style={loginStyle.loginFooterBox} id="loginFooterBox">
                        <Paragraph id="loginFooterText" style={loginStyle.loginFooterText} text="New to WebTech Practice?" />
                        <Link style={loginStyle.loginFooterLink} href="" id="loginFooterLink" text=" Create an account" onClick={() => navigate("/SignUp")} />
                    </Div>
                </Div>
            </Card>
        </>
    );
}

export default LoginCard;