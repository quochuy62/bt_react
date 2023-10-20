import React, {useState} from 'react';
import {connect} from 'react-redux';
import { submitCreator } from '../redux/React-Form/form-action';
const StudentDetails = (props) => {
    const [state, setState] = useState({
        value: {
            Id: "",
            Name: "",
            Phone: "",
            Email: ""
        },
        error: {
            Id: "",
            Name: "",
            Phone: "",
            Email: ""
        },
        touch: {
            Id: false,
            Name: false,
            Phone: false,
            Email: false
        }
    });
    const handleValidate = () => {
        const newError = {
            ...state.error
        };
        const {value} = state;

        for (let prop in value) {
            switch (prop) {
                case "Phone":
                    {
                        newError[prop] = "";
                        const REGEX_NUMBER = /^\d+$/;
                        if (! REGEX_NUMBER.test(value[prop])) {
                            newError[prop] = "Phải là số";
                        }
                        if (value[prop].length === 0) {
                            newError[prop] = "Vui lòng nhập số điện thoại";
                        }
                        break;
                    }
                case "Id":
                    {
                        newError[prop] = "";
                        if (!(Number(value[prop]) <= 999 && Number(value[prop]) >= 1)) {
                            newError[prop] = "Mã sinh viên phải nằm trong khoảng từ 1 đến 99";
                        }
                        const REGEX_NUMBER = /^\d+$/;
                        if (! REGEX_NUMBER.test(value[prop])) {
                            newError[prop] = "Vui lòng chỉ nhập số";
                        }
                        if (value[prop].length === 0) {
                            newError[prop] = "Vui lòng nhập mã sinh viên";
                        }
                        break;
                    }
                case "Email":
                    {
                        newError[prop] = "";
                        const REGEX_EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                        if (! REGEX_EMAIL.test(value[prop])) {
                            newError[prop] = "Email không hợp lệ.";
                        }
                        if (value[prop].length === 0) {
                            newError[prop] = "Vui lòng nhập Email";
                        }
                        break;
                    }
                case "Name":
                    {
                        newError[prop] = "";
                        if (value[prop].length === 0) {
                            newError[prop] = "Vui lòng nhập tên";
                        }
                        break;
                    }
                default:
                    break;
            }
        }
        setState((prevState) => ({
            ...prevState,
            error: newError
        }));

        return newError;
    };
    const handleChange = (event) => {
        const {target} = event;
        const {value, name} = target;

        setState((prevState) => ({
            ...prevState,
            value: {
                ...prevState.value,
                [name]: value
            }
        }));

        handleValidate();
    };
    const handleBlur = (event) => {
        const {name} = event.target;

        setState((prevState) => ({
            ...prevState,
            touch: {
                ...prevState.touch,
                [name]: true
            }
        }));

        handleValidate();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setState((prevState) => ({
            ...prevState,
            touch: {
                ...prevState.touch,
                Id: true,
                Name: true,
                Phone: true,
                Email: true
            }
        }));
        const newError = handleValidate();
        const ready = Object.values(newError).every((i) => i.length === 0);
        if (! ready) 
            return;
        const action = submitCreator(state.value);
        props.dispatch(action);
        console.log( state.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="bg-dark text-light">Thông tin sinh viên</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Mã SV</label>
                        <input onChange={handleChange}
                            value={state.value.Id}
                            onBlur={handleBlur}
                            name="Id"
                            type="id"
                            className="form-control"
                            id="input_Id"/> {
                          state.touch.Id && state.error.Id && (<p className="text-danger">{state.error.Id}</p>)
                            }
                    </div>
                    <div className="form-group col-md-6">
                        <label>Họ tên</label>
                        <input onChange={handleChange}
                            value={state.value.Name}
                            onBlur={handleBlur}
                            name="Name"
                            type="Text"
                            className="form-control"
                            id="Name"/> {
                          state.touch.Name && state.error.Name && (<p className="text-danger">{state.error.Name}</p>)
                          } 
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Số điện thoại</label>
                        <input onChange={handleChange}
                            value={state.value.Phone}
                            onBlur={handleBlur}
                            name="Phone"
                            type="text"
                            className="form-control"
                            id="Phone"/> {
                          state.touch.Phone && state.error.Phone && (<p className="text-danger">{state.error.Phone}</p>)
                        } 
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input onChange={handleChange}
                            value={state.value.Email}
                            onBlur={handleBlur}
                            name="Email"
                            type="text"
                            className="form-control"
                            id="Email"/> {
                          state.touch.Email && state.error.Email && (<p className="text-danger">{state.error.Email}</p>)
                        } 
                    </div>
                </div>
                <button type="submit" className="btn btn-success">
                    Thêm sinh viên
                </button>
            </form>
        </div>
    );
};
export default connect()(StudentDetails);
