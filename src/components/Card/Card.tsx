import clsx from 'clsx';
import React from 'react'
import "./Card.css";

export type CardProps = React.HtmlHTMLAttributes<HTMLDivElement>

const Card = (props: CardProps) => {
    const {children, className, ...rest} = props;

    return (
        <div className={clsx("Card-root", className)} {...rest}>
           {children} 
        </div>
    )
}

export default Card
