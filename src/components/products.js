import React from 'react'
import uniqueid from 'uniqid'

const Products = ({ products }) => {
      
    const cardWidth = 540;

    const cardStyle={
        width: '300px',
        height: 'auto'
    }

    return (
        <div>
            <center><h1>Products List</h1></center>
            {products.map((product) => (
                <div key={uniqueid()} className="card">
                    <div className="card-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img style={cardStyle} className="card-img-top" src={product.img} alt="Card image cap"></img>
                                    </td>
                                    <td>
                                        <h5 className="card-title">{product.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{product.description}</h6>
                                        <p className="card-text">{product.type}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                // <div key={uniqueid()} className="card" style={divStyle}>
                //     <img className="card-img-top" src={product.img} alt="Card image cap"></img>
                //     <div className="card-body">
                //         <h5 className="card-title">{product.name}</h5>
                //         <p className="card-text">{product.type}</p>
                //         {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                //     </div>
                // </div>
            ))}
        </div>
    )
};

export default Products