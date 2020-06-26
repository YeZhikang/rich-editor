import React from "react";
import {useHistory, useParams, Link, Switch,Route, useRouteMatch} from 'react-router-dom'
import '../style/edit.css'
import backup from "../utils/html-element-check";

// export default (props) => {
//
//     const match = useRouteMatch()
//     console.log(match)
//
//     return(
//         <div>
//             hello
//             <div>
//                 <Link to={`${match.path}`}>Index</Link>
//                 <Link to={`${match.path}/4`}>4</Link>
//                 <Link to={`${match.path}/8`}>8</Link>
//             </div>
//             <Switch>
//                 <Route exact path={match.path}>
//                     Sorry,Please Select A Id
//                 </Route>
//                 <Route path={`${match.path}/:id`}>
//                     <Main/>
//                 </Route>
//             </Switch>
//         </div>
//     )
// }
//
// const Main = () => {
//     const params = useParams()
//     console.log(params)
//     return(
//         <div>
//             { params.id }
//         </div>
//     )
// }
export default (props) => {
    // function handleKeyDown(e) {
    //     const editArea = document.querySelector('.edit-area')
    //     if(e.keyCode === 13){
    //         const elCache = backup([editArea])
    //         for(let el of elCache){
    //             const text = el.firstChild.textContent
    //             if(/#+\s.+/.test(text)){
    //                 const matchData = text.match(/#*/)
    //                 const h1 = document.createElement(`h${matchData[0].length}`)
    //                 h1.classList.add(`edit-h${matchData[0].length}`)
    //                 h1.textContent = text.slice(matchData[0].length+1)
    //                 el.replaceChild(h1,el.firstChild )
    //             }
    //         }
    //     }
    //
    //     if(e.keyCode === 56){
    //         const elCache = backup([editArea])
    //         for(let el of elCache){
    //             const text = el.firstChild.textContent
    //             const r = /\*.+?\*/g
    //             if(text.match(r)){
    //                 const result = r.exec(text)
    //
    //                 const strong = document.createElement('strong')
    //                 strong.textContent = result[0].slice(1,-1)
    //                 el.replaceChild(strong, el.firstChild)
    //                 el.appendChild(document.createElement('span'))
    //             }
    //         }
    //     }
    // }

    return(
        <div>

        </div>
    )
}
