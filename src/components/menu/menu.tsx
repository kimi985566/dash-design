import React, { FC, ReactNode } from "react";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: number) => void;
    children?: ReactNode;
}

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, defaultIndex, children } = props
    const classes = classNames('dash-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal'
}

export default Menu