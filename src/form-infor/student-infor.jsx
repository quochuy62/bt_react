import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { editCreator, deleteCreator } from "../redux/React-Form/form-action";

const StudentInfor = () => {
  // const dispatch = useDispatch();
  const listStudent = useSelector(state => state.listStudent);
  
  return (
    <div>
      <table className="table mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mã SV</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.Id}</th>
              <td>{student.Name}</td>
              <td>{student.Phone}</td>
              <td>{student.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

  export default StudentInfor;