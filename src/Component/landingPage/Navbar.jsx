import {Heading1} from "../../Elementcomponent/Header";
import Button from "../../Elementcomponent/Button";
import navbarStyle from "../../Theme/Landing Page/Navbar";
import Div from "../../Elementcomponent/Div";
import { useNavigate } from "react-router";


function Navbar(){
    const navigate = useNavigate();
return(
    <>
    <Div style={navbarStyle.navbarContainer} id="navbarContainer">

    <Div  style={navbarStyle.navbar} id="navbar">
        <Heading1 style={navbarStyle.navHeader}  id="navHeader" text="Webtech Practice"/>
        <Div  style={navbarStyle.navButtons} id="navbuttons">
               
               <Button  style={navbarStyle.navBtn}  class="navBtn" name="About"  onClick={() => navigate("/about")}/>
               <Button   style={navbarStyle.navBtn} class="navBtn" name="Services"/>
               <Button  style={navbarStyle.navBtn}  class="navBtn" name="Theme"/>
               <Button   style={navbarStyle.navBtn} class="navBtn" name="Login" onClick={() => navigate("/login")}/>
               <Button style={{
                                ...navbarStyle.navBtn,
                                ...navbarStyle.signUp
                            }}
                             class="navBtn" id="SignUp" name="Signup" onClick={() => navigate("/signUp")}/>

        </Div>
    </Div>
</Div>
    </>
);

}
export default Navbar;