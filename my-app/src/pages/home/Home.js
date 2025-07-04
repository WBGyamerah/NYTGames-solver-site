import React from "react";
import Button from "../../components/buttons/basic button/BasicButton";

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>NYT Solver</h1>
            </header>
            <main>
                <Button>Play</Button>
            </main>
        </div>
    );
}

export default HomePage;