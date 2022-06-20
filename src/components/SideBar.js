import React from 'react';
import image from '../assets/images/LarrazLogo.png';

function SideBar(){
    return(
        <React.Fragment>

            <ul className="navbar-nav sidebar-color sidebar sidebar-dark accordion" id="accordionSidebar">


                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon logo-cont">
                        <img className="w-100" src={image} alt="Larraz Store"/>
                    </div>
                </a>

                <div className="dashboard-link">
                <hr className="sidebar-divider my-0"/>


    <li className="nav-item active">
    <a className="nav-link" href="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard - Larraz Store</span></a>
</li>


<hr className="sidebar-divider d-none d-md-block"/>
                </div>


            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;