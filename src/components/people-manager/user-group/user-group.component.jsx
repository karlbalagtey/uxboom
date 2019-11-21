import React from "react";

import { UserGroupName } from "./user-group.styles";

const UserGroup = ({ title, linkUrl }) => (
    <UserGroupName>
        <a href={linkUrl}>{ title }</a>
    </UserGroupName>
);

export default UserGroup;