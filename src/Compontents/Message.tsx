import ReactDOM from "react-dom"

interface MessageProp{
    text : string
    type : string
}

function Message(props : MessageProp){
    return(
        <div className={`modal_div ${props.type}`}>
            <p style={{ whiteSpace: 'pre-line' }}>{props.text}</p>
        </div>
    )
}

export default function MessageModal(props : MessageProp){
    const message_overlay = document.getElementById('message_overlay');
    if(!message_overlay){
        throw new Error("No module overlay")
    }
    return(
        <>
        {ReactDOM.createPortal(
            <Message text={props.text} type={props.type} />,
            message_overlay //The portal
            )
        }
        </>
    )
}