import React from 'react';
 const emp = (props) => {
     return(
         <tr width ='50%'>
            <td>{props.product}</td>
            <td>{props.price}</td>
            <td>{props.children}</td>
            <td><button onClick={props.deletEvent}>Delete</button></td>
         </tr>
     )
 };
 export default emp;