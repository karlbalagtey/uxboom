import React, { Fragment } from "react";
import { connect } from "react-redux";
import { UserGroupContainer } from "./user-group-dashboard.styles";

const UserGroupDashboard = ({ title, userGroups }) => {
    console.log(title);

    return (
        <Fragment>
            <section>
                <h2>{title}</h2>
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
                        <td></td>
                    </tr>
                </tbody>
            </UserGroupContainer>
        </Fragment>
    )
};


const mapStateToProps = createStructuredSelector({
    userGroups: selectUserGroupCollection
});


export default connect(mapStateToProps, null)(UserGroupDashboard);