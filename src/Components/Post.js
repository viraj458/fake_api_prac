export default function Post({id, title, body, viewComments}){
    return(
        <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
            <h3>{title}</h3>
            <p>{body}</p>
            <div>
                <button className="w3-button w3-border w3-red w3-hover-green w3-round" onClick={()=>viewComments(id)}>View Comments</button>
                
            </div>
            
        </div>
    )
}