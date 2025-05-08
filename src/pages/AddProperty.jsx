import React, {useState} from "react";
import "../styles/AddProperty.css"; // Assuming you have a CSS file for styling
import InputBox from "../components/InputBox"; // Assuming you have an InputBox component
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddPropertyForm = () => {
    const [formData, setFormData] = useState({
        propertyName: "",
        address: "",
        rent: "",
        type: "",
        status: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Property:", formData);
        // TODO: Send `formData` to your backend API
        setFormData({
            propertyName: "",
            address: "",
            rent: "",
            type: "",
            status: "",
        });
    };

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <form className="property-form" onSubmit={handleSubmit}>
            <h2>Add New Property</h2>

            <InputBox label="Property Name" />
            <br />
            <br />

            <TextField required id="outlined-multiline-flexible" label="Description" multiline maxRows={4} />

            <br />
            <br />

            <FormControl sx={{m: 0, minWidth: 250}}>
                <InputLabel required fullWidth id="demo-simple-select-autowidth-label">
                    Number of Flats
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    label="Number of Flats"
                    required
                >
                    <MenuItem value="{1}">
                        <em>1</em>
                    </MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                </Select>
            </FormControl>

            <button type="submit">Add Property</button>
        </form>
    );
};

export default AddPropertyForm;
