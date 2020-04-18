import React from 'react'
import './sidebar.scss';
import { Link } from 'react-router-dom';

const pageConfig = require('./pages_config.json')
function SideBar() {

    const listOfLinks = (pageConfig.pages || []).map(page => {
        console.log(page);
        const sideBarItem = <li key={page.key}><Link to={page.linkTo}>{page.pageName}</Link></li>
        return sideBarItem;
    })

    return (
        <div className="sidebar_container">
            {listOfLinks}
        </div>
    )
}

export default SideBar
