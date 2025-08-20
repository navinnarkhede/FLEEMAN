// import React, { useState } from "react";
// import {
//     Box,
//     TextField,
//     Select,
//     MenuItem,
//     Button,
//     Typography,
//     Grid,
//     FormControl,
//     InputLabel,
//     Card,
//     CardContent
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const RentalForm = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         addressLine1: "",
//         addressLine2: "",
//         email: "",
//         city: "",
//         pincode: "",
//         phoneNumber: "",
//         mobileNumber: "",
//         creditCardType: "",
//         creditCardNumber: "",
//         drivingLicenseNumber: "",
//         idpNumber: "",
//         issuedByDL: "",
//         validThroughDL: "",
//         passportNumber: "",
//         passportValidThrough: "",
//         passportIssuedBy: "",
//         passportValidFrom: "",
//         passportIssueDate: "",
//         dateOfBirth: "",
//         pickupDate: "", 
//         returnDate: "",
//     });

//     const [message, setMessage] = useState("");

//     const dateFields = [
//         "validThroughDL",
//         "passportValidThrough",
//         "passportValidFrom",
//         "passportIssueDate",
//         "dateOfBirth",
//         "pickupDate",
//         "returnDate"
//     ];

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleCancel = () => {
//         alert("Booking Canceled");
//         navigate("/");
//     };

//     const handleProceed = async (e) => {
//         e.preventDefault();

//         // Ensure date fields are correctly formatted as YYYY-MM-DD for the backend
//         const formattedFormData = {
//           ...formData,
//           pickupDate: formData.pickupDate ? new Date(formData.pickupDate).toISOString().split('T')[0] : '',
//           returnDate: formData.returnDate ? new Date(formData.returnDate).toISOString().split('T')[0] : ''
//         };
        
//         // Simulating the selection of a car and addons
//         const selectedCar = { type: "Sedan", daily: 2000 };
//         const rentalAddons = [
//           { addOnName: "Child Seat", addonDailyRate: 200, quantity: 2 },
//           { addOnName: "GPS", addonDailyRate: 150, quantity: 1 }
//         ];

//         // Save all form data and booking details to sessionStorage
//         sessionStorage.setItem("formData", JSON.stringify(formattedFormData));
//         sessionStorage.setItem("selectedCar", JSON.stringify(selectedCar));
//         sessionStorage.setItem("addons", JSON.stringify(rentalAddons));

//         navigate("/ConfirmationBooking", { state: { formData: formattedFormData } });
//     };

//     const isFormValid = () => {
//       return (
//         formData.firstName &&
//         formData.lastName &&
//         formData.email &&
//         formData.addressLine1 &&
//         formData.city &&
//         formData.pincode &&
//         formData.pickupDate &&
//         formData.returnDate
//       );
//     };

//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 minHeight: "100vh",
//                 backgroundColor: "#f0f2f5",
//                 padding: 3
//             }}
//         >
//             <Card
//                 component={motion.div}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 sx={{
//                     width: "100%",
//                     maxWidth: 600,
//                     padding: 4,
//                     boxShadow: 3,
//                     borderRadius: 2,
//                     backgroundColor: "#fff"
//                 }}
//             >
//                 <Typography
//                     variant="h4"
//                     align="center"
//                     gutterBottom
//                     sx={{ color: "#1976d2" }}
//                 >
//                     Rental Form
//                 </Typography>
//                 {message && (
//                     <Typography color="error" align="center">
//                         {message}
//                     </Typography>
//                 )}
//                 <form onSubmit={handleProceed}>
//                     <Grid container spacing={2}>
//                         {Object.keys(formData).map((key) => (
//                             <Grid
//                                 item
//                                 xs={12}
//                                 sm={
//                                     key.includes("Name") ||
//                                     key.includes("Number")
//                                         ? 6
//                                         : 12
//                                 }
//                                 key={key}
//                             >
//                                 {key === "creditCardType" ? (
//                                     <FormControl fullWidth size="small">
//                                         <InputLabel>Credit Card Type</InputLabel>
//                                         <Select
//                                             label="Credit Card Type"
//                                             name={key}
//                                             value={formData[key]}
//                                             onChange={handleChange}
//                                         >
//                                             <MenuItem value="Visa">Visa</MenuItem>
//                                             <MenuItem value="MasterCard">
//                                                 MasterCard
//                                             </MenuItem>
//                                             <MenuItem value="American Express">
//                                                 American Express
//                                             </MenuItem>
//                                             <MenuItem value="Discover">
//                                                 Discover
//                                             </MenuItem>
//                                         </Select>
//                                     </FormControl>
//                                 ) : (
//                                     <TextField
//                                         fullWidth
//                                         label={key
//                                             .replace(/([A-Z])/g, " $1")
//                                             .trim()}
//                                         name={key}
//                                         value={formData[key]}
//                                         onChange={handleChange}
//                                         required={
//                                             !(
//                                                 key === "addressLine2" ||
//                                                 key === "creditCardType" ||
//                                                 key === "idpNumber" ||
//                                                 key === "passportNumber" ||
//                                                 key === "passportValidThrough" ||
//                                                 key === "passportIssuedBy" ||
//                                                 key === "passportValidFrom" ||
//                                                 key === "passportIssueDate" ||
//                                                 key === "state" ||
//                                                 key === "city" ||
//                                                 key === "pincode"
//                                             )
//                                         }
//                                         size="small"
//                                         type={
//                                             dateFields.includes(key)
//                                                 ? "date"
//                                                 : "text"
//                                         }
//                                         InputLabelProps={
//                                             dateFields.includes(key)
//                                                 ? { shrink: true }
//                                                 : {}
//                                         }
//                                     />
//                                 )}
//                             </Grid>
//                         ))}
//                     </Grid>
//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             mt: 3
//                         }}
//                     >
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             disabled={!isFormValid()}
//                         >
//                             Continue Booking
//                         </Button>
//                         <Button
//                             type="button"
//                             variant="outlined"
//                             color="error"
//                             onClick={handleCancel}
//                         >
//                             Cancel
//                         </Button>
//                     </Box>
//                 </form>
//             </Card>
//         </Box>
//     );
// };

// export default RentalForm;



import React, { useState } from "react";
import {
    Box,
    TextField,
    Select,
    MenuItem,
    Button,
    Typography,
    Grid,
    FormControl,
    InputLabel,
    Card
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "@mui/system";

const RentalForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        email: "",
        city: "",
        pincode: "",
        phoneNumber: "",
        mobileNumber: "",
        creditCardType: "",
        creditCardNumber: "",
        drivingLicenseNumber: "",
        idpNumber: "",
        issuedByDL: "",
        validThroughDL: "",
        passportNumber: "",
        passportValidThrough: "",
        passportIssuedBy: "",
        passportValidFrom: "",
        passportIssueDate: "",
        dateOfBirth: "",
        pickupDate: "",
        returnDate: "",
    });

    const [message, setMessage] = useState("");

    const dateFields = [
        "validThroughDL",
        "passportValidThrough",
        "passportValidFrom",
        "passportIssueDate",
        "dateOfBirth",
        "pickupDate",
        "returnDate"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        alert("Booking Canceled");
        navigate("/");
    };

    const handleProceed = async (e) => {
        e.preventDefault();
        const formattedFormData = {
            ...formData,
            pickupDate: formData.pickupDate ? new Date(formData.pickupDate).toISOString().split('T')[0] : '',
            returnDate: formData.returnDate ? new Date(formData.returnDate).toISOString().split('T')[0] : ''
        };
        const selectedCar = { type: "Sedan", daily: 2000 };
        const rentalAddons = [
            { addOnName: "Child Seat", addonDailyRate: 200, quantity: 2 },
            { addOnName: "GPS", addonDailyRate: 150, quantity: 1 }
        ];
        sessionStorage.setItem("formData", JSON.stringify(formattedFormData));
        sessionStorage.setItem("selectedCar", JSON.stringify(selectedCar));
        sessionStorage.setItem("addons", JSON.stringify(rentalAddons));
        navigate("/ConfirmationBooking", { state: { formData: formattedFormData } });
    };

    const isFormValid = () => {
        return (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.addressLine1 &&
            formData.city &&
            formData.pincode &&
            formData.pickupDate &&
            formData.returnDate
        );
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

    const inputStyles = {
        "& .MuiInputBase-input": { color: "#e0e7ff" },
        "& .MuiInputLabel-root": { color: "#b0c4de" },
        "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#b0c4de" },
            "&:hover fieldset": { borderColor: "#f0f8ff" },
            "&.Mui-focused fieldset": { borderColor: "#f0f8ff" },
        },
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
                paddingTop: '64px',
            }}
        >
            {/* Background Image with Blur and Dark Overlay */}
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
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Box
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        padding: 4,
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        textAlign: 'center',
                        color: '#e0e7ff',
                    }}
                >
                    <motion.div variants={itemVariants}>
                        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
                            Car Rental Form
                        </Typography>
                    </motion.div>
                    {message && (
                        <Typography color="error" align="center">
                            {message}
                        </Typography>
                    )}
                    <Box component="form" onSubmit={handleProceed}>
                        <Grid container spacing={3} sx={{ mt: 2 }}>
                            {Object.keys(formData).map((key) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={
                                        key === "addressLine1" || key === "addressLine2" || key.includes("passport") || key.includes("date") || key === "email" ? 12 : 6
                                    }
                                    key={key}
                                >
                                    {key === "creditCardType" ? (
                                        <motion.div variants={itemVariants}>
                                            <FormControl fullWidth size="small" sx={inputStyles}>
                                                <InputLabel>Credit Card Type</InputLabel>
                                                <Select
                                                    label="Credit Card Type"
                                                    name={key}
                                                    value={formData[key]}
                                                    onChange={handleChange}
                                                    sx={{
                                                        color: '#e0e7ff',
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: '#b0c4de'
                                                        },
                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: '#f0f8ff'
                                                        }
                                                    }}
                                                >
                                                    <MenuItem value="Visa">Visa</MenuItem>
                                                    <MenuItem value="MasterCard">MasterCard</MenuItem>
                                                    <MenuItem value="American Express">American Express</MenuItem>
                                                    <MenuItem value="Discover">Discover</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </motion.div>
                                    ) : (
                                        <motion.div variants={itemVariants}>
                                            <TextField
                                                fullWidth
                                                label={key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .trim()}
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleChange}
                                                required={
                                                    !(
                                                        key === "addressLine2" ||
                                                        key === "creditCardType" ||
                                                        key === "idpNumber" ||
                                                        key === "passportNumber" ||
                                                        key === "passportValidThrough" ||
                                                        key === "passportIssuedBy" ||
                                                        key === "passportValidFrom" ||
                                                        key === "passportIssueDate" ||
                                                        key === "phoneNumber" ||
                                                        key === "mobileNumber"
                                                    )
                                                }
                                                size="small"
                                                type={
                                                    dateFields.includes(key)
                                                        ? "date"
                                                        : "text"
                                                }
                                                InputLabelProps={{
                                                    shrink: dateFields.includes(key) || formData[key],
                                                }}
                                                sx={inputStyles}
                                            />
                                        </motion.div>
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                        <motion.div variants={itemVariants}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: 3,
                                    gap: 2
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    disabled={!isFormValid()}
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
                                >
                                    Continue Booking
                                </Button>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    color="error"
                                    onClick={handleCancel}
                                    fullWidth
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
                                >
                                    Cancel
                                </Button>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default RentalForm;