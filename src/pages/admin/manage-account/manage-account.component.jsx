import React, { Fragment } from "react";

import { ManageAccountContainer } from "./manage-account.styles";

const ManageAccount = () => (
    <Fragment>
        <section>
            <h1>Manage Account</h1>
        </section>
        <ManageAccountContainer>
            <p>You can use this form to update your account details. If you leave the password fields blank your password will not be changed.</p>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Current password</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>New password</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Confirm new password</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </ManageAccountContainer>
    </Fragment>
);

export default ManageAccount;