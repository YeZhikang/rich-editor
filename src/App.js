import React, {
    useState,
    useEffect,
    useContext,
    useReducer,
    useCallback,
    createContext,
    createRef,
    useMemo
} from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router/index'


function App() {
    return (
        <Router/>
    )
}

export default App;
