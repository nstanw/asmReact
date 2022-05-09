import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Label,
} from "reactstrap";

import { STAFFS } from "../shared/staff";
import { Control, LocalForm, Errors } from "react-redux-form";

function ListStaffs() {
  const localStaffs = JSON.parse(localStorage.getItem("arrCurrent"));
  const staffs = localStaffs === null ? STAFFS : localStaffs;

  const [newStaff, setNewStaff] = useState({
    id: 16,
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

  const handleSubmit = (values) => {
    //test form
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    //set id
    newStaff.id = staffs.length;
    STAFFS.concat(newStaff);
    JSON.parse(localStorage.getItem("arrCurrent"));
    localStorage.setItem("newStaff", JSON.stringify(newStaff));
    localStorage.setItem("arrCurrent", JSON.stringify(staffs.concat(newStaff)));
    JSON.parse(localStorage.getItem("arrCurrent"));

    setNewStaff(newStaff);
    setOpenModal(!isOpenModal);
    // e.preventDefault();
  };

  // const handleChange = (e) => {
  //   const target = e.target;
  //   const name = target.name;

  //   newStaff[name] = target.value;

  //   newStaff.id = staffs.length;
  //   console.log(newStaff);
  // };

  const toggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <div className="staff-list row">
      <div>
        <Modal isOpen={isOpenModal} toggle={toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm className="form-group" onSubmit={handleSubmit}>
              <Row className="form-group">
                <Row>
                  <Col md={4}>
                    <Label htmlFor="name">Tên</Label>
                  </Col>
                  <Col>
                    <Control.text
                      model=".name"
                      id="name"
                      name="name"
                      placeholder="Nhập tên của bạn"
                      className="form-control"
                
                    />
                  </Col>
                </Row>
              </Row>
              <Row className="form-group">
                <Row>
                  <Col md={4}>
                    <Label htmlFor="doB">Ngày sinh</Label>
                  </Col>
                  <Col>
                    <Control.input
                      type="date"
                      model=".doB"
                      id="doB"
                      name="doB"
                      className="form-control"
                     
                    ></Control.input>
                   
                  
                  </Col>
                </Row>
              </Row>
              <Row className="form-group">
                <Row>
                  <Col md={4}>
                    <Label htmlFor="startDate">Ngày vào công ty</Label>
                  </Col>
                  <Col>
                    <Control.input
                      model=".startDate"
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="form-control"
                     
                    ></Control.input>
                   
                  </Col>
                </Row>
              </Row>
              <Row className="form-group">
                <Row>
                  <Col md={4}>
                    <Label htmlFor="department">Phòng ban</Label>
                  </Col>
                  <Col>
                    <Control.select
                      model=".department"
                      id="department"
                      name="department"
                      className="form-control"
                    >
                      <option>Sale</option>
                      <option>IT</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>Finance</option>
                    </Control.select>
                  </Col>
                </Row>
              </Row>
              <Row className="form-group">
                <Row>
                  <Col md={4}>
                    <Label htmlFor="salaryScale">Hệ số lương</Label>
                  </Col>
                  <Col>
                    <Control
                      model=".salaryScale"
                      type="number"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="0"
                      className="form-control"
                    ></Control>
                  </Col>
                </Row>
              </Row>
              <Row className="form-group">
                <Row>
                  <Col md={4}>
                    <Label htmlFor="overTime">Số ngày nghỉ còn lại</Label>
                  </Col>
                  <Col>
                    <Control
                      model=".annualLeave"
                      type="number"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="0"
                      className="form-control"
                    ></Control>
                  </Col>
                </Row>
              </Row>
              <Row className="form-group">
                <Row>
                  <Col md={4}>
                    <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                  </Col>
                  <Col>
                    <Control
                      model=".overTime"
                      type="number"
                      id="overTime"
                      name="overTime"
                      placeholder="0"
                      className="form-control"
                    ></Control>
                  </Col>
                </Row>
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
