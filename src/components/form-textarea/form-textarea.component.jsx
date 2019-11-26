import React from "react";

import {
    GroupCol,
    GroupContainer,
    FormTextAreaContainer,
    FormTextAreaLabel,
    FormTextAreaDescription
} from "./form-textarea.styles";

const FormTextArea = ({ handleChange, label, description, ...props }) => (
    <GroupContainer>
        <GroupCol>
            <FormTextAreaContainer onChange={handleChange} {...props} />
            {label ? (
                <FormTextAreaLabel className={props.value.length ? "shrink" : ""}>
                    {label}
                </FormTextAreaLabel>
            ) : null}
        </GroupCol>
        <GroupCol>
            {description ? (
                <FormTextAreaDescription>
                    {description}
                </FormTextAreaDescription>
            ) : null}
        </GroupCol>
    </GroupContainer>
);

export default FormTextArea;
