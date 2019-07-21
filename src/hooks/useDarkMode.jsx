import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage'

const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage('key')

    useEffect(() => {
        if(darkValue === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkValue])

    return[darkValue, setDarkValue]
}

export default useDarkMode