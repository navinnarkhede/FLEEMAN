  // import React, { useState } from "react";
  // import {
  //   Container,
  //   Box,
  //   Typography,
  //   TextField,
  //   MenuItem,
  //   Select,
  //   InputLabel,
  //   FormControl,
  //   Grid,
  // } from "@mui/material";
  // import { motion } from "framer-motion";
  // import { useNavigate } from "react-router-dom";
  // import { styled } from "@mui/system";

  // // Custom styled components for the dark theme
  // const StyledBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent black
  //   boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  //   borderRadius: "15px",
  //   padding: theme.spacing(4, 6),
  //   border: "2px solid #555",
  // }));

  // const StyledButton = styled(Box)(({ theme }) => ({
  //   alignItems: "center",
  //   backgroundImage: "linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",
  //   border: "0",
  //   borderRadius: "8px",
  //   boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
  //   boxSizing: "border-box",
  //   color: "#ffffff",
  //   display: "flex",
  //   fontSize: "18px",
  //   justifyContent: "center",
  //   lineHeight: "1em",
  //   maxWidth: "100%",
  //   minWidth: "140px",
  //   padding: "3px",
  //   textDecoration: "none",
  //   userSelect: "none",
  //   webkitUserSelect: "none",
  //   touchAction: "manipulation",
  //   whiteSpace: "nowrap",
  //   cursor: "pointer",
  //   transition: "all 0.3s",
  //   "&:hover": {
  //     outline: "0",
  //     "& > span": {
  //       background: "none",
  //     },
  //   },
  //   "&:active": {
  //     transform: "scale(0.9)",
  //   },
  // }));

  // const StyledButtonText = styled(Typography)(({ theme }) => ({
  //   backgroundColor: "rgb(5, 6, 45)",
  //   padding: "16px 24px",
  //   borderRadius: "6px",
  //   width: "100%",
  //   height: "100%",
  //   transition: "300ms",
  // }));

  // const inputSx = {
  //   "& .MuiInputBase-input": { color: "#e0e7ff" },
  //   "& .MuiInputLabel-root": { color: "#b0c4de" },
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": { borderColor: "#b0c4de" },
  //     "&:hover fieldset": { borderColor: "#f0f8ff" },
  //     "&.Mui-focused fieldset": { borderColor: "#f0f8ff" },
  //   },
  //   "& .MuiSvgIcon-root": { color: "#b0c4de" },
  // };

  // const MembershipRegistration = () => {
  //   const navigate = useNavigate();

  //   //states
  //   const initialFormState = {
  //     firstName: "",
  //     lastName: "",
  //     address: "",
  //     email: "",
  //     city: "",
  //     zip: "",
  //     homePhone: "",
  //     cellPhone: "",
  //     drivingLicense: "",
  //     licenseIssuedBy: "",
  //     licenseValidThru: "",
  //     passportNo: "",
  //     passportIssuedBy: "",
  //     passportValidThru: "",
  //     birthDate: "",
  //     preferredCar: "",
  //   };

  //   const [formData, setFormData] = useState(initialFormState);

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Submitted", formData);
  //   };

  //   const handleClear = () => {
  //     setFormData(initialFormState);
  //   };

  //   const containerVariants = {
  //     hidden: { opacity: 0, y: 50 },
  //     visible: {
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         type: "spring",
  //         stiffness: 100,
  //         damping: 10,
  //         when: "beforeChildren",
  //         staggerChildren: 0.1,
  //       },
  //     },
  //   };

  //   const itemVariants = {
  //     hidden: { opacity: 0, y: 20 },
  //     visible: { opacity: 1, y: 0 },
  //   };

  //   return (
  //     <Box
  //       sx={{
  //         position: 'relative',
  //         minHeight: '100vh',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         overflow: 'hidden',
  //         backgroundColor: '#000',
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           width: '100%',
  //           height: '100%',
  //           backgroundImage: "url('https://images.unsplash.com/photo-1549465220-1a9088703417?auto=format&fit=crop&w=1600&q=80')",
  //           backgroundSize: 'cover',
  //           backgroundPosition: 'center',
  //           filter: 'blur(8px) brightness(0.6)',
  //           zIndex: -1,
  //         }}
  //       />
  //       <Container
  //         maxWidth="md"
  //         sx={{
  //           paddingTop: "64px", // Pushes content below the fixed navbar
  //         }}
  //         component={motion.div}
  //         variants={containerVariants}
  //         initial="hidden"
  //         animate="visible"
  //       >
  //         <StyledBox>
  //           <motion.div variants={itemVariants}>
  //             <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#f0f8ff' }}>
  //               Membership Registration
  //             </Typography>
  //           </motion.div>
  //           <form onSubmit={handleSubmit}>
  //             <Grid container spacing={4} sx={{ mt: 2 }}>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="First Name"
  //                     name="firstName"
  //                     value={formData.firstName}
  //                     onChange={handleChange}
  //                     required
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Last Name"
  //                     name="lastName"
  //                     value={formData.lastName}
  //                     onChange={handleChange}
  //                     required
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Address"
  //                     name="address"
  //                     value={formData.address}
  //                     onChange={handleChange}
  //                     required
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Email"
  //                     type="email"
  //                     name="email"
  //                     value={formData.email}
  //                     onChange={handleChange}
  //                     required
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="City"
  //                     name="city"
  //                     value={formData.city}
  //                     onChange={handleChange}
  //                     required
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="ZIP Code"
  //                     name="zip"
  //                     value={formData.zip}
  //                     onChange={handleChange}
  //                     required
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Home Phone"
  //                     name="homePhone"
  //                     value={formData.homePhone}
  //                     onChange={handleChange}
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Cell Phone"
  //                     name="cellPhone"
  //                     value={formData.cellPhone}
  //                     onChange={handleChange}
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Driving License"
  //                     name="drivingLicense"
  //                     value={formData.drivingLicense}
  //                     onChange={handleChange}
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="License Issued By"
  //                     name="licenseIssuedBy"
  //                     value={formData.licenseIssuedBy}
  //                     onChange={handleChange}
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="License Valid Thru"
  //                     name="licenseValidThru"
  //                     type="date"
  //                     InputLabelProps={{ shrink: true }}
  //                     value={formData.licenseValidThru}
  //                     onChange={handleChange}
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Passport No."
  //                     name="passportNo"
  //                     value={formData.passportNo}
  //                     onChange={handleChange}
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Passport Issued By"
  //                     name="passportIssuedBy"
  //                     value={formData.passportIssuedBy}
  //                     onChange={handleChange}
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Passport Valid Thru"
  //                     name="passportValidThru"
  //                     type="date"
  //                     InputLabelProps={{ shrink: true }}
  //                     value={formData.passportValidThru}
  //                     onChange={handleChange}
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <TextField
  //                     fullWidth
  //                     label="Birth Date"
  //                     name="birthDate"
  //                     type="date"
  //                     InputLabelProps={{ shrink: true }}
  //                     value={formData.birthDate}
  //                     onChange={handleChange}
  //                     required
  //                     variant="outlined"
  //                     sx={inputSx}
  //                   />
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <motion.div variants={itemVariants}>
  //                   <FormControl fullWidth variant="outlined" sx={inputSx}>
  //                     <InputLabel id="preferred-car-label" sx={{ color: "#b0c4de" }}>
  //                       Preferred Car Type
  //                     </InputLabel>
  //                     <Select
  //                       labelId="preferred-car-label"
  //                       name="preferredCar"
  //                       value={formData.preferredCar}
  //                       onChange={handleChange}
  //                       label="Preferred Car Type"
  //                     >
  //                       <MenuItem value="Sedan">Sedan</MenuItem>
  //                       <MenuItem value="SUV">SUV</MenuItem>
  //                       <MenuItem value="Hatchback">Hatchback</MenuItem>
  //                       <MenuItem value="Luxury">Luxury</MenuItem>
  //                       <MenuItem value="Convertible">Convertible</MenuItem>
  //                     </Select>
  //                   </FormControl>
  //                 </motion.div>
  //               </Grid>
  //               <Grid item xs={12} sx={{ mt: 4 }}>
  //                 <motion.div variants={itemVariants}>
  //                   <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
  //                     <StyledButton type="submit">
  //                       <StyledButtonText component="span">Submit</StyledButtonText>
  //                     </StyledButton>
  //                     <StyledButton type="button" onClick={handleClear}>
  //                       <StyledButtonText component="span">Clear</StyledButtonText>
  //                     </StyledButton>
  //                   </Box>
  //                 </motion.div>
  //               </Grid>
  //             </Grid>
  //           </form>
  //         </StyledBox>
  //       </Container>
  //     </Box>
  //   );
  // };

  // export default MembershipRegistration;

  import React, { useState } from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

