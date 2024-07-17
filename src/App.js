import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Confetti from 'react-confetti';
import MessageSection from './MessageSection';
import Footer from './Footer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Background = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
  minHeight: '100vh',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Header = styled(Typography)({
  animation: 'fadeIn 2s',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  marginTop: '20px',
  marginBottom: '20px',
  color: '#000',
  fontWeight: 'bold',
  background: 'none',
});

const IconContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '20px',
});

function App() {
  return (
    <ParallaxProvider>
      <Background>
        <Confetti />
        <Header variant="h2" align="center">
          🎉 たんじょうび おめでとう ございます, ありす! 🎉
        </Header>
        <Header variant="h4" align="center">
          たんじょうび おめでとう ございます
        </Header>
        <IconContainer>
          <FavoriteIcon style={{ color: 'red', fontSize: '2rem' }} />
          <StarIcon style={{ color: 'yellow', fontSize: '2rem' }} />
          <EmojiNatureIcon style={{ color: 'green', fontSize: '2rem' }} />
        </IconContainer>
        <Parallax y={[-20, 20]}>
          <MessageSection />
        </Parallax>
        <Parallax y={[-10, 10]}>
          <Box sx={{ mt: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h4" align="center" color="#000" fontWeight="bold">
                あなたのやさしさとあたたかさがわたしをげんきにしてくれます。
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                あなたとすごすじかんがだいすきです。
              </Typography>
            </motion.div>
          </Box>
        </Parallax>
        <Parallax y={[-10, 10]}>
          <Box sx={{ mt: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h4" align="center" color="#000" fontWeight="bold">
                ありす、さいこうのいちにちをすごしてね!
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                あなたのしあわせがわたしのねがいです。あなたのみらいがかがやかしいものでありますように。
              </Typography>
            </motion.div>
          </Box>
        </Parallax>
        <Footer />
      </Background>
    </ParallaxProvider>
  );
}

export default App;
