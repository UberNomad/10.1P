import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/', { email: email });
            if (response.data.success) {
                console.log("Successfully subscribed");
            } else {
                console.log("Error during subscription");
            }
        } catch (error) {
            console.log("Network error");
        }
    };

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <h1 className="signup-message">SIGN UP FOR OUR DAILY INSIDER</h1>
                <input 
                    className="signup-email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    required 
                />
                <button className="signup-submit" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;