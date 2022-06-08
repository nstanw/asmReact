import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { useSelector, useDispatch } from "react-redux";
import {
  axiosDeleteStaff,
  axiosGetListStaff,
  axiosPostStaff,
} from "../redux/feature/staffSlice";
import Loading from "./Loading";

function ListStaffs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosGetListStaff());
  }, []);

  //get state in store
  const staffInState = useSelector((state) => state);

  //get staff in server to store
  let staffs = staffInState.getStaffs.listStaff.listStaff;

  // staffs = changeSttId();
  console.log("staffs", staffs);

  const [newStaff, setNewStaff] = useState({
    id: 1,
    name: "",
    doB: "",
    salaryScale: 0,
    startDate: "",
    department: "",
    annualLeave: 0,
    overTime: 0,
    image: "/assets/images/alberto.png",
  });
  const [isOpenModal, setOpenModal] = useState(false);

  const handleSubmit = (values, e) => {
    //test form
    console.log("Current State is: " + JSON.stringify(values));

    //set id
    const idNewStaff = staffs.length;

    // set newstaff
    const newStaffValue = {
      id: idNewStaff,
      ...values,
      image: "/assets/images/alberto.png",
    };
    console.log("newstaff get submit", newStaffValue);

    //post to server
    dispatch(axiosPostStaff(newStaffValue));

    //set state
    setNewStaff(newStaffValue);

    setOpenModal(!isOpenModal);

    e.preventDefault();
  };

  const required = (val) => val && val.length >= 1;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  const toggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const handleDelete = (id) => {
    console.log("id", id);

    const isDelete = window.confirm("Xóa nhé bạn hiền!???");

    if (isDelete) {
      dispatch(axiosDeleteStaff(id));

      setTimeout(() => {
        dispatch(axiosGetListStaff());
      }, 500);
    }
  };
  console.log(staffInState.getStaffs.listStaff.isLoading);

  return (
    <div>
      {staffInState.getStaffs.listStaff.isLoading ? (
        <Loading />
      ) : (
        <div className="staff-list row">
          <div>
            <Modal isOpen={isOpenModal} toggle={toggleModal}>
              <ModalHeader>Sửa nhân viên</ModalHeader>
              <ModalBody>
                <LocalForm className="form-group" onSubmit={handleSubmit}>
                  <Row className="form-group">
                    <Label htmlFor="name">Tên</Label>

                    <Control
                      model=".name"
                      id="name"
                      name="name"
                      placeholder="Vui lòng nhập "
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(6),
                        maxLength: maxLength(25),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        required: "Yêu cầu nhập",
                        minLength: "Tên phải ít nhất có 6 kí tự",
                        maxLength: "Tên phải ít hơn 15 kí tự",
                      }}
                    />
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="doB">Ngày sinh</Label>
                    <Control
                      type="date"
                      model=".doB"
                      id="doB"
                      name="doB"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    ></Control>
                    <Errors
                      className="text-danger"
                      model=".doB"
                      show="touched"
                      messages={{
                        required: "Yêu cầu nhập",
                      }}
                    />
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="startDate">Ngày vào công ty</Label>
                    <Control
                      model=".startDate"
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    ></Control>
                    <Errors
                      className="text-danger"
                      model=".startDate"
                      show="touched"
                      messages={{
                        required: "Yêu cầu nhập",
                      }}
                    />
                  </Row>

                  <Row className="form-group">
                    <Label htmlFor="department">Phòng ban</Label>
                    <Control.select
                      model=".departmentId"
                      id="departmentId"
                      name="departmentId"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    >
                      <option value={"Dept01"}>Sale</option>
                      <option value={"Dept04"}>IT</option>
                      <option value={"Dept02"}>HR</option>
                      <option value={"Dept03"}>Marketing</option>
                      <option value={"Dept05"}>Finance</option>
                    </Control.select>
                    <Errors
                      className="text-danger"
                      model=".department"
                      show="touched"
                      messages={{
                        required: "Yêu cầu chọn",
                      }}
                    />
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="salaryScale">Hệ số lương</Label>
                    <Control
                      model=".salaryScale"
                      type="number"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="Nhập hệ số lương..."
                      className="form-control"
                      validators={{
                        required,
                        valueVal: (val) => val >= 1 && val <= 3,
                      }}
                    ></Control>
                    <Errors
                      className="text-danger"
                      model=".salaryScale"
                      show="touched"
                      messages={{
                        required: "Yêu cầu nhập ",
                        valueVal: "Giá trị từ 1 -> 3",
                      }}
                    />
                  </Row>

                  <Row className="form-group">
                    <Label htmlFor="overTime">Số ngày nghỉ còn lại</Label>
                    <Control
                      model=".annualLeave"
                      type="number"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="Vui lòng nhập"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    ></Control>
                    <Errors
                      className="text-danger"
                      model=".startDate"
                      show="touched"
                      messages={{
                        required: "Yêu cầu nhập",
                      }}
                    />
                  </Row>

                  <Row className="form-group">
                    <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                    <Control
                      model=".overTime"
                      type="number"
                      id="overTime"
                      name="overTime"
                      placeholder="Vui lòng nhập"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    ></Control>
                    <Errors
                      className="text-danger"
                      model=".startDate"
                      show="touched"
                      messages={{
                        required: "Yêu cầu nhập",
                      }}
                    />
                  </Row>

                  <Button color="primary" type="submit">
                    Thêm
                  </Button>
                </LocalForm>
              </ModalBody>
            </Modal>
          </div>
          <Breadcrumb className="col-12">
            <BreadcrumbItem>
              <Link to={"/"}>Home</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12 row">
            <div className="col-6">
              <Button className="col-3" onClick={toggleModal}>
                +
              </Button>
            </div>
          </div>

          {staffs.map((staff) => (
            <div className={`col-6 col-md-4 col-lg-2`} key={staff.id}>
              <div className="col-12 row">
                <button
                  className="col-12"
                  onClick={() => handleDelete(staff.id)}
                >
                  xóa
                </button>
              </div>
              <Link to={`/staffs/${staff.id}`}>
                <img
                  id="img-profile-tag"
                  src={staff.image}
                  alt={staff.name}
                ></img>
                <h5 id="name-staff">{staff.name}</h5>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListStaffs;
