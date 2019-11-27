import React from "react";

import {
    GroupCol,
    GroupContainer,
    FormInputContainer,
    FormInputLabel,
    FormInputDescription
} from "./form-input.styles";

const FormInput = ({ handleChange, label, description, ...props }) => (
    <GroupContainer className={props.groupClassName}>
        <GroupCol>
            <FormInputContainer onChange={handleChange} {...props} />
            {label ? (
                <FormInputLabel className={props.value.length ? "shrink" : ""}>
                    {label}
                </FormInputLabel>
            ) : null}
        </GroupCol>
        <GroupCol>
            {description ? (
                <FormInputDescription>
                    {description}
                </FormInputDescription>
            ) : null}
        </GroupCol>
    </GroupContainer>
);

export default FormInput;
