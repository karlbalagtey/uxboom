import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from "./sign-in.styles";

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        console.log(email, password);

        // emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <SignInTitle>UXB CMS</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="email"
                    required={true}
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="password"
                    required={true}
                />
                <ButtonsBarContainer>
                    <CustomButton type="submit">Sign in</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
};

export default SignIn;
