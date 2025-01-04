import React, { useEffect, useState } from "react";
import AddPolicy from "./components/AddPolicy";
import UpdatePolicy from "./components/UpdatePolicy";
import DeletePolicy from "./components/DeletePolicy";
import ViewPolicies from "./components/ViewPolicies";
import insuranceImage from "./assets/insurance.jpg"; // Adjust the path as needed

const App = () => {
    const [view, setView] = useState("main");
    const [policyId, setPolicyId] = useState(null);

    useEffect(() => {
        document.documentElement.style.height = "100vh";
        document.body.style.height = "100%";
        document.body.style.margin = "0"; // Remove default margin
        document.body.style.padding = "0"; // Remove default padding
        document.body.style.backgroundImage = `url(${insuranceImage})`;
        document.body.style.backgroundSize = "cover"; // Ensures the image covers the viewport
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.overflow = "show"; // Disable scrolling
        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${insuranceImage})`;
        document.body.style.backgroundAttachment = "fixed"; // Fix the background to the viewport
    }, []);
   

    const changeView = (viewName, id = null) => {
        setView(viewName);
        setPolicyId(id);
    };

    const renderView = () => {
        switch (view) {
            case "add":
                return <AddPolicy changeView={changeView} />;
            case "update":
                return <UpdatePolicy changeView={changeView} id={policyId} />;
            case "delete":
                return <DeletePolicy changeView={changeView} />;
            case "view":
                return <ViewPolicies changeView={changeView} />;
            default:
                return (
                    <div style={styles.main}>
                        <h1>Insurance Policy Manager</h1>
                        <div style={styles.buttonsContainer}>
                        <button style={styles.button} onClick={() => changeView("add")}>Add Policy</button>
                        <button style={styles.button} onClick={() => changeView("update")}>Update Policy</button>
                        <button style={styles.button} onClick={() => changeView("delete")}>Delete Policy</button>
                        <button style={styles.button} onClick={() => changeView("view")}>View Policies</button>
                        </div>
                    </div>
                );
        }
    };

    return <div style={styles.container}>{renderView()}</div>;
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        textAlign: "right",
        margin: "80px",
        color:"white",
        // paddingTop: "20px", // Optional padding for spacing
        paddingRight: "10px", // Optional padding to adjust the spacing from the right edge
        
    },
    main: {
        margin: "20px",
    },

    buttonsContainer: {
        display: "flex",
        justifyContent: "center", // Center buttons horizontally
        flexDirection: "column", // Stack the buttons vertically
        alignItems: "flex-end", // Align buttons to the right
        padding: "10px 60px",
    },

    button: {
        width: "200px", // Ensure same width for all buttons
        height: "50px", // Set height for consistency
        margin: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "black",
    },
};

export default App;
