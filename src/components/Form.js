import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { User } from "./FormUser";

export const Form = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        city: "",
        message: "",
    });
    const handleForm = (key) => (event) => {
        const change = event.target.value;
        setForm({ ...form, [key]: change });
    };
    const submit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(" http://localhost:8000/users", {
                ...form,
                id: uuidv4(),
            });
            const { data } = await axios.get("http://localhost:8000/users");
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await axios.get("http://localhost:8000/users");
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);
    const handleDelete = async (id) => {
        console.log(id);
        try {
            await axios.delete(`http://localhost:8000/users/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="section">
            <h1 className="headline">simple contact form</h1>
            <form onSubmit={submit} className="div">
                <p className="title">first name</p>
                <input
                    onChange={handleForm("firstName")}
                    className="text-input"
                    type="text"
                    placeholder="FIRST NAME"
                    value={form.firstName}
                />
                <p className="title">last name</p>
                <input
                    onChange={handleForm("lastName")}
                    className="text-input"
                    type="text"
                    placeholder="LAST NAME"
                    value={form.lastName}
                />
                <p className="title">email</p>
                <input
                    onChange={handleForm("email")}
                    className="text-input"
                    type="text"
                    placeholder="EMAIL"
                    value={form.email}
                />
                <p className="title">phone number</p>
                <input
                    onChange={handleForm("phoneNumber")}
                    className="text-input"
                    type="text"
                    placeholder="PHONE NUMBER"
                    value={form.phoneNumber}
                />
                <p className="title">city</p>
                <input
                    onChange={handleForm("city")}
                    className="text-input"
                    type="text"
                    placeholder="CITY"
                    value={form.city}
                />
                <p className="title">message</p>
                <textarea
                    onChange={handleForm("message")}
                    className="message-input"
                    placeholder="MESSAGE"
                    value={form.message}
                />
                <button className="click">Send</button>
            </form>
            <p>
                2016 Simple Contact Form. All Rights Reserved | Design by
                W3layouts
            </p>
            {users.map(
                ({
                    id,
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    city,
                    message,
                }) => {
                    return (
                        <User
                            key={id}
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            phoneNumber={phoneNumber}
                            city={city}
                            message={message}
                            handleDelete={handleDelete}
                            id={id}
                        />
                    );
                }
            )}
        </section>
    );
};
