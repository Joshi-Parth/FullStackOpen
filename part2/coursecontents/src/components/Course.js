const Course = ({courses}) => {
    // console.log(courses)
    return (
        <div>
            {courses.map(course => {
                const total = course.parts.reduce((accumulator, currentValue) => 
                accumulator + currentValue.exercises, 
                0)
                return (
                    <div key={course.id}>
                        <h1>{course.name}</h1>
                        {course.parts.map(item => <p key={item.id}>{item.name} {item.exercises}</p>)}
                        <p>total of {total} exercises</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Course 