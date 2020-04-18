import React from 'react'
const pageConfig = require('./pages_config.json')
function SideBar() {

    const listOfLinks = (pageConfig.pages || []).map(page => {
        const li = <li>Test</li>
        return li;
    })

    return ( 
        <div className="sidebar_container">
            <ul>
                {listOfLinks}
            </ul>            
        </div>
    )
}

export default SideBar
