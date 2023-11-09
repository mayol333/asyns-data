import { useEffect, useState } from "react";
import { User } from "./components/User";
import axios from "axios";
function App() {
    const [data, setData] = useState([]);
    const [right, setRight] = useState([]);
    const handleUserClick = (id) => {
        const moveRight = data.find((element) => {
            return element.id === id;
        });
        setRight([...right, moveRight]);
        const remove = data.filter((element) => {
            return element.id !== id;
        });
        setData(remove);
    };
    const handleReversedUserClick = (id) => {
        const moveLeft = right.find((element) => {
            return element.id === id;
        });
        setData([moveLeft, ...data]);
        const remove = right.filter((element) => {
            return element.id !== id;
        });
        setRight(remove);
    };
    const empty = async () => {
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            console.log(data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        empty();
    }, []);
    return (
        <div className="main-div">
            <div>
                {data.map(({ id, name, email, address, company }) => {
                    return (
                        <User
                            id={id}
                            key={id}
                            name={name}
                            email={email}
                            city={address.city}
                            company={company.name}
                            handleUserClick={handleUserClick}
                        />
                    );
                })}
            </div>
            <div>
                {right.map(({ id, name, email, address, company }) => {
                    return (
                        <User
                            id={id}
                            key={id}
                            name={name}
                            email={email}
                            city={address.city}
                            company={company.name}
                            handleUserClick={handleReversedUserClick}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
