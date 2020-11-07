import clsx from 'clsx';
import React from 'react'
import "./CloseButton.css"

export type CloseButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">

const CloseButton = (props: CloseButtonProps) => {

    const {className, ...rest} = props;

    return (
        <button className={clsx("CloseButton-root", className)} {...rest}>
           &times; 
        </button>
    )
}

export default CloseButton
