import React, { useState } from 'react';
import './ProductsList.css';
import { NavLink } from "react-router-dom";
import { productData } from "../data.js";



function ProductsList() {
    const [products, setProducts] = useState(
        productData
    );

    return (
        <div className="container">
            <h3 className="p-3 text-center">רשימת הקניות שלי</h3>
            <h4 className="p-3 text-center">יש ללחוץ על המוצר לפרטים נוספים</h4>
                <table className="table table-striped table-bordered">

                    <tbody>
                        {products && products.map((product, key) =>
                            <tr key={product.id}>
                                <td>
                                    <NavLink to={"/products/details/" + key}>
                                        שם המוצר:  {product.name}
                                    </NavLink>
                                    <br></br>
                                    <NavLink to={"/products/details/" + key}>
                                        מחיר: {product.price} ש"ח
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink to={"/products/details/" + key}>
                                        <img src={product.image1} alt={product.name} width="100" height="100"></img>
                                    </NavLink>
                                </td>

                            </tr>
                        )}
                    </tbody>
                </table>
        </div>
    );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ProductsList;