import InputBox from "../components/InputBox";
import React from "react";
import "../styles/signup.css";
import PasswordBox from "../components/PasswordBox";
import MyButton from "../components/MyButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Signup() {
    const [userType, setUserType] = React.useState("");

    const handleChange = (event) => {
        setUserType(event.target.value);
    };
    return (
        <div className="Signup">
            <br />
            <br />
            <br />
            <br />
            <h2>Register Yourself</h2><br />

            <div className="container-register-owner">
                <FormControl required sx={{m: 0, minWidth: 630}}>
                    <InputLabel id="user-type-label" fullWidth>User Type</InputLabel>
                    <Select
                        labelId="user-type-label"
                        id="user-type"
                        value={userType}
                        label="User Type *"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            {/* <em>None</em> */}
                        </MenuItem>
                        <MenuItem value="owner" defaultChecked>Property Owner</MenuItem>
                        {/* <MenuItem value="tenant">Tenant</MenuItem> */}
                    </Select>
                </FormControl>
                <br />
                <br />
                <InputBox label="Name" placeholder="Enter your Name" />
                <br />
                <br />
                <InputBox label="Email" placeholder="Enter your email" />
                <br />
                <br />
                <InputBox label="Phone" placeholder="Enter your Phone Number" type="number" />
                <br />
                <br />
                <InputBox label="City" placeholder="Enter your City" />
                <br />
                <br />

                <PasswordBox />
                <br />
                <br />
                <MyButton value="Register" />
            </div>
        </div>
    );
}

export default Signup;
