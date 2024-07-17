import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  marginTop: 'auto',
  padding: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  textAlign: 'center',
  width: '100%',
});

function Footer() {
  return (
    <FooterContainer>
      <Typography variant="body2">
        さくせいしゃ: Stevan | あなたは とても とくべつな ひと です
      </Typography>
    </FooterContainer>
  );
}

export default Footer;
