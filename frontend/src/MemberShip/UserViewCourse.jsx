import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../Helpers/AxiosInstance";
import styles from "../MemberShip/membership.module.css";

const UserViewCourse = () => {
  let [usercourse, setUserCourse] = useState([]);
  let token = localStorage.getItem("token");
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(
        `/dancecourses/getbybranchid/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data.data);
      setUserCourse(data.data);
    };
    fetchData();
  }, []);
  let handle = (cid) => {
    localStorage.setItem("cid", `${cid}`);
  };
  return (
    <div id={styles.dis}>
      <h1>User View Course</h1>
      <div id={styles.rig}>
        {usercourse.map((x, i) => {
          return (
            <div key={i} id={styles.rod}>
              <h3 className={styles.arr}>Dance Type{x.type}</h3>
              <h3 className={styles.arr}>
                Course Duration In Months:{x.courseDurationInMonths}
              </h3>
              <h3 className={styles.arr}>Fee:{x.fee}</h3>
              <div id={styles.arrg}>
                <button
                  onClick={() => {
                    handle(x.id);
                  }}
                >
                  <Link to={`/userViewCourse/Enroll`}>Enroll</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserViewCourse;
