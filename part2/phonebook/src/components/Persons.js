const Persons = ({person, handleDeletePerson}) => {
    return (
        <p>
            {person.name} {person.number} 
            <button onClick={handleDeletePerson}>Delete</button>
        </p>
    )
}

export default Persons 