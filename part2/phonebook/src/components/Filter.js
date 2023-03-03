const Filter = (props) => {
    return (
        <div>
            <form>
                filter shown with <input onChange={props.handleFilterChange}  />
            </form>
        </div>
    )
}
export default Filter 