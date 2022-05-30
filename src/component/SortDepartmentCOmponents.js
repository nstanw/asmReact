import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardHeader,CardTitle } from "reactstrap";
import { axiosGetListStaff } from "../redux/feature/staffSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

const SortDepartment = () => {
  const dispatch = useDispatch();
  

  //get state in store
  const staffInState = useSelector((state) => state);

  //get staff in server to store
  const staffs = staffInState.getStaffs.listStaff.listStaff;

  useEffect(() => {
    dispatch(axiosGetListStaff());
  }, []);

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
            .filter((staff) => staff.departmentId === "Dept04")
            .map((staff) => (
              <Card key={staff.id} className="col-12 col-sm-12 col-md-3 col-lg-2">
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
            .filter((staff) => staff.departmentId === "Dept01")
            .map((staff) => (
              <Card key={staff.id} className="col-12 col-sm-12 col-md-3 col-lg-2">
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
            .filter((staff) => staff.departmentId === "Dept03")
            .map((staff) => (
              <Card key={staff.id} className="col-12 col-sm-12 col-md-3 col-lg-2">
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
            .filter((staff) => staff.departmentId === "Dept02")
            .map((staff) => (
              <Card key={staff.id} className="col-12 col-sm-12 col-md-3 col-lg-2">
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
        <h3 className="col-12">Phòng: Finance</h3>
        <div className="col-12 row">
          {staffs
            .filter((staff) => staff.departmentId === "Dept05")
            .map((staff) => (
              <Card key={staff.id} className="col-12 col-sm-12 col-md-3 col-lg-2">
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
