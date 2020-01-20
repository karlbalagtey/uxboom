import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUserGroupCollection } from "../../../redux/user-group/user-group.selectors";

import UserGroupDashboard from "../../../components/people-manager/user-group/user-group-dashboard.container";
import {
    PeopleManagerContainer,
    PeopleManagerGroupsContainer
} from "./people-manager.styles";

const PeopleManager = ({ userGroups, match }) => {
    console.log(match);

    return (
        <Fragment>
            <section>
                <h1>People manager</h1>
            </section>

            <PeopleManagerContainer>
                <PeopleManagerGroupsContainer>
                    <UserGroupDashboard />
                </PeopleManagerGroupsContainer>
            </PeopleManagerContainer>
        </Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    userGroups: selectUserGroupCollection
});

export default connect(mapStateToProps, null)(PeopleManager);
