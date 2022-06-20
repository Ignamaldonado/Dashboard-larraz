import React, {Component} from 'react';

class LastProduct extends Component{

	constructor(){
		super()
		this.state = {
			lastProduct: ''
		}
	}

	apiCall(url,handler){
		fetch(url)
			.then(res => res.json())
			.then(data => handler(data))
			.catch(console.log)
		}

	saveApi = product => {
		
		let savedProduct;
		for (let i = 0 ; i < product.data.length; i++) {
			 if (i === product.data.length -1) {
				savedProduct = product.data[i];
			 }
		}

		console.table(savedProduct)

		this.setState ({
			lastProduct: savedProduct
		})
	}


	componentDidMount(){
		this.apiCall('http://localhost:5000/api/products', this.saveApi)
	}


    render () {return (
        <>
					<div className="row">
						<div className="col-lg-6 mb-4  last-product-center">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
								</div>
								<div className="card-body">
									<p> Nombre: {this.state.lastProduct.nombre}</p>
									<p> Precio: ${this.state.lastProduct.precio}</p>
									<p> Descripcion: {this.state.lastProduct.description}</p>
								</div>
							</div>
						</div>
					</div>
        </>
    )}
}
export default LastProduct;