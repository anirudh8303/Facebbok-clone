import React from 'react'
import "./SidebarRow.css"
import Avatar from '@material-ui/core/Avatar';

function SidebarRow({ src, Icon, title}) {
    return (
        <div className="sidebarrow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
           <p>{title}</p>
        </div>
    )
}

export default SidebarRow
