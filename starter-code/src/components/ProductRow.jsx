import React from 'react'

function ProductRow({product}) {

    if (product.stocked){
        return (
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td className="red">{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
    
    
}

export default ProductRow
