import React, { useState } from "react";
import axiosInstance from "../Helpers/AxiosInstance";

const Enroll = () => {
  let token = localStorage.getItem("token");
  let bid = localStorage.getItem("bid");
  let cid = localStorage.getItem("cid");
  let userId = localStorage.getItem("userId");
  
  console.log(bid, cid, userId);
  let [data, setData] = useState({
    dateOfJoining: "",
    memeberShipEndDate: "",
    status: "",
    totalFee: "",
  });
  let { dateOfJoining, memeberShipEndDate, status, totalFee } = data;
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    let payload = {
      dateOfJoining,
      memeberShipEndDate,
      status,
      totalFee,
    };
    let finalData = await axiosInstance.post(
      `/memberships/createmembership?branchId=${bid}&danceCourseId=${cid}&userId=${userId}`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(finalData);
    alert("sucessfully register");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">dateOfJoining</label>
          <br />
          <input
            type="date"
            name="dateOfJoining"
            id="dateOfJoining"
            onChange={handleChange}
            value={dateOfJoining}
          />
          <br />
        </div>

        <div>
          <label htmlFor="">memeberShipEndDate</label>
          <br />
          <input
            type="date"
            name="memeberShipEndDate"
            id="memeberShipEndDate"
            onChange={handleChange}
            value={memeberShipEndDate}
          />
          <br />
        </div>
        <div>
          <label htmlFor="">status</label>
          <br />
          <input
            type="text"
            name="status"
            id="status"
            onChange={handleChange}
            value={status}
          />
          <br />
        </div>
        <div>
          <label htmlFor="">totalFee</label>
          <br />
          <input
            type="number"
            name="totalFee"
            id="totalFee"
            onChange={handleChange}
            value={totalFee}
          />
          <br />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Enroll;
