import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardHeader,CardTitle } from "reactstrap";
const SortDepartment = ({ staffs }) => {
  return (
    <div className="row">
      <div className="departmentShow col-12">
      <Breadcrumb className="col-12">
        <BreadcrumbItem>
          <Link to={"/"}>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={"/SortDepartment"}>SortDepartment</Link>
        </BreadcrumbItem>
      </Breadcrumb>
        <h3 className="col-12">Phòng: IT</h3>
        <div className="col-12 row">
          {staffs
            .filter((staff) => staff.department.name === "IT")
            .map((staff) => (
              <Card key={staff.id} className="col-4">
                <Link to="/SortDepartment">
                  <CardImg
                    id="img-profile-tag"
                    src={staff.image}
                    alt={staff.name}
                  ></CardImg>
                  <h5 id="name-staff">{staff.name}</h5>
                </Link>
              </Card>
            ))}
        </div>
        <h3 className="col-12">Phòng: Sale</h3>
        <div className="col-12 row">
          {staffs
            .filter((staff) => staff.department.name === "Sale")
            .map((staff) => (
              <Card key={staff.id} className="col-4">
                <Link to="/SortDepartment">
                  <CardImg
                    id="img-profile-tag"
                    src={staff.image}
                    alt={staff.name}
                  ></CardImg>
                  <h5 id="name-staff">{staff.name}</h5>
                </Link>
              </Card>
            ))}
        </div>
        <h3 className="col-12">Phòng: Marketing</h3>
        <div className="col-12 row">
          {staffs
            .filter((staff) => staff.department.name === "Marketing")
            .map((staff) => (
              <Card key={staff.id} className="col-4">
                <Link to="/SortDepartment">
                  <CardImg
                    id="img-profile-tag"
                    src={staff.image}
                    alt={staff.name}
                  ></CardImg>
                  <h5 id="name-staff">{staff.name}</h5>
                </Link>
              </Card>
            ))}
        </div>
        <h3 className="col-12">Phòng: HR</h3>
        <div className="col-12 row">
          {staffs
            .filter((staff) => staff.department.name === "HR")
            .map((staff) => (
              <Card key={staff.id} className="col-4">
                <Link to="/SortDepartment">
                  <CardImg
                    id="img-profile-tag"
                    src={staff.image}
                    alt={staff.name}
                  ></CardImg>
                  <h5 id="name-staff">{staff.name}</h5>
                </Link>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SortDepartment;
