import axios from "axios";
import React from 'react'

const setupInterceptor = (history) => {
    axios.interceptors.response.use(response => {
        //console.log(response);
        // Edit response config
        // if(response.code===500){
        //     Router.push('/');
        // }
        //console.log(response);
        console.log(response);
        if(response.data.code===500){
            //
            
            history.push('/');
        }
        return response;
        
    }, error => {
        // console.log(error);
        // console.log(error.response.data);
        if(error.response.data.code===500){
            //
            
            history.push('/');
        }
        //return Promise.reject(error);
    });
}

export default setupInterceptor;

// axios.interceptors.response.use(response => {
//     //console.log(response);
//     // Edit response config
//     // if(response.code===500){
//     //     Router.push('/');
//     // }
//     console.log(response);
//     return response;
// }, error => {
//     console.log(error);
//     if(error.response.data.code===500){
//         //
        
//         history.push('/')
//     }
//     return Promise.reject(error);
// });