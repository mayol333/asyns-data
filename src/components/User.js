export const User = ({ name, email, city, company }) => {
    return (
        <div className="container">
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
