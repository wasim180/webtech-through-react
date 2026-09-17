function Div({children ,id ,className ,style}){
    return(
        <div id={id} className={className} style={style}>
            {children}
        </div>
    );
}

export default Div

