import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component.jsx";
import Button from "../../button/button.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign in page</h1>
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