import React from 'react';
import ContentRow from './ContentRow';
function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4 h3-text">
						<h1 className="h3  h3-text text-gray-800">App Dashboard</h1>
					</div>
					<ContentRow />
				</div>


        </React.Fragment>
    )

}
export default ContentRowTop;