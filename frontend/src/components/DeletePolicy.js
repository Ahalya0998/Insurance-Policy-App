import React, { useState } from "react";
import axios from "axios";

const DeletePolicy = ({ changeView }) => {
    const [policyNumber, setPolicyNumber] = useState("");

    const handleDelete = () => {
        // if (!policyNumber) 
              // Check if policyNumber is empty or invalid
    if (!policyNumber || isNaN(policyNumber)){
            alert("Please enter a policy number.");
            return;
        }

        axios
            .delete(`http://localhost:8080/api/policies/${policyNumber}`)
            .then(() => {
                alert("Policy deleted successfully!");
                setPolicyNumber("");
            })
            .catch((error) => {
                console.error("Error deleting policy:", error);
                alert("Failed to delete policy. Please check the policy number.");
            });
    };

    return (
        <div style={styles.container}>
            <h2>Delete Policy</h2>
            <div style={styles.inputGroup}>
                <label>Policy Number:</label>
                <input
                    type="number"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                    placeholder="Enter Policy Number"
                    required
                    style={styles.input}
                />
                
            </div>
            <div style={styles.buttonContainer}>
                <button onClick={handleDelete} style={styles.button}>
                    Delete
                </button>
                <button onClick={() => changeView("main")} style={styles.button}>
                    Back to Main
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "30%",
        margin: "20px 0 0 400px",
        color: "black",
        backgroundColor: "white",
    },
    inputGroup: {
        marginBottom: "20px",
        textAlign: "left",
        padding: "0 20px",
    },
    input: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "80%",
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

export default DeletePolicy;
