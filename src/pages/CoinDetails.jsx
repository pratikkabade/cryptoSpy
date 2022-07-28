import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Globalcontext } from "./../App";

function CoinDetails() {
    const { id } = useParams();
    const { listOfCoin } = useContext(Globalcontext);

    if (listOfCoin.length) {
        return (
            <div className="container bg-red">
                <div style={{ minHeight: '100vh' }} className="container d-flex justify-content-center align-items-center">
                    <div className="col-md-6 card p-3">
                        <div className="col-md-6">
                            <img src={listOfCoin[id].icon} alt="coin" className="img-fluid" />
                        </div>
                        <table className="table-bordered">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{listOfCoin[id].name}</td>
                                </tr>
                                {/*
                                show whatever field you want
                                */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
            <img width={120} src="https://th.bing.com/th/id/R.7daab030fcdff132997fe0440b134401?rik=ca8lHakezWuvGg&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f09%2fanimated-loading-gif-2.gif&ehk=t8uuZGuGKdPKFs6E8fBkCtHuJ625O7d5MNiZ8mlcqDY%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
    );
}

export default CoinDetails