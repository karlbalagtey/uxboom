import React from "react";

import { SettingsPageContainer } from "./settings-page.styles";

const SettingsPage = () => (
    <SettingsPageContainer>
        <section>
            <h1>Manage UXBoom CMS settings</h1>
        </section>
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
            </form>
        </section>
    </SettingsPageContainer>
);

export default SettingsPage;
