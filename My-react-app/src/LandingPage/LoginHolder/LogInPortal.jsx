import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCheck, LockKeyhole, Eye, EyeOff } from 'lucide-react';
import styles from './LogInPortal.module.css';
import data from './data.js';

function LogInPortal() {
    const navigate = useNavigate();
    
    // State para sa inputs at password visibility
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Dito mo ilalagay ang logic mo (e.g., checking sa data.js)
        const user = data.find(u => u.username === email && u.password === password);
        if (user) {
            navigate('/app');
        } else {
            alert("Invalid credentials");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.loginCard} onSubmit={handleSubmit}>
                <h2>Welcome Back</h2>
                <p>Please enter your details</p>

                {/* Email Input Group */}
                <div className={styles.inputGroup}>
                    <label>
                        <UserCheck size={20} className={styles.icon} />
                        <span>Username or Email</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password Input Group */}
                <div className={styles.inputGroup}>
                    <label>
                        <LockKeyhole size={20} className={styles.icon} />
                        <span>Password</span>
                    </label>
                    <div className={styles.passwordWrapper}>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {/* Show/Hide Password Toggle */}
                        <button 
                            type="button" 
                            className={styles.eyeBtn}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default LogInPortal;