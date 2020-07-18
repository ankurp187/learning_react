import React from 'react';

import './sideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if(props.show){
        drawerClasses = 'sideDrawer open'
    }
    return (
        <nav className={drawerClasses} >
            <ul>
                <li><a href="/" >Products</a></li>
                <li><a href="/" >Users</a></li>
            </ul>
        </nav>
    );
}
export default sideDrawer;