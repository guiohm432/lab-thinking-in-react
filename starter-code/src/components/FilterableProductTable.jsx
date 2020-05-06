import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export class FilterableProductTable extends Component {

    state = {
        search: "",
        checked: false
      };

    handleSearch = (event) => {
        this.setState({ search: event.target.value });
      };
    handleChecked = (event) => {
        this.setState ({ checked: event.target.checked })

      }
      

    render() {

        const products = this.props.products.data

        const filteredProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(this.state.search.toLowerCase());
          });
        const stockedProductsArray = filteredProducts.filter((product) => {
            return product.stocked
          });

        if (this.state.checked){
            return (
                <>
                <div>
                <SearchBar clbk={this.handleSearch} handleChecked={this.handleChecked} />
                </div>
                <div>
                <ProductTable products ={stockedProductsArray}/>
                </div>
                </>
            )
        } else {
            return (
                <>
                <div>
                <SearchBar clbk={this.handleSearch} handleChecked={this.handleChecked} />
                </div>
                <div>
                <ProductTable products ={filteredProducts}/>
                </div>
                </>
            )
        }   
    }
}

export default FilterableProductTable
