import React, { Fragment, useState } from "react";

import { ManageAccountContainer } from "./manage-account.styles";

import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/custom-button/custom-button.component";

const ManageAccount = () => {
    const [userInfo, setUserInfo] = useState({
        'name': '',
        'currentPassword': '',
        'newPassword': '',
        'confirmPassword': ''
    });

    const { name, currentPassword, newPassword, confirmPassword } = userInfo;

    const handleSubmit = async event => {
        event.preventDefault();

        // resetUserInfo({ name, currentPassword, newPassword, confirmPassword });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserInfo({ ...userInfo, [name]: value });
    }

    return (
        <Fragment>
            <section>
                <h1>Manage Account</h1>
            </section>
            <ManageAccountContainer>
                <p>You can use this form to update your account details. If you leave the password fields blank your password will not be changed.</p>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        label="Name"
                    />
                    <FormInput
                        type="password"
                        name="currentPassword"
                        value={currentPassword}
                        onChange={handleChange}
                        label="Current password"
                    />
                    <FormInput
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleChange}
                        label="New password"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label="Confirm password"
                    />
                    <CustomButton type="submit">Save user info</CustomButton>
                </form>
            </ManageAccountContainer>
        </Fragment>
    )
};

export default ManageAccount;