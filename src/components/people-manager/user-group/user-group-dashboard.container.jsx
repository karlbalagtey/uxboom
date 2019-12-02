import React, { Fragment } from "react";
import { connect } from "react-redux";
import { UserGroupContainer } from "./user-group-dashboard.styles";
import { selectUserCollection } from "../../../redux/user-group/user-group.selectors";

const UserGroupDashboard = ({ userList, match }) => {
    console.log(userList);
    console.log(match);
    // const { name, email } = userList;

    return (
        <Fragment>
            <section>
                <h2>User group</h2>
            </section>

            <UserGroupContainer>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>name here</td>
                        <td>email here</td>
                    </tr>
                </tbody>
            </UserGroupContainer>
        </Fragment>
    )
};

const mapStateToProps = (state, ownProps, match) => {
    console.log(ownProps);
    // return ({
    //     userList: selectUserCollection(ownProps.match.params.id)(state)
    // })
};

export default connect(mapStateToProps, null)(UserGroupDashboard);