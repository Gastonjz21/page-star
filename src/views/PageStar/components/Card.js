function Card({characters}) {
    return(
        <div className="card">
            <ul>
                <li>Name: {characters.name}</li>
                <li>Heigt: {characters.height}</li>
                <li>Mass: {characters.mass}</li>
                <li>Skin Color: {characters.skin_color}</li>
            </ul>
        </div>
    )
}

export default Card;