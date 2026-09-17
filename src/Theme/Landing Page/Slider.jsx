const sliderStyle = {

    slider: {
        width: "470px",
        marginTop: "45px",
        minHeight: "255px",
        backgroundColor: "#f9f9fc",
        border: "1px solid #b9becb",
        borderRadius: "25px",
        padding: "25px",
        boxSizing: "border-box",
        boxShadow: "0 3px 7px rgba(0, 0, 0, 0.15)",
        flexShrink: 0,
    },

    slide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "190px",
        margin: "15% 0px",
        gap: "10px",
    },

    preview: {
        width: "290px",
        textAlign: "center",
    },

    sliderTitle: {
        fontSize: "18px",
        margin: "0 0 15px",
    },

    sliderPara: {
        fontSize: "13px",
        lineHeight: 1.5,
        margin: 0,
    },

    back: {
        width: "40px",
        height: "40px",
        borderRadius: "10px",
        border: "2px solid #43d8da",
        backgroundColor: "#43c9c9",
        color: "white",
        fontSize: "18px",
        cursor: "pointer",
        flexShrink: 0,
    },

    next: {
        width: "40px",
        height: "40px",
        borderRadius: "10px",
        border: "2px solid #43d8da",
        backgroundColor: "#43c9c9",
        color: "white",
        fontSize: "18px",
        cursor: "pointer",
        flexShrink: 0,
    },

    dots: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "7px",
    },

    dot: {
        width: "20px",
        height: "13px",
        display: "block",
        borderRadius: "40%",
        backgroundColor: "#eeeeee",
        cursor: "pointer",
    },

    activeDot: {
        backgroundColor: "#43c9c9",
    }

};

export default sliderStyle;