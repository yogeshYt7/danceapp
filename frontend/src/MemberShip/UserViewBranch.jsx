import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Helpers/AxiosInstance";
import styles from "../MemberShip/membership.module.css";
import { Link } from "react-router-dom";
const UserViewBranch = () => {
  let [userData, setuserData] = useState([]);
  let token = localStorage.getItem("token");
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/branches/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setuserData(data.data);
    };
    fetchData();
  }, []);
  let handle = (bid) => {
    localStorage.setItem("bid", `${bid}`);
  };
  return (
    <div id={styles.dis}>
      <h1> User View Branches</h1>
      <div id={styles.rig}>
        {userData.map((x, i) => {
          return (
            <div key={i} id={styles.rod}>
              <h3 className={styles.arr}>Address:{x.address}</h3>
              <h3 className={styles.arr}>City:{x.city}</h3>
              <h3 className={styles.arr}>Phone:{x.phone}</h3>
              <h3 className={styles.arr}>Pincode:{x.pincode}</h3>
              <div id={styles.arrg}>
                <button
                  onClick={() => {
                    handle(x.id);
                  }}
                >
                  <Link to={`/userViewCourse/${x.id}`}>View</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserViewBranch;
