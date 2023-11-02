import { useEffect, useState } from "react";
import { User } from "./components/User";
function App() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const handleInput = (event) => {
        const { value } = event.target;
        setInput(value);
    };
    const empty = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        empty();
    }, []);

    return (
        <div>
            <input
                value={input}
                onChange={handleInput}
                className="input"
                type="text"
                placeholder="username"
            />
            <div>
                {data.reduce((array, { id, name, email, address, company }) => {
                    if (name.includes(input)) {
                        array.push(
                            <User
                                key={id}
                                name={name}
                                email={email}
                                city={address.city}
                                company={company.name}
                            />
                        );
                    }
                    return array;
                }, [])}
            </div>
        </div>
    );
}

export default App;
