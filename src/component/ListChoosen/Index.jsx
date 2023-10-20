import React, { useEffect, useState } from "react";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {deleteCreator} from "../../redux/reducer/bookTicket/creator.js";


const List = () => {
  const data = useSelector(state => state.bookTicketReducer);

return (
    <div className="nav-right-choose">
        <h2 className="title-list">DANH SÁCH GHÉ ĐÃ CHỌN</h2>
        <div><div className="color-box orange"></div> <span>Ghế đã đặt</span></div>
        <div><div className="color-box green"></div> <span>Ghế đang chọn</span></div>
        <div><div className="color-box white"></div> <span>Ghế chưa đặt</span></div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Số ghế</th>
      <th scope="col">Giá</th>
      <th scope="col">Hủy</th>
    </tr>
  </thead>
  <tbody>
    {data.chairs.map(chair => {
      return (
        <tr key={chair.soGhe}>
          <td>{chair.soGhe}</td>
          <td>{chair.gia}</td>
          <td><span>X</span></td>
        </tr>
      )
    })}
    <tr>
      <td>Tổng tiền</td>
      <td>{data.cost}</td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
)
}
 export default List;