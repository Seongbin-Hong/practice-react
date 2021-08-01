import React, { useState } from "react";
//import "./App.css";
import User from "./component/User";
import { users } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

function App() {
    const [isLoading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    function renderUser(user) {
        return (
            <User
                id={user.id}
                name={user.name}
                prof_img={user.prof_img}
                age={user.age}
                rating={user.rating}
                intro={user.intro}
            />
        );
    }

    return (
        <div className="container">
            {isLoading === true ? (
                <Spinner animation="border" />
            ) : (
                <div className="user__list">{users.map(renderUser)}</div>
            )}
        </div>
    );
}

export default App;
