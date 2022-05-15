import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component.jsx";
import Button from "../../button/button.component";
import FormInput from "../../form-input/form-input.component";
import { useState } from "react";

const defaultFormFields = {
    email: '',
    password: ''
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthWithEmailAndPassword(email, password); 
            console.log(user);  
            const userDocRef = await createUserDocumentFromAuth(user);
            resetFormFields();
        } catch (error) {
            alert('Error logging in. Please check your email and password.');
        }
    };
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <div>
            <h2>Sign in page</h2>
            <FormInput 
                label="Email"
                id="sign-in-email"
                type="email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email} 
            />

            <FormInput
                label="Password"
                id="sign-in-password" 
                type="password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password} 
            />

            <Button 
                type="submit" 
                onClick={handleSubmit}>Sign In
            </Button>
            <Button 
                buttonType='google' 
                onClick={logGoogleUser}>
              Sign in with Google Popup
            </Button>

            <SignUpForm />
        </div>
    );

};

export default SignIn;