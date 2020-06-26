import React, { createRef, useReducer, useState } from "react";
import { useHistory, useParams, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import '../style/edit.css'
import backup from "../utils/html-element-check";
import ToolBar from './tool-bar'
import DocBoard from './doc-board'
import CommandContext from "../utils/context";
import logo from '../logo.svg'

const reducer = (state, action) => {
    switch (action.type) {
        case 'MODIFY':
            return { ...state, ...action.value }
        case 'CHANGE_SELECTION':
            return { ...state, extra: action.value }
        case 'CLEAR':
            return { ...state, extra: null }
    }
}

export default (props) => {
    const [state, dispatch] = useReducer(reducer, {
        backgroundColor: 'white',
        color: 'black',
        font: {
            description: 'SM',
            value: '3'
        },
        tool: {
            underline: false,
            italic: false,
            subscript: false,
            superscript: false,
            justifyLeft: true,
            justifyRight: false,
            justifyCenter: false,
            createLink: false,
            pre: false
        },

        // sub: false,
        // sup: false,
        ul: false,
        ol: false,

        // 左对齐
        outdent: false,

        // 右对齐
        indent: false,


    })

    return (
        <CommandContext.Provider value={ { state, dispatch } }>
            <div className={ 'editor' }>
                <ToolBar/>
                <DocBoard/>
                <div style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    color: 'white'
                }}>Made By Yezhikang with ❤</div>
                <img className={'back-image'} src={logo}/>
            </div>
        </CommandContext.Provider>
    )
}
