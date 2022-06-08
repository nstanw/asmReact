import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Control, Errors, LocalForm } from "react-redux-form";
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
import { addStaff } from "../features/addStaffSlice";

function ListStaffs() {
  const selectorState = useSelector((state) => state);
  const dispatch = useDispatch();
  const staffs = selectorState.addStaff.listStaff;
  console.log("staffs", staffs);

  const [newStaff, setNewStaff] = useState({
    id: null,
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

  console.log(newStaff);

  const handleSubmit = (values, e) => {
    //set id

    const arrClone = {
      id: staffs.length,
      image: "/assets/images/alberto.png",
      ...values,
    };

    //add newstaff to store
    dispatch(addStaff(arrClone));

    setNewStaff(arrClone);
    console.log("arrClone", arrClone);

    toggleModal();

    e.preventDefault();
  };

  const toggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  return (
    <div className="staff-list row">
      <div>
        <Modal isOpen={isOpenModal} toggle={toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
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
                  model=".department"
                  id="department"
                  name="department"
                  className="form-control"
                  validators={{
                    required,
                  }}
                >
                  <option value={"Sale"}>Sale</option>
                  <option value={"IT"}>IT</option>
                  <option value={"HR"}>HR</option>
                  <option value={"Marketing"}>Marketing</option>
                  <option value={"Finance"}>Finance</option>
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
                ></Control>
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
                ></Control>
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
          <Link to={`/staffs/${staff.id}`}>
            <img id="img-profile-tag" src={staff.image} alt={staff.name}></img>
            <h5 id="name-staff">{staff.name}</h5>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListStaffs;
