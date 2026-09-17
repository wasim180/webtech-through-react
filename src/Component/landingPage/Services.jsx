import Card from "../../Elementcomponent/Card";
import { Heading1, Heading3 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";

import servicesStyle from "../../Theme/Landing Page/Services";

function Services() {
    return (
        <>
            <Card style={servicesStyle.servicesContainer} id="servicesContainer">

                <Heading1 style={servicesStyle.servicesHeader} id="servicesHeader" text="What's Included" />

                {/* in this we make the card component using children */}
                <Card style={servicesStyle.servicesCardContainer} id="ServicesCardContainer">

                    <Card style={servicesStyle.servicesCard} className="ServicesCard">
                        {/* in this we use h5 */}

                        <Heading3 className="cardTitle" text="Authentication Templates" />
                        <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

                    </Card>
                    <Card style={servicesStyle.servicesCard} className="ServicesCard">

                        <Heading3 className="cardTitle" text="Authentication Templates" />
                        <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

                    </Card>
                    <Card   style={servicesStyle.servicesCard}  className="ServicesCard">

                        <Heading3 className="cardTitle" text="Authentication Templates" />
                        <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

                    </Card>
                    <Card  style={servicesStyle.servicesCard}   className="ServicesCard">

                        <Heading3 className="cardTitle" text="Authentication Templates" />
                        <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

                    </Card>
                    <Card   style={servicesStyle.servicesCard}  className="ServicesCard">

                        <Heading3 className="cardTitle" text="Authentication Templates" />
                        <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

                    </Card>

                    <Card  style={servicesStyle.servicesCard}  className="ServicesCard">

                        <Heading3 className="cardTitle" text="Authentication Templates" />
                        <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

                    </Card>
                </Card>
            </Card>
        </>
    );
}
export default Services;