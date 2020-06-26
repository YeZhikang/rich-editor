import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// /**
//  * MODEL, createPortal 的用法
//  */
// const Modal = (props) => {
//     const el = document.createElement('div')
//     const root = document.createElement('div')
//     root.style.position = 'fixed'
//     root.style.top = '0'
//     root.style.bottom = '0'
//     root.style.left = '0'
//     root.style.right = '0'
//     root.style.backgroundColor = 'rgba(0,0,0,0.2)'
//
//     useEffect(() => {
//         document.body.appendChild(root)
//         root.appendChild(el)
//         return () => {
//             root.remove()
//         }
//     },[])
//
//     return ReactDOM.createPortal(
//         props.children,
//         el
//     )
// }
//
//
// const PlayGround = () => {
//     const [show, setShow] = useState(false)
//     const handleShow = () => {
//         setShow(show => !show)
//     }
//
//     const handleClick = () => {
//         console.log('yep')
//     }
//
//
//
//     return (
//         <div onClick={handleClick} style={{color: 'white'}}>
//             <div onClick={handleShow}>Bonjour</div>
//             { show ? <Modal>
//                 <div onClick={handleShow}>HOllla</div>
//             </Modal> : null}
//
//         </div>
//     )
// }

const Child = ({fetchData}) => {
    const [data, setData] = useState(null)

    useEffect( () => {
        fetchData().then(res => {
            console.log(res.data)
            setData(res.data)

        })

    }, [fetchData])

    return(
        <div>{ data }</div>
    )
}

const PlayGround = () => {
    const [query, setQuery] = useState('react')

    const fetchData = useCallback(async () => {
        return await axios('http://127.0.0.1:3020/api/index?query=' + query)
    }, [query])

    function handleClick() {
        setQuery(query => query + '231231')
    }

    useEffect(() => {
        console.log(query)
    },[query])

    return(
        <>
            <div onClick={handleClick}>holl</div>
            <Child fetchData={fetchData}/>
        </>
    )
}

export default PlayGround
