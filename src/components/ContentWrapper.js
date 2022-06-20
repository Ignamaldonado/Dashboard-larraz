import React from 'react';
import ContentRowTop from './ContentRowTop';
import UserList from './UserList';
import Footer from './Footer';
import LastProduct from './LastProduct'
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop />
                    <UserList />
                    <LastProduct />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;