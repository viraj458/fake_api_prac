export default function Photo({title, thumbnailUrl}){
    return(
        <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
            <h3>{title}</h3>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    )
}