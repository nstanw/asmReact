import { Card, CardTitle, CardText, CardImg } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
const Department = ({ departments, col }) => {
  return (
    <div className="row department">
      <Breadcrumb className="col-12">
        <BreadcrumbItem>
          <Link to={"/"}>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={"/departments"}>Departments</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      {departments.map((department) => (
        <div className={col !== "" ? col : `col-12 col-md-6 col-lg-4`}key={department.id}>
          <Card>
            <CardImg src={department.image}  id='department-img'/>
            <CardTitle>{department.name}</CardTitle>
            <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Department;
