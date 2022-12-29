export default function Comments({name, body, email}){
    return(
        <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
            <h3>{name}</h3>
            <p>{body}</p>
            <p>{email}</p>
        </div>
    )
}