const signupStylee = (theme) => ({

    signupContainer: {
        height: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",
    },


    signupCard: {
        width: "450px",

        boxShadow: theme.shadows.card,

        borderTop: `6px solid ${theme.colors.secondary}`,

        borderRadius: theme.borderRadius.extraLarge,

        display: "flex",

        flexDirection: "column",

        backgroundColor: theme.colors.surface,

        padding: "10px 25px 25px",
    },


    signupHeader: {
        fontSize: theme.fontSize.mainHeading,

        fontWeight: theme.fontWeight.bold,

        marginBottom: 0,
    },


    signupPara: {
        fontSize: theme.fontSize.medium,

        marginTop: 0,

        marginBottom: "10px",
    },


    signupNameBox: {
        display: "flex",

        gap: theme.gap.semiLarge,

        marginBottom: "20px",
    },


    signupField: {
        flex: 1,

        display: "flex",

        flexDirection: "column",
    },


    name: {
        fontSize: theme.fontSize.medium,

        fontWeight: theme.fontWeight.bold,
    },


    rowName: {
        width: "100%",

        boxSizing: "border-box",

        height: theme.heightInput.height,

        padding: "0 14px",

        border: `1px solid ${theme.colors.borderPrimary}`,

        borderRadius: theme.borderRadius.large,

        backgroundColor: theme.colors.surface,

        fontSize: theme.fontSize.normal,

        marginTop: "7px",
    },


    signupemail: {
        fontSize: theme.fontSize.medium,

        fontWeight: theme.fontWeight.bold,
    },


    signupEmailInput: {
        height: theme.heightInput.height,

        width: "100%",

        padding: "0 14px",

        border: `1px solid ${theme.colors.borderPrimary}`,

        borderRadius: theme.borderRadius.medium,

        boxSizing: "border-box",

        backgroundColor: theme.colors.surface,

        fontSize: theme.borderRadius.large,

        marginTop: "7px",
        
    },


    signupPasswordBox: {
        display: "flex",

        flex: 1,

        gap: theme.gap.semiLarge,

        marginBottom: "18px",

        marginTop: "20px",
    },


    labelPassword: {
        fontSize: theme.fontSize.medium,

        fontWeight: theme.fontWeight.bold,
    },


    rowPassword: {
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


    signupPasswordPara: {
        width: "210px",

        fontSize: theme.fontSize.medium,

        lineHeight: "18px",

        margin: "0 0 15px 0",
    },


    signupCheckboxContainer: {
        display: "flex",

        alignItems: "center",

        gap: theme.gap.medium,

        marginBottom: "25px",
    },


    checkbox: {
        width: "14px",

        height: "14px",

        margin: 0,
    },


    terms: {
        margin: 0,

        fontSize: theme.fontSize.medium,
    },


    createAccountBtn: {
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


    createAccountBtnHover: {
        backgroundColor: theme.colors.success,
    },


    signupFooterBox: {
        display: "flex",

        alignItems: "center",

        gap: theme.gap.small,
    },


    signupFooterText: {
        margin: 0,

        fontSize: theme.fontSize.medium,
    },


    signupFooterLink: {
        fontSize: theme.fontSize.normal,

        color: theme.colors.secondary,

        textDecoration: "none",

        fontWeight: theme.fontWeight.bold,
    },


    error: {
        color: theme.colors.danger,

        fontSize: theme.fontSize.normal,

        margin: "5px 0 0",
    },

});


export default signupStylee;