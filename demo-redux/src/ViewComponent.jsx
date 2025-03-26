import React from "react";
import { useSelector } from "react-redux";

const ViewComponent = () => {

    console.log('ViewComponent')

    const pizzas = useSelector((state) => state.pizzas)

    return (
        <>
            <p>View component</p>
            <p>Il y a {pizzas.length} pizza(s)</p>
        </>
    )
}

export default ViewComponent