import { createContext } from 'react';

export const AppContext = createContext({
    contentType: '',
    setContentType: () => {}
});