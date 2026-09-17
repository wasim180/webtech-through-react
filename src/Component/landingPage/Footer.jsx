import Paragraph from "../../Elementcomponent/Paragraph";
import Button from "../../Elementcomponent/Button";
import Div from "../../Elementcomponent/Div";
import footerStyle from "../../Theme/Landing Page/Footer";
import { useNavigate } from "react-router";
function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <Div style={footerStyle.footerContainer} id="footerContainer">
                <Div style={footerStyle.footer} id="footer">
                    <Paragraph style={footerStyle.copyrightFooter} id="CopyrightFooter" text="© 2025 WebTech Practice. Built for learning and growth." />

                    <Div style={footerStyle.footerButtons} id="footerbuttons">
                        <Button style={footerStyle.footerBtn} class="footerBtn" name="About" />
                        <Button style={footerStyle.footerBtn} class="footerBtn" name="Services" />
                        <Button style={footerStyle.footerBtn} class="footerBtn" name="Theme" />
                        <Button style={footerStyle.footerBtn} class="footerBtn" name="Login" onClick={() => navigate("/login")}/>
                        <Button style={{
                            ...footerStyle.footerBtn,
                            ...footerStyle.signUp
                        }}
                            class="footerBtn SignUp" name="Signup" onClick={() => navigate("/signUp")}/>

                    </Div>
                </Div>
            </Div>
        </>

    );
}
export default Footer;