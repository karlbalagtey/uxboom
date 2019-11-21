import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUserCollection } from "../../../redux/user/user.selectors";
import { selectUserGroupCollection } from "../../../redux/user-group/user-group.selectors";

import { 
    PeopleManagerContainer,
    PeopleManagerGroup,
    PeopleManagerUser
} from "./people-manager.styles";

const PeopleManager = ({ users, userGroups }) => (
    <PeopleManagerContainer>
        {users.map(({ id, ...otherCollectionProps }) => (
            <PeopleManagerUser key={id} {...otherCollectionProps} />
        ))}

        {userGroups.map(({ id, ...otherCollectionProps }) => (
            <PeopleManagerGroup key={id} {...otherCollectionProps} />
        ))}
    </PeopleManagerContainer>
);

const mapStateToProps = createStructuredSelector({
    users: selectUserCollection,
    userGroups: selectUserGroupCollection
});

export default connect(mapStateToProps, null)(PeopleManager);