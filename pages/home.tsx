import {
  Box,
  Container,
  Fade,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/settings';
import { useState, useEffect } from 'react';
import { SwitchTransition, TransitionGroup } from 'react-transition-group';
import { HomeActionButtons } from '../components/home/HomeActionButtons';
import Link from 'next/link';

export default function Home() {
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        marginX={'2rem'}
        marginY={'2rem'}
        alignItems="center"
      >
        {/* left */}
        <SwitchTransition>
          <Fade appear={false} key={showGreeting as any}>
            {showGreeting ? (
              <Typography variant="h5" fontWeight="bold">
                bom dia
              </Typography>
            ) : (
              <Typography variant="h5" fontWeight="bold">
                anotar
              </Typography>
            )}
          </Fade>
        </SwitchTransition>
        {/* right */}
        <Stack direction="row" spacing={2}>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Stack>
      </Stack>

      {/* days list */}
      <Box>
        {/* a day */}
        <Box>
          {/* a day's date */}
          <Container>
            <Typography
              textAlign={'center'}
              sx={{ opacity: '50%' }}
              fontSize={'0.75rem'}
              marginBottom={'1rem'}
            >
              yo
            </Typography>
          </Container>

          <Container>g</Container>
        </Box>
      </Box>

      {/* fixed */}
      <HomeActionButtons></HomeActionButtons>
    </>
  );
}
