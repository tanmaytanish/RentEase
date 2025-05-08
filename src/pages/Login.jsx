import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import "../styles/Login.css";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    
        const goToOwnerDashboard = () => {
            navigate("/owner-dashboard");
        };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="main">
            <Navbar />
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
                <Col
                    md={4}
                    className="d-flex flex-column justify-content-center align-items-center rounded border border-success p-4 bg-light"
                >
                    <h3 className="mb-4">Login</h3>

                    <form className="w-100">
                        <div className="mb-3">
                            <Box sx={{display: "flex", alignItems: "flex-end"}}>
                                <AccountCircle sx={{color: "action.active", mr: 1, my: 0.5}} />
                                <TextField id="input-with-sx" label="Email" variant="standard" fullWidth />
                            </Box>
                        </div>

                        <div className="mb-3">
                            <FormControl sx={{m: 1, width: "35ch"}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={showPassword ? "hide the password" : "display the password"}
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <Button onClick={goToOwnerDashboard} variant="primary" className="w-100" type="submit">
                            Login
                        </Button>

                        <p className="mt-3 text-center">
                            New User? <a href="/register">Sign Up</a>
                        </p>

                        {/* <Link to="/Signup" className="nav-link">Sign Up</Link> */}
                    </form>
                </Col>
            </Container>
        </div>
    );
}

export default Login;
