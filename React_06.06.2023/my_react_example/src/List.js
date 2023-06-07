import React from "react";

function List ({listItems}) {
    return(
        <List>
            <ul>
                {listItems.map((listItems,index) => (
                    <li key={index}>{listItems} </li>
                ))}
            </ul>
        </List>
    );
}

export default List;