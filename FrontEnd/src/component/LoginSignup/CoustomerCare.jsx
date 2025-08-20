import React from "react";
import { Box, Typography, Card, CardContent, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

// Custom styled Box component for the main card container
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  borderRadius: "15px",
  padding: theme.spacing(4, 6),
  border: "2px solid #555",
  color: "#e0e7ff",
  width: '100%',
  maxWidth: '600px',
}));

// A styled Card for the new promotions section
const PromotionCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1e1e1e",
  color: "#e0e7ff",
  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
  borderRadius: '8px',
  padding: theme.spacing(2),
  transition: 'box-shadow 0.3s, transform 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.7)',
  }
}));

// Animation variants for Framer Motion
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

const CustomerCare = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#000',
        paddingTop: '64px',
      }}
    >
      {/* Background Image with Blur and Dark Overlay */}
      <Box
        sx={{
          position: 'fixed', // Use fixed to cover the entire viewport
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
        maxWidth="lg"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ py: 4 }}
      >
        <StyledCard sx={{ maxWidth: '100%', mb: 4 }}>
          <motion.div variants={itemVariants}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#f0f8ff', mb: 3 }}>
              Customer Care
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="body1" align="center" sx={{ color: '#b0c4de', mb: 4 }}>
              If you have any questions or concerns, please feel free to reach out to us. We are here to help you.
            </Typography>
          </motion.div>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocalPhoneIcon sx={{ mr: 1, color: '#90caf9' }} />
                    <Typography variant="h6" sx={{ color: '#f0f8ff' }}>Contact Number</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#b0c4de', ml: 4 }}>
                    +91 98765 43210
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EmailIcon sx={{ mr: 1, color: '#90caf9' }} />
                    <Typography variant="h6" sx={{ color: '#f0f8ff' }}>Email Address</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#b0c4de', ml: 4 }}>
                    customercare@fleeman.com
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </CardContent>
        </StyledCard>

        {/* New section for promotions */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <motion.div variants={itemVariants}>
            <Typography variant="h4" gutterBottom sx={{ color: '#f0f8ff', mb: 4 }}>
              Current Promotions
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <PromotionCard>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" sx={{ color: '#90caf9' }}>Weekend Getaway Special</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Rent any car for three days and get the fourth day free! Perfect for your next short trip.
                    </Typography>
                  </CardContent>
                </PromotionCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <PromotionCard>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" sx={{ color: '#90caf9' }}>Member's Exclusive Discount</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Join our membership program today and receive an exclusive 15% discount on your first booking.
                    </Typography>
                  </CardContent>
                </PromotionCard>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default CustomerCare;
