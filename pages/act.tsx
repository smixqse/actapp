import { Box, IconButton, Stack, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/settings';

export default function Act() {
  return (
    <Stack
      direction="row"
      justifyContent="left"
      marginX={'2rem'}
      marginY={'2rem'}
      alignItems="center"
      minHeight={'40px'}
    >
      {/* left */}
      <Typography variant="h5" fontWeight="bold">
        agir
      </Typography>
    </Stack>
  );
}
