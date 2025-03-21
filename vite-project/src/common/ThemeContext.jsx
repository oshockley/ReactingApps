import React, { createContext, useContex, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContex(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, seTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );
};