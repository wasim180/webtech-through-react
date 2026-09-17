import Button from "../../Elementcomponent/Button";
import { Heading2 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";
import Div from "../../Elementcomponent/Div";

import textSectionStyle from "../../Theme/Landing Page/textsection";
import Slider from "./Slider";

import { useNavigate } from "react-router";

function TextSection(){
    const navigate = useNavigate();
    return(
        <>
        <Div style={textSectionStyle.mainTextContainer}  id="mainTextContainer">
        <Div  style={textSectionStyle.textContainer} id="textContainer">
        <Heading2 style={textSectionStyle.textHeader}  id="textHeader" text="Launch your Web Tech Practice site in minutes"/>
        <Paragraph style={textSectionStyle.textPara}  id="textPara" text="A clean, modern starter template with Login, Signup,
        Dashboard, Profile, and Layout pages using only HTML/CSS/
        /JS and browser localStorage.Perfect for learning and,
         practicing web development undamenttals."/>

        <Div  style={textSectionStyle.textButtons}  id="textButtons">
         <Button style={textSectionStyle.textSignUp}  id="textSignUp" name="SignUp" onClick={() => navigate("/signUp")}/>
         <Button style={textSectionStyle.textLogin} id="textLogin" name="I already have a account" onClick={() => navigate("/login")}/>
        </Div>
        </Div>
        <Slider/>
        </Div>
        </>
    );
}
export default TextSection;