const navbarStyle = {

    navbarContainer: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        backgroundColor: "#102d72",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    },

    navbar: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        boxSizing: "border-box",
    },

    navHeader: {
        color: "white",
        fontWeight: 400,
        padding: "5px",
        margin: 0,
    },

    navButtons: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    navBtn: {
        padding: "9px 18px",
        borderRadius: "8px",
        border: "1px solid #43d8da",
        backgroundColor: "transparent",
        color: "white",
        cursor: "pointer",
    },

    signUp: {
        backgroundColor: "#43c9c9",
    }

};

export default navbarStyle;

