import Button from "../../Elementcomponent/Button.jsx";
import { Heading3 } from "../../Elementcomponent/Header.jsx";
import Card from "../../Elementcomponent/Card.jsx";
import Paragraph from "../../Elementcomponent/Paragraph.jsx";
import Div from "../../Elementcomponent/Div.jsx";

import sliderStyle from "../../Theme/Landing Page/Slider.jsx";

import { useState , useEffect} from "react";

const sliderData = [
    {
        title: "Complete Auth Flow",
        text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions."
    },
    {
        title: "Responsive Design",
        text: "A responsive layout that works smoothly on desktop, tablet and mobile devices."
    },
    {
        title: "Reusable Components",
        text: "Build your project using reusable React components for cleaner and easier development."
    }
];

function Slider(){

    const [index, setIndex] = useState(0);


    function backSlide() {

        setIndex(
            (index - 1 + sliderData.length) %
            sliderData.length
        );

    }


    function nextSlide() {

        setIndex(
            (index + 1) %
            sliderData.length
        );

    }
    useEffect(() => {

    const interval = setInterval(() => {

        setIndex((index) =>
            (index + 1) % sliderData.length
        );

    }, 3000 );

    return () => {
        clearInterval(interval);
    };

}, []);
  

    return(
    <>
    <Card  style={sliderStyle.slider}  id="slider">
        <Div   style={sliderStyle.slide}  id="slide">
            <Button   style={sliderStyle.back} id="back" name="<" onClick={backSlide}/>

            <Div  style={sliderStyle.preview} id="preview">

                    <Heading3
                    style={sliderStyle.sliderTitle}
                        className="sliderTitle"
                        text={sliderData[index].title}
                    />

                    <Paragraph
                     style={sliderStyle.sliderPara}
                        className="sliderPara"
                        text={sliderData[index].text}
                    />

                </Div>
         

        <Button style={sliderStyle.next}  id="next" name=">" onClick={nextSlide}/>
         </Div>
                <Div style={sliderStyle.dots}  id="dots">

                {sliderData.map((item, i) => (

                    <span
                        key={i}
                         style={{
                                ...sliderStyle.dot,
                                ...(i === index
                                    ? sliderStyle.activeDot
                                    : {})
                            }}
                        onClick={() => setIndex(i)}
                    />

                ))}

            </Div>

      
        
    </Card>
    </>

    );
}
export default Slider;