import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`;

export const GroupCol = styled.div`
    width: 50%;
`;

export const GroupContainer = styled.div`
    position: relative;
    margin: 45px 0;

    input[type="password"] {
        letter-spacing: 0.3em;
    }
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    font-size: 18px;
    padding: 10px 10px 10px 0;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin-top: 25px;

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles}
    }
`;

export const FormInputDescription = styled.div`
    color: ${subColor};
    font-size: 16px;
    margin-top: 10px;
`;