import React from 'react';
import { Box, Typography } from '@mui/material';

const Handover = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#121212',
                color: '#e0e7ff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="h4">
                Handover Page
            </Typography>
        </Box>
    );
};

export default Handover;
