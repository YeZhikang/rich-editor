import React, { createRef, useContext, useEffect, useState } from "react";
import { useHistory, useParams, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import '../style/edit.css'
import backup from "../utils/html-element-check";
import CommandContext from "../utils/context";
import ColorPicker from "./color-picker";
import FontSelection from "./font-selection";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    OrderedListOutlined,
    UnorderedListOutlined,
    AlignCenterOutlined,
    AlignLeftOutlined,
    AlignRightOutlined,
    LinkOutlined,
    FileImageOutlined,
    CodeOutlined,
    UnderlineOutlined,
    ItalicOutlined,
    FontSizeOutlined
} from '@ant-design/icons'

export default (props) => {

    const { state, dispatch } = useContext(CommandContext)
    const [currentColorTheme, setCurrentColorTheme] = useState(0)
    const colorPickerRef = createRef()
    const fontSelection = createRef()
    const fileRef = createRef()

    /**
     * 选择颜色主题，是背景颜色还是文字颜色
     * 打开或关闭调色盘
     * @param colorTheme
     */
    const handleChangeColor = (colorTheme) => {

        // if(!state.extra){
        //     dispatch({
        //         type: 'CHANGE_SELECTION',
        //         value: {
        //             backgroundColor: 'yellow'
        //         }
        //     })
        //
        //     let range = window.getSelection().getRangeAt(0),
        //         textEle = range.commonAncestorContainer;
        //     if(range.collapsed){
        //         resetRange(range.startContainer, range.startOffset, range.endContainer, range.endOffset)
        //         document.execCommand('backColor', false, 'yellow')
        //
        //     }else{
        //         document.execCommand('backColor', false, 'yellow')
        //         dispatch({
        //             type: 'CLEAR'
        //         })
        //     }
        // }else{
        //     dispatch({
        //         type: 'CLEAR',
        //     })
        //     let range = window.getSelection().getRangeAt(0),
        //         textEle = range.commonAncestorContainer;
        //     console.log(textEle)
        //     const range2 = document.createRange()
        //     // resetRange(range.startContainer, range.startOffset, range.endContainer, range.endOffset)
        //     // resetRange(range.startContainer, range.startOffset, range.endContainer, range.endOffset)
        //     document.execCommand('backColor', false, 'white')
        // }
        if (colorPickerRef.current.classList.contains('dis-none')) {
            colorPickerRef.current.classList.remove('dis-none')
            setCurrentColorTheme(colorTheme)
        } else {
            colorPickerRef.current.classList.add('dis-none')
        }
    }

    const handleChangeFontSize = () => {
        if (fontSelection.current.classList.contains('dis-none')) {
            fontSelection.current.classList.remove('dis-none')
        } else {
            fontSelection.current.classList.add('dis-none')
        }
    }

    const handleAddOl = () => {
        document.execCommand('insertOrderedList')
    }

    const handleAddUl = () => {
        document.execCommand('insertUnorderedList')
    }

    const handleAddLink = () => {
        const url = window.prompt('请输入链接地址');

        if (url) document.execCommand('createLink', false, url);
    }

    const handleAddPicture = () => {
        fileRef.current.click()
    }

    const handleSubmitPicture = (e) => {
        const file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let base64Img = reader.result;
            document.execCommand('insertImage', false, base64Img);
            fileRef.current.value = ''
        }
    }

    const handleAddCode = () => {
        if(state.tool.pre){
            document.execCommand('formatBlock', false, 'div')
        }else{
            document.execCommand('formatBlock', false, 'pre')
        }

        dispatch({
            type: 'MODIFY',
            value: {
                tool: {
                    ...state.tool,
                    pre: !state.tool.pre
                }
            }
        })
    }


    // 一些工具栏目的统一dispatch
    const handleChangeStatus = (statusName) => {
        const statusValue = state.tool[statusName]
        dispatch({
            type: 'MODIFY',
            value: {
                tool: {
                    ...state.tool,
                    justifyLeft: false,
                    justifyRight: false,
                    justifyCenter: false,
                    [statusName]: !statusValue
                }
            }
        })
        document.execCommand(statusName, false, null)
    }


    return (
        <div className={ 'tool-bar' }>
            <button
                className={ 'tool-button' }
                onClick={ () => handleChangeColor(0) }
            >
                <span
                    style={ {
                        backgroundColor: state.backgroundColor
                    } }
                    className={ 'current-color' }
                />
            </button>
            <button
                className={ 'tool-button font-button' }
                onClick={ () => handleChangeColor(1) }
            >
                A
                <span
                    style={ {
                        backgroundColor: state.color
                    } }
                    className={ 'current-font-color' }
                />
            </button>
            <button
                className={ 'tool-button font-button' }
                onClick={ () => handleChangeFontSize() }
            >
                <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    className=""
                    data-icon="font-size"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"></path>
                </svg>
                <FontSelection ref={ fontSelection }/>
            </button>

            <div className={ 'split-line' }/>

            <button
                className={ `tool-button font-button ${ state.tool.underline ? 'button-active' : null }` }
                onClick={ () => handleChangeStatus('underline') }
            >
                <span
                    style={ {
                        textDecoration: 'underline'
                    } }
                ><UnderlineOutlined/></span>
            </button>

            <button
                className={ `tool-button font-button ${ state.tool.italic ? 'button-active' : null }` }
                onClick={ () => handleChangeStatus('italic') }
            >
                <i
                    style={ {
                        fontSize: '14px'
                    } }
                ><ItalicOutlined/></i>
            </button>

            <button
                className={ `tool-button font-button ${ state.tool.superscript ? 'button-active' : null }` }
                onClick={ () => handleChangeStatus('superscript') }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                >X<sup>a</sup></span>
            </button>

            <button
                className={ `tool-button font-button ${ state.tool.subscript ? 'button-active' : null }` }
                onClick={ () => handleChangeStatus('subscript') }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                >X<sub>a</sub></span>
            </button>

            <button
                className={ `tool-button font-button ${ state.tool.pre ? 'button-active' : null }` }
                onClick={ () => handleAddCode() }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                ><CodeOutlined/></span>
            </button>
            <div className={ 'split-line' }/>
            <button
                className={ `tool-button font-button ${ state.tool.justifyLeft || (!state.tool.justifyLeft && !state.tool.justifyRight && !state.tool.justifyCenter) ? 'button-active' : null }` }
                onClick={ () => handleChangeStatus('justifyLeft') }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                ><AlignLeftOutlined/></span>
            </button>
            <button
                className={ `tool-button font-button ${ state.tool.justifyCenter ? 'button-active' : null }` }
                onClick={ () => handleChangeStatus('justifyCenter') }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                ><AlignCenterOutlined/></span>
            </button>
            <button
                className={ `tool-button font-button ${ state.tool.justifyRight ? 'button-active' : null }` }
                onClick={ () => handleChangeStatus('justifyRight') }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                ><AlignRightOutlined/></span>
            </button>

            <div className={ 'split-line' }/>
            <button
                className={ 'tool-button font-button' }
                onClick={ () => handleAddOl() }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                ><OrderedListOutlined/></span>
            </button>
            <button
                className={ 'tool-button font-button' }
                onClick={ () => handleAddUl() }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                ><UnorderedListOutlined/></span>
            </button>
            <div className={ 'split-line' }/>
            <button
                className={ 'tool-button font-button' }
                onClick={ () => handleAddLink() }
            >
                <span
                    style={ {
                        fontSize: '12px'
                    } }
                ><LinkOutlined/></span>
            </button>

            <button
                className={ 'tool-button font-button' }
                onClick={ () => handleAddPicture() }
            ><FileImageOutlined />
                <input
                    onChange={ handleSubmitPicture }
                    ref={ fileRef }
                    style={ {
                        display: 'none'
                    } }
                    type="file"
                    accept="image/gif, image/jpeg, image/png"
                />
            </button>


            <ColorPicker
                currentColorTheme={ currentColorTheme }
                ref={ colorPickerRef }
            />
        </div>
    )
}
