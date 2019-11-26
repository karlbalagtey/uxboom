import React, { Fragment, useState } from "react";

import { SettingsPageContainer } from "./settings-page.styles";

import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import FormTextArea from "../../../components/form-textarea/form-textarea.component";

const SettingsPage = () => {
    const [siteSettings, setSiteSettings] = useState({
        'analytics': '',
        'adminEmail': '',
        'name': '',
        'supportEmail': ''
    });

    const { analytics, adminEmail, name, supportEmail } = siteSettings;
    
    const handleSubmit = async event => {
        event.preventDefault();

        // signUp({ email, password, displayName });
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setSiteSettings({...siteSettings, [name]: value });
    };

    return (
        <Fragment>
            <section>
                <h1>Manage UXBoom CMS settings</h1>
            </section>
            <SettingsPageContainer>
                <form>
                    <FormTextArea 
                        col="50"
                        rows="4"
                        name="analytics"
                        value={analytics}
                        onChange={handleChange}
                        label="Analytics"
                        description="Enter an analytics tracking script here. This can then be inserted into templates when the site is in production"
                    />
                    <FormInput
                        type="email"
                        name="adminEmail"
                        value={adminEmail}
                        onChange={handleChange}
                        label="Site admin email"
                        description="The email address for the site administrator. This will be used as the 'from' field for any CMS emails."
                    />
                    <FormInput
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        label="Site name"
                        description="The website name / title"
                    />
                    <FormInput
                        type="email"
                        name="supportEmail"
                        value={supportEmail}
                        onChange={handleChange}
                        label="Site support email"
                        description="Email address that support queries will be sent to"
                    />
                    <CustomButton type="submit">Save settings</CustomButton>
                </form>
            </SettingsPageContainer>
        </Fragment>
    )
};

export default SettingsPage;
