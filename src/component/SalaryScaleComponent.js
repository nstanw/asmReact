import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { STAFFS } from "../shared/staff";
import { useState } from "react";

// tính lương nhân viên
const vnd = (salaryScale, overTime) => {
  let salary = salaryScale * 3000000 + overTime * (200000 / 8);
  return salary.toFixed(0);
};

const localStaffs = JSON.parse(localStorage.getItem("arrCurrent"));
const staffs = localStaffs === null ? STAFFS : localStaffs;

const arrSortSalary = staffs.map((salary) => {
  let luong = vnd(salary.salaryScale, salary.overTime);
  return (salary = { ...salary, salaryVnd: parseInt(luong) });
});
console.log("luong", arrSortSalary);
const SalaryScale = ({ staffs }) => {
  //hook
  const [salarys, setSalary] = useState(arrSortSalary);
  //onchange
  const handleChage = () => {
    let selectValue = document.getElementById("selectSalary").value;
    console.log(selectValue);
    if (selectValue === "id-down") {
      const arrSort = salarys.sort((a, b) => b.id - a.id);
      const arrSortES6 = [...arrSort];
      setSalary(arrSortES6);
    }
    if (selectValue === "id") {
      console.log("enter id");
      const arrSort = salarys.sort((a, b) => a.id - b.id);
      const arrSortES6 = [...arrSort];
      setSalary(arrSortES6);
    }
    if (selectValue === "salaryUptoDown") {
      console.log("enter salaryUptoDown");
      const arrSort = salarys.sort((a, b) => b.salaryVnd - a.salaryVnd);
      const arrSortES6 = [...arrSort];
      setSalary(arrSortES6);
    }
    if (selectValue === "salaryDowntoUp") {
      console.log("enter salaryDowntoUp");
      const arrSort = salarys.sort((a, b) => a.salaryVnd - b.salaryVnd);
      const arrSortES6 = [...arrSort];
      setSalary(arrSortES6);
    }
  };
  return (
    <div className="row salary">
      <div className="col-12">
        <Breadcrumb className="col-6">
          <BreadcrumbItem>
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={"/salaryscale"}>Salary</Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <select onChange={handleChage} id="selectSalary">
          <option value="id">sắp xếp: mã nhân viên</option>
          <option value="id-down">Mã nhân viên cao đến thấp</option>

          <option value="salaryUptoDown">Lương từ cao đến thấp</option>
          <option value="salaryDowntoUp">Lương từ thấp đến cao</option>
        </select>
      </div>

      {true &&
        salarys.map((staff) => (
          <div className={`col-12 col-md-6 col-lg-4`} key={staff.id}>
            <Card>
              <CardTitle>{staff.name}</CardTitle>
              <CardText>Mã nhân viên: {staff.id}</CardText>
              <CardText>Hệ số lương: {staff.salaryScale}</CardText>
              <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
              <CardText>Lương: {staff.salaryVnd}</CardText>
            </Card>
          </div>
        ))}
    </div>
  );
};
export default SalaryScale;
