import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

function InputBox({label, type, placeholder}) {
    return (
        <>
            <TextField fullWidth required id="outlined-required" label={label} placeholder={placeholder} type={type} />

            {/* <Box sx={{display: "flex", alignItems: "flex-end"}}>
                <AccountCircle sx={{color: "action.active", mr: 1, my: 0.5}} />
                <TextField id="input-with-sx" label={label} type={type} variant="standard" fullWidth />
            </Box> */}
        </>
    );
}

export default InputBox;
