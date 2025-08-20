import React from "react";
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { styled, keyframes } from '@mui/system';
import { motion } from "framer-motion";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 1s ease-in-out;
`;

const teamMembers = [
  { name: "Navin Narkhede", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Navin" },
  { name: "Adwyait Pawar", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Adwyait" },
  { name: "Harshal Kolhe", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Harshal" },
  { name: "Kapil Bhajipale", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Kapil" },
  { name: "Sanskruti Yealkar", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Sanskruti" },
  { name: "Sahil Mhatre", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Sahil" },
  { name: "Shivendra Patel", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Shivendra" },
  { name: "Himanashu Dekate", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Himanashu" },
  { name: "Khushaboo Gupta", qualification: "PGDAC Full Stack Developer", image: "https://placehold.co/400x200/222/fff?text=Khushaboo" },
];

const cardVariants = {
  initial: { scale: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.5)', transform: 'perspective(1000px) rotateY(0deg)' },
  hover: { scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.7)', transform: 'perspective(1000px) rotateY(5deg)' }
};

const textVariants = {
  initial: { color: '#b0c4de' },
  hover: { color: '#f0f8ff', scale: 1.05 }
};

const AboutIndiaDrive = () => {
  return (
    <AnimatedBox sx={{ minHeight: "100vh", backgroundColor: "#000", padding: 4, paddingTop: "64px" }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: 4,
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            textAlign: 'center',
            color: '#e0e7ff',
            border: '2px solid #555',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 4, color: '#f0f8ff' }}>
            About Fleeman
          </Typography>
          <Typography variant="body1" sx={{ color: '#b0c4de', marginBottom: 4 }}>
            It allows customers of the company (User) to browse & rent a car along with optional Add-Ons. The system provides user to select pick-up & return hub. It also allows the company staff to handover & return of the vehicle, prepare bill and manage the fleet.
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: 4, color: '#f0f8ff' }}>
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants} whileHover="hover" initial="initial">
                  <Card sx={{ backgroundColor: "#1e1e1e", color: "#e0e7ff", borderRadius: '8px', transition: 'box-shadow 0.3s, transform 0.3s' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={member.image}
                      alt={member.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <motion.div variants={textVariants}>
                        <Typography variant="h6">{member.name}</Typography>
                      </motion.div>
                      <motion.div variants={textVariants}>
                        <Typography variant="body2" sx={{ color: '#888' }}>{member.qualification}</Typography>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </AnimatedBox>
  );
};

export default AboutIndiaDrive;
