import React from "react";

export default function Input(props: any): React.JSX.Element {
    return (
        <>
            <input {...props.attributes}/>
        </>
    );
}