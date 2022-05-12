import dateFormat from "dateformat";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { STAFFS } from "../shared/staff";

const StaffInfor = () => {
  const localStaffs = JSON.parse(localStorage.getItem("arrCurrent"));
  const staffs = localStaffs;

  let params = useParams();

  const staff = staffs.filter(
    (staff) => staff.id === parseInt(params.staffId, 10)
  )[0];

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
          <li>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
          <li>
            Chức vụ:
            {parseFloat(staff.salaryScale) > 1 ? "Quản lý" : "Nhân viên"}
          </li>
          <li>Phòng ban: {staff.department.name || staff.department}</li>
          <li>Ngày nghỉ còn lại: {staff.annualLeave}</li>
          <li>Ngày đi làm thêm: {staff.overTime}</li>
        </div>
      </div>
    </>
  );
};
export default StaffInfor;
