import React, { createRef, useContext, useEffect, useState } from "react";
import { useHistory, useParams, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import '../style/edit.css'
import CommandContext from "../utils/context";

const fontArr = [
    { value: '2', description: 'XS' },
    { value: '3', description: 'SM' },
    { value: '4', description: 'MD' },
    { value: '5', description: 'LM' },
    { value: '6', description: 'LG' },
    { value: '7', description: 'MA' }
]

const FontSelection = React.forwardRef((props, ref) => {
    const { state, dispatch } = useContext(CommandContext)

    const handleChangeFontSize = (font) => {
        dispatch({
            type: 'MODIFY',
            value: {
                font
            }
        })

        document.execCommand('fontSize', false, font.value)
    }

    return (
        <div
            ref={ ref }
            className={ 'font-selection dis-none' }
        >
            {
                fontArr.map(item => (
                    <button
                        onClick={ () => handleChangeFontSize(item) }
                        key={ item.description }
                        className={ 'without-style-button font-size-button' }
                    ><font size={ item.value }>{ item.description }</font></button>
                ))
            }
        </div>
    )
})

export default FontSelection
