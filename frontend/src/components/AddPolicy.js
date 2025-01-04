import React, { useState } from "react";
import axios from "axios";

const AddPolicy = ({ changeView }) => {
    const [policy, setPolicy] = useState({
        policyName: "",
        policyNumber: "",
        policyType: "",
        policyTerm: "",
        startDate: "",
        endDate: "",
        premiumAmount: "",
        paymentFrequency: "",
        nomineeName: "",
        lastPaymentDate: "",
        nextPaymentDueDate: "",
        fullName: "",
        dateOfBirth: "",
        contactNumber: "",
        emailAddress: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Validation for alphabetic fields
        if (["fullName", "policyName", "policyType", "nomineeName"].includes(name)) {
            if (/^[a-zA-Z\s]*$/.test(value)) {
                setPolicy({ ...policy, [name]: value });
            } else {
                alert("This field should contain only alphabetic characters.");
            }
        } 
        // Validation for numeric fields like premiumAmount
        else if (name === "premiumAmount") {
            if (/^\d*$/.test(value)) {
                setPolicy({ ...policy, [name]: value });
            } else {
                alert("This field should contain only numeric values.");
            }
        } 
        // Validation for contactNumber (only numeric and exactly 10 digits)
        else if (name === "contactNumber") {
            if (/^\d{0,10}$/.test(value)) {
                setPolicy({ ...policy, [name]: value });
            } else {
                alert("Contact number must be numeric and up to 10 digits.");
            }
        } 
        // Validation for policyNumber (only numeric and exactly 10 digits)
        else if (name === "policyNumber") {
            if (/^\d{0,10}$/.test(value)) {
                setPolicy({ ...policy, [name]: value });
            } else {
                alert("Policy number must be numeric and exactly 10 digits.");
            }
        } 
        // Default case for other fields
        else {
            setPolicy({ ...policy, [name]: value });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/policies", policy)
            .then(() => alert("Policy added successfully!"))
            .catch((error) => console.error("Error adding policy:", error));
    };

    return (
        <div style={styles.formContainer}>
            <h2>Add Policy</h2>
            <form onSubmit={handleSubmit}>
                {/* Personal Details Section */}
                <div style={styles.section}>
                    <h3>Personal Details</h3>
                    <div style={styles.inputGroup}>
                        <label>Full Name:</label>
                        <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Date of Birth:</label>
                        <input name="dateOfBirth" type="date" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Contact Number:</label>
                        <input name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Email Address:</label>
                        <input name="emailAddress" type="email" placeholder="Email Address" onChange={handleChange} required />
                    </div>
                </div>

                {/* Policy Details Section */}
                <div style={styles.section}>
                    <h3>Policy Details</h3>
                    
                    <div style={styles.inputGroup}>
                        <label>Policy Name:</label>
                        <input name="policyName" placeholder="Policy Name" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Policy Number:</label>
                        <input name="policyNumber" placeholder="Policy Number" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Policy Type:</label>
                        <input name="policyType" placeholder="Policy Type" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Policy Term (in years):</label>
                        <input name="policyTerm" type="number" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Start Date:</label>
                        <input name="startDate" type="date" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>End Date:</label>
                        <input name="endDate" type="date" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Premium Amount:</label>
                        <input name="premiumAmount" placeholder="Premium Amount" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Payment Frequency:</label>
                        <select name="paymentFrequency" onChange={handleChange} required>
                            <option value="">Select Frequency</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Nominee Name:</label>
                        <input name="nomineeName" placeholder="Nominee Name" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Contact Number:</label>
                        <input name="contactNumber" placeholder="contactNumber" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Last Payment Date:</label>
                        <input name="lastPaymentDate" type="date" onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Next Payment Due Date:</label>
                        <input name="nextPaymentDueDate" type="date" onChange={handleChange} required />
                    </div>
                </div>
                

                {/* Submit Button Section */}
                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>Submit</button>
                    <button type="button" style={styles.button} onClick={() => changeView("main")}>Back to Main</button>
                </div>
            </form>
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
        width: "100%",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        
    },
    label: {
        fontWeight: "bold",
        marginBottom: "8px",
    },
    input: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "100%",
        fontSize: "16px",
    },
    select: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "100%",
        fontSize: "16px",
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
        color: "black",
    },
};

export default AddPolicy;


