
import { useContext, useEffect } from 'react'
import { UiContext } from '../context/UiContext'

export const useHideMenu = ( action ) => {

    const { showMenu, hideMenu } = useContext( UiContext );

    useEffect(() => {
        
        if ( action ) {
            hideMenu();
        } else {
            showMenu()
        }

    }, [ action, hideMenu, showMenu ])

}