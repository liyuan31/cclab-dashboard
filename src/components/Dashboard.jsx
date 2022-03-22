import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import SubjectSummary from "./SubjectSummary";

const Dashboard = () => {
    // Set subjects basic info and availability info as state variables
    const [subjects, setSubjects] = useState();
    const [done, setDone] = useState(undefined);
    useEffect(() => {
        axios
            .get(
                "https://us-east-1.aws.data.mongodb-api.com/app/lab-app-bjmxt/endpoint/users/pull"
            )
            .then((res) => {
                setSubjects(res.data);
                setDone(true);
                // axios
                //     .get(
                //         "https://us-east-1.aws.data.mongodb-api.com/app/lab-app-bjmxt/endpoint/users/time/pull"
                //     )
                //     .then((res) => console.log(res));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="dashboard">
            {!done ? (
                <ReactLoading
                    type={"bars"}
                    color={"#2a265f"}
                    height={"20%"}
                    width={"20%"}
                />
            ) : (
                subjects.map((subject) => {
                    return (
                        <SubjectSummary
                            key={subject._id}
                            firstname={subject.firstname}
                            lastname={subject.lastname}
                        ></SubjectSummary>
                    );
                })
            )}
        </div>
    );
};

export default Dashboard;
