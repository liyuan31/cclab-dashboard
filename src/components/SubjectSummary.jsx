import React from "react";

const SubjectSummary = (props) => {
    return (
        <div className="courses-container">
            <div className="course">
                <div className="course-preview">
                    <h6>Participant</h6>
                    <h2>
                        {props.firstname} {props.lastname}
                    </h2>
                    <p>RA: Walden</p>
                </div>
                <div className="course-info">
                    <div className="progress-container-mega">
                        <div className="progress"></div>
                        <span className="progress-text">0/9 Sessions</span>
                    </div>
                    <h6>Mega Study</h6>
                    <div className="progress-container-scan">
                        <div className="progress"></div>
                        <span className="progress-text">0/2 Sessions</span>
                    </div>
                    <h6>Scanning</h6>
                    <table className="table table-hover ava-table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Mon</th>
                                <th scope="col">Tue</th>
                                <th scope="col">Wed</th>
                                <th scope="col">Thu</th>
                                <th scope="col">Fri</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">AM</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">PM</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <h2>Callbacks & Closures</h2> */}
                    {/* <button className="btn">Continue</button> */}
                </div>
            </div>
        </div>
    );
};

export default SubjectSummary;
