import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Card, CardImg, CardHeader, CardText } from "reactstrap";
import { Link } from "react-router-dom";
const SortStaffOverTime = ({ staffs, col }) => {
  return (
    <div id="sort-overtime">
      <Breadcrumb className="col-12">
        <BreadcrumbItem>
          <Link to={"/"}>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={"/SortOverTime"}>SortOverTime</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <h4>Nhân viên over time nhiều nhất</h4>
      <div className="row cardovertime">
        {staffs.map((staff) => (
          <div id="cardOverTime" className="col-6 col-md-4 col-lg-3">
            <Card>
              <CardHeader>{staff.name}</CardHeader>
              <CardImg src={staff.image} alt={staff.name} />
              <CardText>Số giờ làm thêm:{staff.overTime}</CardText>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SortStaffOverTime;
