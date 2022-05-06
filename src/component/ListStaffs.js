import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Row,
  Col,
  Label,
  FormFeedback,
} from "reactstrap";
import { STAFFS } from "../shared/staff";

function ListStaffs() {
  const localStaffs = JSON.parse(localStorage.getItem("arrCurrent"));
  const staffs = localStaffs === null ? STAFFS : localStaffs;

  const [newStaff, setNewStaff] = useState({
    id: 16,
    name: "",
    doB: "",
    salaryScale: 1,
    startDate: "",
    department: "",
    annualLeave: 0,
    overTime: 0,
    image: "/assets/images/alberto.png",
    touched: {
      name: false,
      annualLeave: false,
      department: false,
      doB: false,
      overTime: false,
      salaryScale: false,
      startDate: false,
    },
  });
  const [isOpenModal, setOpenModal] = useState(false);

  const handleBlur = (field) => (e) => {
    setNewStaff({
      touched: { ...newStaff.touched, [field]: true },
    });
  };

  const validate = (
    startDate,
    overTime,
    salaryScale,
    doB,
    department,
    annualLeave,
    name
  ) => {
    const errors = {
      startDate: "",
      overTime: "",
      salaryScale: "",
      doB: "",
      department: "",
      annualLeave: "",
      name: "",
    };

    if (newStaff.name && name.length < 6)
      errors.name = "Tên nhân viên nên lớn hơn 6 kí tự";
  };

  const errors = validate(newStaff.name);
  const handleSubmit = (e) => {
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

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;

    newStaff[name] = target.value;

    newStaff.id = staffs.length;
    console.log(newStaff);
  };

  const toggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <div className="staff-list row">
      <div>
        <Modal isOpen={isOpenModal} toggle={toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form className="form-group" onSubmit={handleSubmit}>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label htmlFor="name">Tên</Label>
                  </Col>
                  <Col>
                    <input
                      id="name"
                      name="name"
                      placeholder="Nhập tên của bạn"
                      className="form-control"
                      onChange={handleChange}
                      value={newStaff.name}
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                      onBlur={handleBlur("name")}
                    ></input>
                  </Col>
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label htmlFor="doB">Ngày sinh</Label>
                  </Col>
                  <Col>
                    <input
                      type="date"
                      id="doB"
                      name="doB"
                      className="form-control"
                      onChange={handleChange}
                    ></input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label htmlFor="startDate">Ngày vào công ty</Label>
                  </Col>
                  <Col>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="form-control"
                      onChange={handleChange}
                    ></input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label htmlFor="department">Phòng ban</Label>
                  </Col>
                  <Col>
                    <select
                      id="department"
                      name="department"
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option>Sale</option>
                      <option>IT</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>Finance</option>
                    </select>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label htmlFor="salary">Hệ số lương</Label>
                  </Col>
                  <Col>
                    <input
                      id="salary"
                      name="salary"
                      placeholder=""
                      className="form-control"
                      onChange={handleChange}
                    ></input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label htmlFor="overTime">Số ngày nghỉ còn lại</Label>
                  </Col>
                  <Col>
                    <input
                      id="annualLeave"
                      name="annualLeave"
                      placeholder=""
                      className="form-control"
                      onChange={handleChange}
                    ></input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                  </Col>
                  <Col>
                    <input
                      id="overTime"
                      name="overTime"
                      placeholder="Nhập số ngày làm thêm"
                      className="form-control"
                      onChange={handleChange}
                    ></input>
                  </Col>
                </Row>
              </FormGroup>
              <Button color="primary">Thêm</Button>
            </Form>
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
        <>
          <div className={`col-6 col-md-4 col-lg-2`} key={staff.id}>
            <Link to={`/staffs/${staff.id}`}>
              <img
                id="img-profile-tag"
                src={staff.image}
                alt={staff.name}
              ></img>
              <h5 id="name-staff">{staff.name}</h5>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}

export default ListStaffs;
