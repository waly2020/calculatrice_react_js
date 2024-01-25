import "../styles/button.scss";

const Buttons = ({className = "",onClick,children}) => {
    return (
        <button onClick={() => {
            if(onClick){
                onClick();
            }
        }} className={`buttons ${className}`}>{children}</button>
    );
}

export default Buttons;