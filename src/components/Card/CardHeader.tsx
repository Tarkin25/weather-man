import clsx from 'clsx';
import React, { ReactNode } from 'react'

export type CardHeaderProps = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "title"> & {
    children: ReactNode;
    action?: ReactNode;
};

const CardHeader = (props: CardHeaderProps) => {

    const {className, children, action, ...rest} = props;

    return (
        <div className={clsx("CardHeader-root", className)} {...rest}>
            <div className="CardHeader-title">
                {children}
            </div>
            {action}
        </div>
    )
}

export default CardHeader
