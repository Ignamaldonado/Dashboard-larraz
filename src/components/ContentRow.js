import React, {useState, useEffect}  from 'react';
import SmallCardUsers from './SmallCardUsers';
import SmallCardProducts from './SmallCardProducts'













function ContentRowTop(){

    const userKey = 'http://localhost:5000/api/users'
    const productKey = "http://localhost:5000/api/products"
   
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])

    useEffect (() => {
        fetch(userKey)
            .then(data => data.json())
                .then(users => {
                    console.log(users.data.length)
                    setUsers(users.data)
                })
    } , [])

    useEffect (() => {
        fetch(productKey)
            .then(data => data.json())
                .then(products => {
                    setProducts(products.data)
                })
    } , [])
    
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row app-center">         
                <SmallCardUsers  valor={users.length}/>
                <SmallCardProducts valor={products.length}/>          
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;