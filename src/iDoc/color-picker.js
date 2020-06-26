import React, { createRef, useContext, useEffect, useState } from "react";
import { useHistory, useParams, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import '../style/edit.css'
import CommandContext from "../utils/context";


function resetRange(startContainer, startOffset, endContainer, endOffset) {
    let selection = window.getSelection();
    selection.removeAllRanges();
    let range = document.createRange();
    console.log(startContainer)
    console.log(endContainer)
    range.setStart(startContainer, startOffset);
    range.setEnd(endContainer, endOffset);
    selection.addRange(range);
}

const ColorUnit = (props) => {
    const colorRef = createRef()

    function handlePickColor() {
        props.handlePickColor(props.bgColor)
    }

    return (
        <button
            ref={ colorRef }
            className={ 'color-unit' }
            onClick={ handlePickColor }
            style={ { backgroundColor: props.bgColor } }
        />
    )
}

const colorArr = [
    '#000000',
    '#FFFFFF',
    '#DDDDDD',
    '#888888',
    '#FFC0CB',
    '#DB7093',
    '#C71585',
    '#DDA0DD',
    '#FF00FF',
    '#BA55D3',
    '#4B0082',
    '#7B68EE',
    '#E6E6FA',
    '#0000CD',
    '#000080',
    '#B0C4DE',
    '#1E90FF',
    '#87CEFA',
    '#ADD8E6',
    '#F0FFFF',
    '#00FFFF',
    '#2F4F4F',
    '#48D1CC',
    '#7FFFAA',
    '#F5FFFA',
    '#F0FFF0',
    '#8FBC8F',
    '#228B22',
    '#7FFF00',
    '#556B2F',
    '#FFFFF0',
    '#808000',
    '#EEE8AA',
    '#FFF8DC',
    '#FDF5E6',
    '#FFA500',
    '#FFDEAD',
    '#DEB887',
    '#FAF0E6',
    '#F4A460',
    '#FFF5EE',
    '#FF7F50',
    '#FF6347',
    '#FFFAFA',
    '#CD5C5C',
    '#B22222',
    '#D3D3D3',
    '#808080'
]

const ColorPicker = React.forwardRef((props, ref) => {
    const { state, dispatch } = useContext(CommandContext)

    const handlePickColor = (color) => {
        let value;
        if (props.currentColorTheme === 0) {
            value = {
                backgroundColor: color
            }
            document.execCommand('backColor', false, color)

        } else if (props.currentColorTheme === 1) {
            value = {
                color
            }
            document.execCommand('foreColor', false, color)
        }

        dispatch({
            type: 'MODIFY',
            value
        });


        if (ref.current.classList.contains('dis-none')) {
            ref.current.classList.remove('dis-none')
        } else {
            ref.current.classList.add('dis-none')
        }

        // document.execCommand('backColor', false, color)
    }

    return (
        <div
            ref={ ref }
            className={ 'color-picker dis-none' }
        >
            { colorArr.map(item => (
                <ColorUnit
                    key={ item }
                    handlePickColor={ handlePickColor }
                    bgColor={ item }
                />
            )) }

            <span style={{
                fontSize: '13px',
                marginLeft: '3px',
                marginTop: '10px',
                width: '100%',
                textAlign:'right'
            }}>{ props.currentColorTheme ? '字体颜色': '背景颜色' }</span>
        </div>
    )
})

export default ColorPicker
