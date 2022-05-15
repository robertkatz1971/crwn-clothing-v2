import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, 
         createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) return;

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)   
            const userDocRef = await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form action="" onSubmit={() => {}}>
                <label htmlFor="displayName">Display Name</label>
                <input 
                    id="displayName"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName} 
                />

                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                />

                <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm