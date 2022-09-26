import React, { FC, ReactNode } from "react";
import classNames from "classnames";

export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled
    })

    return (
        <li className={classes} style={style}>
            {children}
        </li>
    )
}

export default MenuItem