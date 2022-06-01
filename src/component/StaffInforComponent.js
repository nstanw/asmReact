import dateFormat from "dateformat";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { axiosGetListStaff } from "../redux/feature/staffSlice";
import axios from "axios";
import request from "../util/request";

const StaffInfor = () => {
  //get staff in server to store
  const staffInState = useSelector((state) => state);
  const staffs = staffInState.getStaffs.listStaff.listStaff;

  console.log(staffs);

  let params = useParams();

  const [listStaff, setListStaff] = useState(staffs);


  useEffect(() => {
    request.get("").then((staff) => setListStaff(staff));
  }, []);

  console.log("listStaff", listStaff);

  
  if (listStaff) {
    var staff = listStaff.filter(
      (Staff) => Staff.id === parseInt(params.staffId)
    )[0];
    console.log("staff", staff);
  } else {
    var staff = staffs.filter(
      (Staff) => Staff.id === parseInt(params.staffId)
    )[0];
    console.log("staff", staff);
  }

  if (false) {
    return (
      <>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={"/staffs"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row" id="div-infor">
          <div className="col-lg-3 col-md-4 col-12">
            <img id="img-profile-tag" src={staff.image} alt={staff.name}></img>
          </div>
          <div className="col-lg-9 col-md-8 col-12 infor">
            <li>Họ và tên: {staff.name}</li>
            <li>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
            <li>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </li>
            <li>
              Chức vụ:
              {parseFloat(staff.salaryScale) > 1 ? "Quản lý" : "Nhân viên"}
            </li>
            <li>Phòng ban: {staff.departmentId}</li>
            <li>Ngày nghỉ còn lại: {staff.annualLeave}</li>
            <li>Ngày đi làm thêm: {staff.overTime}</li>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
export default StaffInfor;
