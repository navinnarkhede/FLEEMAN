import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./component/HomePage/HomePage";
import AdminLogin from "./component/LoginSignup/AdminLogin";
import Selectlocation from "./component/SelectLocation/Selectlocation";
import SelectCarOption from "./component/SelectCarOption/SelectCarOption";
import Login from "./component/LoginSignup/Login";
import Signup from "./component/LoginSignup/Signup";
import AdminDashboard from "./component/HomePage/AdminDashboard";
import NavBar from "./component/Navbar";
import RentalAddons from "./component/SelectLocation/RentalAddons";
import RentalForm from "./component/SelectCarOption/RentalForm";
import MembershipRegistration from "./component/Membarship/MembershipRegistration";
import StaffBookingForm from "./component/LoginSignup/StaffBookingForm";
import StaffHandOver from "./component/LoginSignup/StaffHandOver";
import { BookingForm } from "./component/HomePage/BookingForm";
import ReviewDetails from "./component/SelectCarOption/ReviewDetails";
import ModifyCancelBooking from "./component/Membarship/ModifyCancelBooking";
import ConfirmationBooking from "./component/SelectCarOption/ConfirmationBooking";
import CustomerCare from "./component/LoginSignup/CoustomerCare";
import AboutIndiaDrive from "./component/LoginSignup/AboutRenameDrive";
import ReturnPage from "./component/LoginSignup/ReturnPage";  
import CancellationPage from "./component/LoginSignup/CancellationPage";
import Profile from "./component/Profile";

function AppContent() {
  const location = useLocation();

  // Hide default NavBar for admin routes
  const isAdminRoute = [
    "/AdminDashboard",
    "/booking",
    "/handover",
    "/return",
    "/cancellation"
  ].includes(location.pathname);

  return (
    <>
      {!isAdminRoute && <NavBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selectLocation" element={<Selectlocation />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AdminCustomers" element={<AdminDashboard />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/SelectCarOption" element={<SelectCarOption />} />
        <Route path="/RentalAddons" element={<RentalAddons />} />
        <Route path="/RentalForm" element={<RentalForm />} />
        <Route path="/ReviewDetails" element={<ReviewDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/membership" element={<MembershipRegistration />} />
        <Route path="/booking" element={<StaffBookingForm />} />
        <Route path="/handover" element={<StaffHandOver />} />
        <Route path="modify-booking" element={<ModifyCancelBooking />} />
        <Route path="/ConfirmationBooking" element={<ConfirmationBooking />} />
        <Route path="/customer-care" element={<CustomerCare />} />
        <Route path="/about" element={<AboutIndiaDrive />} />
        <Route path="/return" element={<ReturnPage />} />
        <Route path="/cancellation" element={<CancellationPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
