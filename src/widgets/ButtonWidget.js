import React from "react";

const ButtonWidget = ({ name }) => {
    return (
        <button className="bg-secondary text-white bg-opacity-80 hover:bg-opacity-100 rounded-md px-6 py-3 font-semibold">
            {name}
        </button>
    )
}

export default ButtonWidget;