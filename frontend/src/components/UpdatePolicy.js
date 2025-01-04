import React, { useState } from "react";
import axios from "axios";

const UpdatePolicy = ({ changeView }) => {
    const [policyNumber, setPolicyNumber] = useState("");
    const [policy, setPolicy] = useState(null); // Initially null to distinguish between no fetch and empty data

    // Handle input change for the policy number
    const handlePolicyNumberChange = (e) => {
        setPolicyNumber(e.target.value);
    };

    // Fetch policy details based on the entered policy number
    const handleFetchPolicy = () => {
        axios
            .get(`http://localhost:8080/api/policies/${policyNumber}`)
            .then((response) => {
                setPolicy(response.data); // Set the fetched policy data
            })
            .catch((error) => {
                console.error("Error fetching policy details:", error);
                alert("Policy not found! Please check the policy number.");
            });
    };

    // Handle form input changes for policy details
    const handleChange = (e) => {
        setPolicy({ ...policy, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8080/api/policies/${policyNumber}`, policy)
            .then(() => {
                alert("Policy updated successfully!");
                changeView("main"); // Navigate back to main view
            })
            .catch((error) => console.error("Error updating policy:", error));
    };

    return (
        <div style={styles.formContainer}>
            <h2>Update Policy</h2>

            {/* Section to enter policy number and fetch details */}
            <div style={styles.inputGroup}>
                <label>Policy Number:</label>
                <input
                    name="policyNumber"
                    placeholder="Enter Policy Number"
                    value={policyNumber}
                    onChange={handlePolicyNumberChange}
                    required
                />
                <button type="button" style={styles.button} onClick={handleFetchPolicy}>
                    Fetch Policy
                </button>
            </div>

            {/* Show form only if policy details are fetched */}
            {policy && (
                <form onSubmit={handleSubmit}>
                    {/* Personal Details Section */}
                    <div style={styles.section}>
                        <h3>Personal Details</h3>
                        <div style={styles.inputGroup}>
                            <label>Full Name:</label>
                            <input
                                name="fullName"
                                placeholder="Full Name"
                                value={policy.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Date of Birth:</label>
                            <input
                                name="dateOfBirth"
                                type="date"
                                value={policy.dateOfBirth}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Contact Number:</label>
                            <input
                                name="contactNumber"
                                placeholder="Contact Number"
                                value={policy.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Email Address:</label>
                            <input
                                name="emailAddress"
                                type="email"
                                placeholder="Email Address"
                                value={policy.emailAddress}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Policy Details Section */}
                    <div style={styles.section}>
                        <h3>Policy Details</h3>
                        <div style={styles.inputGroup}>
                            <label>Policy Name:</label>
                            <input
                                name="policyName"
                                placeholder="Policy Name"
                                value={policy.policyName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Policy Type:</label>
                            <input
                                name="policyType"
                                placeholder="Policy Type"
                                value={policy.policyType}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Policy Term (in years):</label>
                            <input
                                name="policyTerm"
                                type="number"
                                value={policy.policyTerm}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Start Date:</label>
                            <input
                                name="startDate"
                                type="date"
                                value={policy.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>End Date:</label>
                            <input
                                name="endDate"
                                type="date"
                                value={policy.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Premium Amount:</label>
                            <input
                                name="premiumAmount"
                                placeholder="Premium Amount"
                                value={policy.premiumAmount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Payment Frequency:</label>
                            <select
                                name="paymentFrequency"
                                value={policy.paymentFrequency}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Frequency</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Nominee Name:</label>
                            <input
                                name="nomineeName"
                                placeholder="Nominee Name"
                                value={policy.nomineeName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Last Payment Date:</label>
                            <input
                                name="lastPaymentDate"
                                type="date"
                                value={policy.lastPaymentDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Next Payment Due Date:</label>
                            <input
                                name="nextPaymentDueDate"
                                type="date"
                                value={policy.nextPaymentDueDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit and Back to Main Buttons */}
                    <div style={styles.buttonContainer}>
                        <button type="submit" style={styles.button}>
                            Submit
                        </button>
                        <button
                            type="button"
                            style={styles.button}
                            onClick={() => changeView("main")}
                        >
                            Back to Main
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

const styles = {
    formContainer: {
        textAlign: "center",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "50%",
        margin: "auto",
        color: "black",
        backgroundColor: "white",
    },
    section: {
        marginBottom: "25px",
        textAlign: "left",
        padding: "0 20px",
    },
    inputGroup: {
        marginBottom: "20px",
        textAlign: "left",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
    },
    button: {
        margin: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "white",
    },
};

export default UpdatePolicy;
