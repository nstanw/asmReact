import React, { useState } from "react";
import { STAFFS } from "../shared/staff";
import NavComponent from "./NavComponent";
import StaffInfor from "./StaffInforComponent";
import Footer from "./FooterComponent";
import SearchStaffs from "./SearchStaffs";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staff";
import Department from "./Department";
import SalaryScale from "./SalaryScaleComponent";
import SortDepartment from "./SortDepartmentCOmponents";
import SortStaffOverTime from "./SortStaffOverTimeComponent";
import ListStaffs from "./ListStaffs";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";

function Main() {
  //hoook

  const staffs = useSelector((state) => state);
  const [col] = useState("");
  const [departments, setDepartment] = useState(DEPARTMENTS);

  const location = useLocation();
  const StaffWithDepartment = () => {
    return (
      <>
        <SortDepartment staffs={staffs} />
      </>
    );
  };
  
  return (
    <div className="container ">
      <NavComponent />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes>
            <Route path="/" element={<ListStaffs staffs={staffs} />} />
            <Route path="/staffs" element={<SearchStaffs staffs={staffs} />} />
            <Route exact path="/staffs/:staffId" element={<StaffInfor />} />
            <Route
              path="/departments"
              element={<Department departments={departments} col={col} />}
            />
            <Route path="/salaryscale" element={<SalaryScale />} />
            <Route
              path="/SortDepartment"
              element={<StaffWithDepartment col={col} />}
            />
            <Route path="/SortOverTime" element={<SortStaffOverTime />} />
            <Route path="/Search" element={<SearchStaffs staffs={staffs} />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default Main;