// Custom styled components for the dark theme
const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent black
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    borderRadius: "15px",
    padding: theme.spacing(4, 6),
    border: "2px solid #555",
}));

const StyledButton = styled(Button)(({ theme }) => ({
    alignItems: "center",
    backgroundImage: "linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",
    border: "0",
    borderRadius: "8px",
    boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
    boxSizing: "border-box",
    color: "#ffffff",
    display: "flex",
    fontSize: "18px",
    justifyContent: "center",
    lineHeight: "1em",
    maxWidth: "100%",
    minWidth: "140px",
    padding: "3px",
    textDecoration: "none",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "manipulation",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
        outline: "0",
        "& > span": {
            background: "none",
        },
    },
    "&:active": {
        transform: "scale(0.9)",
    },
}));

const StyledButtonText = styled(Typography)(({ theme }) => ({
    backgroundColor: "rgb(5, 6, 45)",
    padding: "16px 24px",
    borderRadius: "6px",
    width: "100%",
    height: "100%",
    transition: "300ms",
}));

const inputSx = {
    "& .MuiInputBase-input": { color: "#e0e7ff" },
    "& .MuiInputLabel-root": { color: "#b0c4de" },
    "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#b0c4de" },
        "&:hover fieldset": { borderColor: "#f0f8ff" },
        "&.Mui-focused fieldset": { borderColor: "#f0f8ff" },
    },
    "& .MuiSvgIcon-root": { color: "#b0c4de" },
};

