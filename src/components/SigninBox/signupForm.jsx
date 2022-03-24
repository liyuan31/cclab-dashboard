import React, { useContext } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
    SwitchButton,
} from "./common";
import { Marginer } from "./marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";

export function SignupForm(props) {
    const { switchToSignin, switchToSubmit } = useContext(AccountContext);

    const submitHandler = (name, email) => {
        const first = name.split(" ")[0];
        const last = name.split(" ")[name.split(" ").length - 1];
        axios({
            method: "post",
            url: "https://us-east-1.aws.data.mongodb-api.com/app/lab-app-bjmxt/endpoint/user/add",
            data: {
                firstname: first,
                lastname: last,
                email: email,
            },
        })
            .then((res) => {
                window.location.assign(`/onboard/?id=${res.data["id"]}`);
            })
            .catch((err) => console.log(err));
    };

    const validateForm = () => {
        switchToSubmit();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if (!name.match(/^[A-Za-z\s]*$/)) {
        }
        submitHandler(name, email);
    };

    return (
        <BoxContainer>
            <FormContainer>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Last"
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                />
                {/* <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" /> */}
            </FormContainer>
            <Marginer direction="vertical" margin={20} />
            <SubmitButton type="submit" onClick={validateForm}>
                Submit
            </SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <SwitchButton onClick={switchToSignin}>
                Already Registered?
            </SwitchButton>
        </BoxContainer>
    );
}
