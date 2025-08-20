import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// You will need to install react-slick and its CSS for this component to work
// npm install react-slick slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Placeholder image URLs for a dynamic hero section
const images = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
  "https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/26my/bentayga-speed/Homepage%20Main.jpg/_jcr_content/renditions/original.image_file.1920.960.file/Homepage%20Main.jpg",
];

// Animation variants for Framer Motion
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const quotes = [
  {
    title: "The Road Awaits",
    subtitle: "Book your perfect ride with ease and start your journey today!",
  },
  {
    title: "Rent, Drive, Explore",
    subtitle: "Your next great adventure is just a click away.",
  },
  {
    title: "Seamless Car Rentals",
    subtitle: "Experience the freedom of the open road with our premium fleet.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500, // Slower speed for a more dramatic fade
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index} sx={{ height: '100vh', width: '100vw' }}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Box>
        ))}
      </Slider>

      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />

      <motion.div
        key={currentSlide} // Re-trigger animation when the slide changes
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 10,
          padding: '16px',
        }}
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textItemVariants}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            }}
          >
            {quotes[currentSlide].title}
          </Typography>
        </motion.div>
        <motion.div variants={textItemVariants}>
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
            }}
          >
            {quotes[currentSlide].subtitle}
          </Typography>
        </motion.div>
        <motion.div variants={textItemVariants}>
            
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
