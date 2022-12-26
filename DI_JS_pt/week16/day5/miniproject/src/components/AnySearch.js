import React from "react";
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';

const AnySearch = (props) => {

    const [imgList, setImages] = useState({
        images: [],

    })


    useEffect(() => {
        console.log(`use efect`)
        setImages({
            images: props.list
        })
    }, [props.list])

    console.log(`list we got from server ${props.list}`)
    return (
        <div>{
            imgList.images.map((item, i) => {
                return (
                    <img src={item.src.small} />
                )
            })
        }
        </div>
    );
    
}



const mapStateToProps = (state) => {
    return {
        list: state.imageList
    }
}
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       searchSubmit: () => dispatch(searchSubmit()),
//       searchInput: (txt)=> dispatch(searchInput(txt))

//     }

//   }

export default connect(mapStateToProps)(AnySearch);