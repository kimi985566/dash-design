import React, { FC, ReactNode, createContext, useState } from "react";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: string) => void;
    children?: ReactNode;
}

interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, defaultIndex, children, onSelect } = props

    const [currentActive, setCurrentActive] = useState(defaultIndex)
    const handleClick = (index: string) => {
        setCurrentActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }

    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick
    }

    const classes = classNames('dash-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal'
}

export default Menu