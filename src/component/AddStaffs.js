import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Row,
  Col,
  Label,
} from "reactstrap";

function AddStaffs() {
  const [newStaff, setNewStaff] = useState({
    id: 0,
    name: "",
    doB: "",
    salaryScale: 1,
    startDate: "",
    // department: DEPARTMENTS[3],
    annualLeave: 4,
    overTime: 5,
    image: "/assets/images/alberto.png",
  });
  const [isOpenModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    localStorage.setItem("newStaff", JSON.stringify(newStaff));
    setNewStaff(newStaff);
    setOpenModal(!isOpenModal);
    e.preventDefault();
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;

    newStaff[name] = target.value;
    console.log(newStaff);
  };

  const toggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <div>
      <Button className="col-3" onClick={toggleModal}>
        add
      </Button>
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
                  ></input>
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
  );
}

export default AddStaffs;
