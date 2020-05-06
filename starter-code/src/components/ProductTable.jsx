import React from 'react'
import ProductRow from "./ProductRow"

function ProductTable(props) {
    const products = props.products
    console.log(products)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product,index)=>(
                    <ProductRow product={product} key={index} index={index} />
                ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable
