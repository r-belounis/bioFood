import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getDataRequest } from '../../config/actions/data';

const Products = props => {

    const [data, setData] = useState(props);

    useEffect(() =>{ setData(getDataRequest())}, [])

    // Testing fetchs
    console.log("résultat du fetch", data)
    // console.log("résultat du fetch 2", Object.values(data))

    // console.log("résultat du map de data",
    //     Object.values(data).map(item => (
    //     <p key={item.id}>{item.name}</p>
    // )))

    console.log("résultat du map de data",
        data.map(item => (
        <p key={item.id}>{item.name}</p>
    )))


    return (
        <>
            {/* {Object.entries(data).map(item => (
                <p key={item.id}>{item.name}</p>
            ))} */}
        </>
    )
}

// redux providing state takeover
const mapStateToProps = (state) => {
    // console.log("Product#State ->", state);
    return {
        success: false,
        data: state.data.food
        // data: console.log(state.data.food)

    }
}
// export default connect(state => ({ data: state.data.foodList }))(Products)
export default connect(mapStateToProps, { getDataRequest })(Products)