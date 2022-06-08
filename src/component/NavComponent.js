import { Link } from "react-router-dom";
const NavComponent = ({ onChangeCol }) => {
  return (
    <div className="row navi">
      <div className="col-3">
        <Link to="/">
          <h5>STAFF MANAGER</h5>
        </Link>
      </div>
      <div className="col-9 row" id="menu">
        <div className="col-3">
          <Link to="/staffs">Nhân viên</Link>
        </div>
        <div className="col-3">
          <Link to="/departments">Phòng ban</Link>
        </div>
        <div className="col-3">
          <Link to="/salaryscale" href="#">
            Bảng lương
          </Link>
        </div>
        {/* <div className="col-3" id="selec">
          <select id="colum" onChange={onChangeCol} defaultValue={"col-2"}>
            <option value="col-6">Mobile - 2 cột</option>
            <option value="col-3">Tablet - 4 cột</option>
            <option value="col-2">PC - 6 cột</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default NavComponent;
