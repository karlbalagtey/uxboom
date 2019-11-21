import React from "react";

import { UserContainer } from "./user.styles";

const User = ({ name, linkUrl }) => (
    <UserContainer>
        <a href={linkUrl}>{name}</a>
    </UserContainer>
);

export default User;