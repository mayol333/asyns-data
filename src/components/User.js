export const User = ({ id, name, email, city, company, handleUserClick }) => {
    return (
        <div onClick={() => handleUserClick(id)} className="container">
            <p>
                <span>name:</span> {name}
            </p>
            <p>
                <span>email:</span> {email}
            </p>
            <p>
                <span>city:</span> {city}
            </p>
            <p>
                <span>company:</span> {company}
            </p>
        </div>
    );
};
