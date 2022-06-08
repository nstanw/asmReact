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
    salaryScale: 0,
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
      ...newStaff,
      touched: { ...newStaff.touched, [field]: true },
    });
    console.log("newStaff", newStaff);
  };

  console.log(newStaff);

  const validate = () => {
    const erorrs = {
      name: "",
      annualLeave: "",
      department: "",
      doB: "",
      overTime: "",
      salaryScale: "",
      startDate: "",
      isErr: false,
    };

    if (newStaff.touched.name && newStaff.name.length < 6) {
      erorrs.name = "Họ và tên phải lớn hơn 6 kí tự";
       erorrs.isErr = true;
    }

    if (newStaff.touched.doB && newStaff.doB.length === 0) {
      erorrs.doB = "Yêu cầu nhập";
       erorrs.isErr = true;
    }

    if (newStaff.touched.startDate && newStaff.startDate.length < 1) {
       erorrs.isErr = true;
      erorrs.startDate = "Yêu cầu nhập";
    }

    if (newStaff.touched.annualLeave && newStaff.annualLeave.length === 0) {
      erorrs.annualLeave = "Vui lòng nhập";
       erorrs.isErr = true;
    }

    if (newStaff.touched.overTime && newStaff.overTime.length === 0) {
      erorrs.overTime = "Vui lòng nhập";
       erorrs.isErr = true;
    }
    if (newStaff.touched.department && newStaff.department === "") {
      erorrs.department = "Vui lòng nhập";
       erorrs.isErr = true;
    }

    if (
      (newStaff.touched.salaryScale && newStaff.salaryScale < 1) ||
      newStaff.salaryScale > 3
    ) {
       erorrs.isErr = true;
      erorrs.salaryScale = "Vui lòng nhập (1.0 -> 3.0)";
    }

    return erorrs;
  };

  console.log(newStaff.name.length);
  //print to errors
  const errors = validate();
  console.log(errors.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.isErr) {
      //set id
    newStaff.id = staffs.length;

    setNewStaff(newStaff);
    STAFFS.concat(newStaff);
    JSON.parse(localStorage.getItem("arrCurrent"));
    localStorage.setItem("newStaff", JSON.stringify(newStaff));
    localStorage.setItem("arrCurrent", JSON.stringify(staffs.concat(newStaff)));
    JSON.parse(localStorage.getItem("arrCurrent"));

    setOpenModal(!isOpenModal);
    }else{
      setOpenModal(true)
    }
    
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
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nhập tên của bạn"
                      className="form-control"
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                      onChange={handleChange}
                      onBlur={handleBlur("name")}
                      required
                    ></input>
                    <p>{errors.name}</p>
                  </Col>
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
                      onBlur={handleBlur("doB")}
                      valid={errors.doB === ""}
                      invalid={errors.doB !== ""}
                      required
                    ></input>
                    <p>{errors.doB}</p>
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
                      onBlur={handleBlur("startDate")}
                      valid={errors.startDate === ""}
                      invalid={errors.startDate !== ""}
                      required
                    ></input>
                    <p>{errors.startDate}</p>
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
                      onBlur={handleBlur("department")}
                      valid={errors.department === ""}
                      invalid={errors.department !== ""}
                      defaultValue="IT"
                      required
                    >
                      <option>Sale</option>
                      <option>IT</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>Finance</option>
                    </select>
                    <p>{errors.department}</p>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label htmlFor="salaryScale">Hệ số lương</Label>
                  </Col>
                  <Col>
                    <input
                      type="number"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="0"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur("salaryScale")}
                      valid={errors.salaryScale === ""}
                      invalid={errors.salaryScale !== ""}
                      required
                    ></input>
                    <p>{errors.salaryScale}</p>
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
                      type="number"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="0"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur("annualLeave")}
                      valid={errors.annualLeave === ""}
                      invalid={errors.annualLeave !== ""}
                      required
                    ></input>
                    <p>{errors.annualLeave}</p>
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
                      type="number"
                      id="overTime"
                      name="overTime"
                      placeholder="0"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur("overTime")}
                      valid={errors.overTime === ""}
                      invalid={errors.overTime !== ""}
                      required
                    ></input>
                    <p>{errors.overTime}</p>
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
