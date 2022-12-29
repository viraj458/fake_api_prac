export default function User ({id, name, username, email, viewPost, viewAlbums}){
  return (
    <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
        <img src='https://png.pngtree.com/element_our/png/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg' alt={username}/>
        <h3>{name}</h3>
        <p>{email}</p>
        <button className="w3-button w3-border w3-yellow w3-hover-blue w3-round" onClick={()=>viewAlbums(id)}>View Albums</button>
        <button className="w3-button w3-border w3-red w3-hover-green w3-round" onClick={()=>viewPost(id)}>View Post</button>
    </div>
  )
}

