import React, { useEffect, useState } from "react";
import './Home.css';

export const Home = () => {
    return(
        <div className="container d-flex justify-content-center flex-column">
            <div className="row">
                <h1 className="row d-flex justify-content-center">Merry Christmas</h1>
            </div>
            <img
                className="row d-flex justify-content-center"
                src="https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTY4ODE4ODA4MzY1MDAwNDY1/christmas-gettyimages-184652817.jpg"
            />
            <div className="row">
                <p className="row d-flex justify-content-center">This is the personal paragraph!</p>
            </div>
        </div>
    );
};