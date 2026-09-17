const Button = (props) => <button className={props.class} style={props.style} id={props.id} onClick={props.onClick} disabled={props.disabled}  >{props.name}</button>
export default Button;