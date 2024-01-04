import React from "react";

const FeatureItemComponent = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-md">
            {icon}
            <h3 className="font-medium">
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
    );
};

export default FeatureItemComponent;
