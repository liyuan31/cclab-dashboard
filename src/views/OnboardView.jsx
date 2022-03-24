import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import SubjectSummary from "../components/SubjectSummary";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ReactLoading from "react-loading";
import IntakeForm from "../components/IntakeForm";

const OnboardView = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const idQuery = searchParams.get("id");
    const [data, setData] = useState();
    const [done, setDone] = useState(undefined);
    useEffect(() => {
        axios
            .get(
                `https://us-east-1.aws.data.mongodb-api.com/app/lab-app-bjmxt/endpoint/users/pull?id=${idQuery}`
            )
            .then((res) => {
                setData(res.data[0]);
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
        <>
            <Title />
            {!done ? (
                <ReactLoading
                    type={"bars"}
                    color={"#e74c3c"}
                    height={"20%"}
                    width={"10%"}
                />
            ) : (
                <SubjectSummary
                    firstname={data.firstname}
                    lastname={data.lastname}
                />
            )}
            <IntakeForm></IntakeForm>
        </>
    );
};

export default OnboardView;
