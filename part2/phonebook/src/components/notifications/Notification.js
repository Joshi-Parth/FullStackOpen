const Notification = ({notification}) => {
    const notificationStyle = {
        color: notification.error ? "red" : "green",
        borderRadius: 9,
        background: "lightgrey",
        padding: 10,
        borderStyle: "solid",
        marginBottom: 15
    }
    if(notification.message === null){
        return null
    }
    return (
        <div style={notificationStyle}>
            {notification.message}
        </div>
    )
}

export default Notification