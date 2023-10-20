import React, { useState } from "react";
import "./index.css";
import {chosenCreator, deleteCreator} from "../../redux/reducer/bookTicket/creator.js";
import {useDispatch, useSelector} from "react-redux";
const chairList = require("./danhsachGhe.json");


const Index = () => {
  const dispatch = useDispatch();
  const handleBook =(value, check) => {
      if(check){
        dispatch(chosenCreator(value));
      }else{
        dispatch(deleteCreator(value));
      }
  }
  return (
      <div>
  <h1>Movie Seat Selection</h1>
  <div className="container">
    <div className="w3ls-reg">
      <div className="inputForm">
        <h2>fill the required details below and select your seats</h2>



      </div>
      <div className="seatStructure txt-center">
        <p id="notification" /><table id="seatsBlock">
          <tbody><tr>
              <td />
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            {chairList.map(row => {
              return(
                <tr key={row.hang}>
                  <td>{row.hang}</td>
                  {row.danhSachGhe.map(col => {
                    return(
                      <td key={col.soGhe}>
                        <input type="checkbox" className="seats" defaultValue={col.soGhe} onClick={e => handleBook(col, e.target.checked)}/>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody></table>
</div>
    </div>
  </div>
  <div className="copy-wthree">
    <p>© 2018 Movie Seat Selection . All Rights Reserved | Design by
      <a href="https://w3layouts.com/" target="_blank">W3layouts</a>
    </p>
  </div>
</div>

      )
}

export default Index;   