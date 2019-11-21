import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUserCollection } from "../../../redux/user/user.selectors";
import { selectUserGroupCollection } from "../../../redux/user-group/user-group.selectors";

import User from "../../../components/people-manager/user/user.component";
import UserGroup from "../../../components/people-manager/user-group/user-group.component";

import {
    PeopleManagerContainer,
    PeopleManagerGroupsContainer,
    PeopleManagerUsersContainer
} from "./people-manager.styles";

const PeopleManager = ({ users, userGroups }) => (
    <PeopleManagerContainer>
        <PeopleManagerGroupsContainer>
            {userGroups.map(({ id, ...otherCollectionProps }) => (
                <UserGroup key={id} {...otherCollectionProps} />
            ))}
        </PeopleManagerGroupsContainer>

        <PeopleManagerUsersContainer>
            {users.map(({ id, ...otherCollectionProps }) => (
                <User key={id} {...otherCollectionProps} />
            ))}
        </PeopleManagerUsersContainer>
    </PeopleManagerContainer>
);

const mapStateToProps = createStructuredSelector({
    users: selectUserCollection,
    userGroups: selectUserGroupCollection
});

export default connect(mapStateToProps, null)(PeopleManager);
