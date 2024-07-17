import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const AnimatedText = styled(Typography)({
  animation: 'slideIn 2s',
  '@keyframes slideIn': {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  },
  marginBottom: '20px',
  color: '#000',
  fontWeight: 'bold',
  background: 'none',
});

function MessageSection() {
  return (
    <Container maxWidth="sm">
      <AnimatedText variant="body1" align="center" paragraph>
        いつも ありがとう。あなたは とても うつくしい です。すばらしい いちにちを すごして ください。あなたは せかい に ふさわしい です。
      </AnimatedText>
      <AnimatedText variant="body1" align="center" paragraph>
        そして、にほんで あなたに あうのを たのしみ に して います。
      </AnimatedText>
    </Container>
  );
}

export default MessageSection;
