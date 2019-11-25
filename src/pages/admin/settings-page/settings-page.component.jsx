import React, { Fragment } from "react";

import { SettingsPageContainer } from "./settings-page.styles";

const SettingsPage = () => (
    <Fragment>
        <section>
            <h1>Manage UXBoom CMS settings</h1>
        </section>
        <SettingsPageContainer>
            <section>
                <form>
                    <div>
                        <label>Analytics</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Site admin email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Site name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Site support email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <button type="submit">Save settings</button>
                    </div>
                </form>
            </section>
        </SettingsPageContainer>
    </Fragment>
);

export default SettingsPage;
