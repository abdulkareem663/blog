import React from "react";


export default function Navbar() {
    let { loading, items, error } = useFetch('http://localhost:1337/api/navbar-items')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    console.log(items)
    return <>
        alksdf;lasdf
    </>
}