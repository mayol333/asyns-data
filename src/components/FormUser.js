export const User = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    city,
    message,
    handleDelete,
    id,
}) => {
    return (
        <div onClick={() => handleDelete(id)} className="container">
            <p>
                <span>firstName:</span> {firstName}
            </p>
            <p>
                <span>lastName:</span> {lastName}
            </p>
            <p>
                <span>email:</span> {email}
            </p>
            <p>
                <span>cphoneNumber:</span> {phoneNumber}
            </p>
            <p>
                <span>city:</span> {city}
            </p>
            <p>
                <span>message:</span> {message}
            </p>
        </div>
    );
};
