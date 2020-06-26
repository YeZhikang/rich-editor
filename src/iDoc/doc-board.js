import React, { createRef, useContext, useEffect, useState } from "react";
import {useHistory, useParams, Link, Switch,Route, useRouteMatch} from 'react-router-dom'
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

export default (props) => {

    const {state, dispatch} = useContext(CommandContext)

    const boardRef = createRef()
    const unFocusRef = createRef()

    useEffect(() => {

        boardRef.current.focus()
        boardRef.current.blur()
        // const range = window.getSelection().getRangeAt(0)
        // if(!range.collapsed) {
        //     boardRef.current.blur()
        // }
    },[state])

    const handleFocus = () => {

        // document.execCommand('removeFormat', false, null)
        // document.execCommand('backColor', false, state.backgroundColor)
        // document.execCommand('foreColor', false, state.color)
        // document.execCommand('fontSize', false, state.font.value)
        //
        // for(let status in state.tool){
        //     if(state.tool[status]){
        //         document.execCommand(status, false, null)
        //     }
        // }
    }

    return(
        <>
            <div onFocus={handleFocus} ref={boardRef} contentEditable={true} className={'doc-board'}>
            </div>
            <div ref={unFocusRef}/>
        </>
    )
}
