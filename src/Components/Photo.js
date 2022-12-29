export default function Photo({title, url, thumbnail}){
    return(
        <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
            <h3>{title}</h3>
            <img src={thumbnail} onClick={url} alt={title}/>
        </div>
    )
}