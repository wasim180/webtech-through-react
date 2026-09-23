const loginStylee = (theme) => ({

    loginContainer: {
        height: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",
    },


    loginCard: {
        width: "420px",

        boxShadow: theme.shadows.card,

        borderTop: `6px solid ${theme.colors.secondary}`,

        borderRadius: theme.borderRadius.extraLarge,

        display: "flex",

        flexDirection: "column",

        backgroundColor: theme.colors.surface,

        padding: "20px",
    },


    loginHeader: {
        textAlign: "center",

        marginBottom: 0,

        fontSize: theme.fontSize.mainHeading,

        fontWeight: theme.fontWeight.medium,
    },


    loginPara: {
        textAlign: "center",

        marginTop: 0,

        marginBottom: "20px",
    },


    loginLabel: {
        fontWeight: theme.fontWeight.medium,

        marginTop: "10px",
    },


    loginInput: {
        height: theme.heightInput.height,

        width: "100%",

        padding: "0 14px",

        boxSizing: "border-box",

        border: `1px solid ${theme.colors.borderPrimary}`,

        borderRadius: theme.borderRadius.large,

        backgroundColor: theme.colors.surface,

        fontSize: theme.fontSize.normal,

        marginTop: "7px",
    },


    loginPasswordCondition: {
        fontSize: theme.fontSize.medium,

        marginTop: "5px",
    },


    checkboxContainer: {
        display: "flex",

        alignItems: "center",

        gap: theme.gap.medium,
    },


    remember: {
        fontSize: theme.fontSize.medium,
    },


    forgotPassword: {
        marginLeft: "auto",

        textDecoration: "none",

        color: theme.colors.secondary,
    },


    signInBtn: {
        width: "100%",

        height: theme.heightBtn.large,

        border: "none",

        borderRadius: theme.borderRadius.medium,

        backgroundColor: theme.colors.secondary,

        color: theme.colors.textLight,

        fontSize: theme.fontSize.semiLarge,

        fontWeight: theme.fontWeight.bold,

        cursor: "pointer",

        marginBottom: "20px",
    },


    loginFooterBox: {
        display: "flex",

        alignItems: "center",

         gap: theme.gap.small,
    },

     loginFooterText: {
        margin: 0,

        fontSize: theme.fontSize.medium,
    },


    loginFooterLink: {
        fontSize: theme.fontSize.normal,

        color: theme.colors.secondary,

        textDecoration: "none",

        fontWeight: theme.fontWeight.bold,
    },


    emailError: {
        color: theme.colors.danger,

        fontSize: theme.fontSize.normal,

        margin: "5px 0 0",
    },

});

export default loginStylee;

