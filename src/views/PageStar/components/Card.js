function Card({character}) {
    return(
        <div className="card">
            <ul>
                <li>Name: {character.name}</li>
                <li>Heigt: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Skin Color: {character.skin_color}</li>
            </ul>
        </div>
    )
}

export default Card;