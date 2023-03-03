const PersonForm = ({handleAdd, handleNumberChange, handleNameChange, newName, newNumber}) => {
    return (
        <div>
            <form onSubmit={handleAdd}>
                <div>
                name: <input onChange={handleNameChange} value={newName}/>
                </div>
                <div>
                number <input onChange={handleNumberChange} value={newNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm