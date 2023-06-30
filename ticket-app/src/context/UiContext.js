import React, { createContext, useState } from 'react'

export const UiContext = createContext();


export const UiProvider = ({ children }) => {

    const [ actionMenu, setActionMenu ] = useState(false);

    const showMenu = () => {
        setActionMenu( false );
    }

    const hideMenu = () => {
        setActionMenu( true );
    }


    return (
        <UiContext.Provider value={{
            actionMenu,
            showMenu, 
            hideMenu
        }}>
            { children }
        </UiContext.Provider>
    )
}