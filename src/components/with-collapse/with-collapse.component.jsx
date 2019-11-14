import React from "react";

const WithCollapse = WrappedComponent => {
    const Collapse = ({ isCollapsed, ...otherProps }) => {
        return isCollapsed ? (
            <section className="dashboard-panel collapsed">
                <WrappedComponent {...otherProps} />
            </section>
        ) : (
            <section className="dashboard-panel">
                <WrappedComponent {...otherProps} />
            </section>
        );
    };

    return Collapse;
};

export default WithCollapse;