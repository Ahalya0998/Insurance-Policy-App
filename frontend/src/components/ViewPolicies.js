
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPolicies = ({ changeView }) => {
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/policies")
            .then((response) => setPolicies(response.data))
            .catch((error) => console.error("Error fetching policies:", error));
    }, []);

    return (
        <div>
           <center><h2>View Policies</h2></center> 
            <table border="2" style={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Policy Name</th>
                        <th>Policy Number</th>
                        <th>Policy Type</th>
                        <th>Policy Term</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Premium Amount</th>
                        <th>Payment Frequency</th>
                        <th>Nominee Name</th>
                        <th>Last Payment Date</th>
                        <th>Next Payment Due Date</th>
                        <th>Full Name</th>
                        <th>Date of Birth</th>
                        <th>Contact Number</th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {policies.map((policy) => (
                        <tr key={policy.id}>
                            <td>{policy.id}</td>
                            <td>{policy.policyName}</td>
                            <td>{policy.policyNumber}</td>
                            <td>{policy.policyType}</td>
                            <td>{policy.policyTerm}</td>
                            <td>{policy.startDate}</td>
                            <td>{policy.endDate}</td>
                            <td>{policy.premiumAmount}</td>
                            <td>{policy.paymentFrequency}</td>
                            <td>{policy.nomineeName}</td>
                            <td>{policy.lastPaymentDate}</td>
                            <td>{policy.nextPaymentDueDate}</td>
                            <td>{policy.fullName}</td>
                            <td>{policy.dateOfBirth}</td>
                            <td>{policy.contactNumber}</td>
                            <td>{policy.emailAddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={styles.buttonContainer}>
                <button onClick={() => changeView("main")} style={styles.button}>
                    Back to Main
                </button>
            </div>
        </div>
    );
};

const styles = {
    table: {
        margin: "auto",
        width: "90%",
        textAlign: "center",
        borderCollapse: "collapse",
        marginBottom: "20px",
    },
    th: {
        padding: "12px 15px",
        backgroundColor: "#f2f2f2",
        // fontWeight: "bold",
    },
    td: {
        padding: "12px 15px",
        borderBottom: "1px solid #ddd",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "black",
    },
};

export default ViewPolicies;

