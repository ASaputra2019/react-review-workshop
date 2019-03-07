import React from 'react';

const ListEntry = ( props) => {
    return (
        <li onClick = {() => {props.hclick(props.item)} } >{props.item}</li>
    )
}

export default ListEntry;