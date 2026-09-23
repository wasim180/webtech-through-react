import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import { Heading1 } from "../../Elementcomponent/Header";
import { Input, Label } from "../../Elementcomponent/Input";
import Paragraph from "../../Elementcomponent/Paragraph";

import Button from "../../Elementcomponent/Button";
import Link from "../../Elementcomponent/Link";

import signupStylee from "../../Theme/SignUpPage/signup";

import { useNavigate } from "react-router";
import { useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";

function SignUp() {

    
     const theme = useContext(ThemeContext);

  const signupStyle = signupStylee(theme);

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [terms, setTerms] = useState(false);

    function handleSignUp() {

        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        let isValid = true;

        // First Name Validation

        if (firstName.trim() === "") {

            setFirstNameError("First name is required.");

            isValid = false;
        } else if (firstName.trim().length < 2) {

            setFirstNameError("First name must be at least 2 characters.");

            isValid = false;
        }


        // Last Name Validation

        if (lastName.trim() === "") {

            setLastNameError("Last name is required.");

            isValid = false;
        } else if (lastName.trim().length < 2) {

            setLastNameError("Last name must be at least 2 characters.");

            isValid = false;
        }


        // Email Validation

        if (email.trim() === "") {

            setEmailError("Email is required.");

            isValid = false;

        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {

            setEmailError("Enter a valid email address.");

            isValid = false;
        }


        // Password Validation

        if (password.trim() === "") {

            setPasswordError("Password is required.");

            isValid = false;

        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{6,}$/.test(password)
        ) {

            setPasswordError(
                "Password must be at least 8 characters with uppercase, lowercase, number & special character."
            );

            isValid = false;
        }


        // Confirm Password Validation

        if (confirmPassword.trim() === "") {

            setConfirmPasswordError("Confirm password is required.");

            isValid = false;

        } else if (confirmPassword !== password) {

            setConfirmPasswordError("Passwords do not match.");

            isValid = false;
        }

        // Terms Validation

        if (!terms) {

            alert("Please agree to the Terms.");

            isValid = false;
        }


        // Stop if validation fails

        if (!isValid) {

            return;
        }


        // Successful Signup

        alert("Account created successfully!");

        navigate("/login");
    }
    return (

        <>
            <Card style={signupStyle.signupContainer} id="signupContainer">
                <Div style={signupStyle.signupCard} id="signupCard">
                    <Heading1 style={signupStyle.signupHeader} id="signupHeader" text="Create your account" />
                    <Paragraph style={signupStyle.signupPara} id="signupPara" text="Sign up to access the practice dashboard." />

                    <Div style={signupStyle.signupNameBox} id="signupNameBox">
                        <Div style={signupStyle.signupField} class="signupField">
                            <Label style={signupStyle.name} text="First name:" id="Fname" class="name" />
                            <Input style={signupStyle.rowName} type="text" id="FnameInput" class="rowName" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            {firstNameError && (<Paragraph text={firstNameError} style={signupStyle.error} />)}
                        </Div>

                        <Div style={signupStyle.signupField} class="signupField">
                            <Label style={signupStyle.name} text="Last name:" id="Lname" class="name" />
                            <Input style={signupStyle.rowName} type="text" id="LnameInput" class="rowName" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            {lastNameError && (<Paragraph text={lastNameError} style={signupStyle.error} />)}
                        </Div>
                    </Div>

                    <Label style={signupStyle.signupemail} text="Email Address:" id="signupemail" />
                    <Input style={signupStyle.signupEmailInput} type="email" id="signupEmailInput" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && (<Paragraph text={emailError} style={signupStyle.error} />)}

                    <Div style={signupStyle.signupPasswordBox} id="signupPasswordBox">
                        <Div style={signupStyle.signupField} class="signupField">
                            <Label style={signupStyle.labelPassword} text="Password:" id="password" class="labelPassword" />
                            <Input style={signupStyle.rowPassword} type="text" id="passwordInput" class="rowPassword" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {passwordError && (<Paragraph text={passwordError} style={signupStyle.error} />)}
                        </Div>
                        <Div style={signupStyle.signupField} class="signupField">
                            <Label style={signupStyle.labelPassword} text="Confirm Password:" id="confirmPassword" class="labelPassword" />
                            <Input style={signupStyle.rowPassword} type="text" id="confirmPasswordInput" class="rowPassword" placeholder="Confirm Passowrd" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            {confirmPasswordError && (<Paragraph text={confirmPasswordError} style={signupStyle.error} />)}
                        </Div>
                    </Div>

                    <Paragraph style={signupStyle.signupPasswordPara} id="signupPasswordPara" text="Use at least 8 characters, with letter & number" />

                    <Div style={signupStyle.signupCheckboxContainer} id="signupCheckboxContainer">
                        <Input style={signupStyle.checkbox} type="checkbox" id="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
                        <Paragraph style={signupStyle.terms} id="terms" text="I agree to the Terms" />
                    </Div>
                    <Button style={signupStyle.createAccountBtn} id="CreateAccountBtn" name="Create Account" onClick={handleSignUp} disabled={!terms} />

                    <Div style={signupStyle.signupFooterBox} id="signupFooterBox">
                        <Paragraph style={signupStyle.signupFooterText} id="signupFooterText" text="Already have account?" />
                        <Link href="" style={signupStyle.signupFooterLink} id="signupFooterLink" text=" Sign in" onClick={() => navigate("/login")} />
                    </Div>

                </Div>

            </Card>
        </>
    );
}
export default SignUp;