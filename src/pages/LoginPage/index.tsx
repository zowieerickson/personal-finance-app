import { useState } from 'react';
import styles from './LoginPage.module.css'

export default function LoginPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const payload = {
            name,
            email,
        };

        const response = await fetch("http://localhost:5173/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        console.log(response)
        const data = await response.json();
        console.log("Backend response:", data)
    }

    return (
        <div className={styles.login}>
            <h1>This is the Sign Up page!</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <div>
                Image
            </div>
            <div className={styles.loginBox}>
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <div>
                        <label>
                            Name <input type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        </label>
                        
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}