const MembershipRegistration = () => {
    const navigate = useNavigate();

    //states
    const initialFormState = {
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        city: "",
        zip: "",
        homePhone: "",
        cellPhone: "",
        drivingLicense: "",
        licenseIssuedBy: "",
        licenseValidThru: "",
        passportNo: "",
        passportIssuedBy: "",
        passportValidThru: "",
        birthDate: "",
        preferredCar: "",
    };

    const [formData, setFormData] = useState(initialFormState);
    const [openDialog, setOpenDialog] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenDialog(true);
    };

    const handleClear = () => {
        setFormData(initialFormState);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        navigate("/");
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: '#000',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url('https://images.unsplash.com/photo-1549465220-1a9088703417?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px) brightness(0.6)',
                    zIndex: -1,
                }}
            />
            <Container
                maxWidth="md"
                sx={{
                    paddingTop: "64px", // Pushes content below the fixed navbar
                }}
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <StyledBox>
                    <motion.div variants={itemVariants}>
                        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#f0f8ff' }}>
                            Membership Registration
                        </Typography>
                    </motion.div>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="ZIP Code"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Home Phone"
                                        name="homePhone"
                                        value={formData.homePhone}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Cell Phone"
                                        name="cellPhone"
                                        value={formData.cellPhone}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Driving License"
                                        name="drivingLicense"
                                        value={formData.drivingLicense}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="License Issued By"
                                        name="licenseIssuedBy"
                                        value={formData.licenseIssuedBy}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="License Valid Thru"
                                        name="licenseValidThru"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.licenseValidThru}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Passport No."
                                        name="passportNo"
                                        value={formData.passportNo}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Passport Issued By"
                                        name="passportIssuedBy"
                                        value={formData.passportIssuedBy}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Passport Valid Thru"
                                        name="passportValidThru"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.passportValidThru}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <TextField
                                        fullWidth
                                        label="Birth Date"
                                        name="birthDate"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={inputSx}
                                    />
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={itemVariants}>
                                    <FormControl fullWidth variant="outlined" sx={inputSx}>
                                        <InputLabel id="preferred-car-label" sx={{ color: "#b0c4de" }}>
                                            Preferred Car Type
                                        </InputLabel>
                                        <Select
                                            labelId="preferred-car-label"
                                            name="preferredCar"
                                            value={formData.preferredCar}
                                            onChange={handleChange}
                                            label="Preferred Car Type"
                                        >
                                            <MenuItem value="Sedan">Sedan</MenuItem>
                                            <MenuItem value="SUV">SUV</MenuItem>
                                            <MenuItem value="Hatchback">Hatchback</MenuItem>
                                            <MenuItem value="Luxury">Luxury</MenuItem>
                                            <MenuItem value="Convertible">Convertible</MenuItem>
                                        </Select>
                                    </FormControl>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 4 }}>
                                <motion.div variants={itemVariants}>
                                    <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
                                        <Button
                                            type="submit"
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: "600",
                                                color: "#b0c4de",
                                                borderColor: "#b0c4de",
                                                borderRadius: 1,
                                                padding: '14px',
                                                fontSize: '18px',
                                                "&:hover": {
                                                    color: "#1e2738",
                                                    backgroundColor: "#b0c4de",
                                                    borderColor: "#b0c4de",
                                                },
                                            }}
                                            variant="outlined"
                                        >
                                            Submit
                                        </Button>
                                        <Button 
                                            type="button" 
                                            onClick={handleClear}
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: "600",
                                                color: "#d9534f",
                                                borderColor: "#d9534f",
                                                borderRadius: 1,
                                                padding: '14px',
                                                fontSize: '18px',
                                                "&:hover": {
                                                    color: "#fff",
                                                    backgroundColor: "#d9534f",
                                                    borderColor: "#d9534f",
                                                },
                                            }}
                                            variant="outlined"
                                        >
                                            Clear
                                        </Button>
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </form>
                </StyledBox>
            </Container>
            {/* Custom Dialog for Success Message */}
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        color: "#f0f8ff",
                        borderRadius: "15px",
                        border: "2px solid #5b42f3",
                        p: 2
                    }
                }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ color: "#00ddeb" }}>
                    {"Success!"}
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1" sx={{ color: "#b0c4de" }}>
                        Member registration successful!
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} autoFocus sx={{ color: "#b0c4de" }}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default MembershipRegistration;

