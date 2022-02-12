import React from "react";
import "../styles/Mystyles.css"

const Pagination = ({ previous, next, page }) => {


    return(
        <>
            <button className="btn btn-outline-danger btn-previous" onClick={previous}>{"<Anterior"}</button>
            {/* <button className="btn btn-primary" >{page}</button> */}
            <button className="btn btn-outline-danger btn-next" onClick={next}>{"Siguiente>"}</button>
        </>
    );
}

export default Pagination;