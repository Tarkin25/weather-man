import clsx from 'clsx';
import React from 'react'

export type CardContentProps = React.HtmlHTMLAttributes<HTMLDivElement>;

const CardContent = (props: CardContentProps) => {

    const {children, className, ...rest} = props;

    return (
        <div className={clsx("CardContent-root", className)} {...rest}>
           {children} 
        </div>
    )
}

export default CardContent
