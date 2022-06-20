import React, {Component} from 'react';

import User from './User';

class UserList extends Component {
	constructor(){
		super()
		this.state = {
			userList: []
		}
	}

	apiCall(url,handler){
		fetch(url)
			.then(res => res.json())
			.then(data => handler(data))
			.catch(console.log)
		}

	saveApi = user => {
		this.setState ({
			userList: user.data
		})
	}


	componentDidMount(){
		this.apiCall('http://localhost:5000/api/users', this.saveApi)
	}

    render() {return(
        <>
				    {/*<!-- PRODUCTS LIST -->*/}
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4 h3-text">
						<h1 className="h3  h3-text text-gray-800">Lista de usuarios</h1>
					</div>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Usuario</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
										</tr>
									</thead>
									<tbody>
									{
									this.state.userList.map((user,index)=>{
										return <User id={user.id} username={user.username} name={user.name} surname={user.surname} email={user.email} key={index}/>
									})
									}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </>
    )}
}
export default UserList;