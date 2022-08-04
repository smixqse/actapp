import { Box, ButtonGroup, Fab } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { useRouter } from 'next/router';

export function HomeActionButtons() {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '4.5rem',
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <ButtonGroup
        sx={{
          position: 'fixed',
          display: 'flex',
          width: '80%',
          maxWidth: '300px'
        }}
        size={'small'}
      >
        <Fab
          variant="extended"
          color="primary"
          sx={{
            borderBottomRightRadius: '0',
            borderTopRightRadius: '0',
            flexGrow: '1',
            marginRight: '5px'
          }}
          onClick={() => router.push('/editregistry')}
        >
          criar registro
        </Fab>
        <Fab
          variant="extended"
          color="primary"
          sx={{
            borderBottomLeftRadius: '0',
            borderTopLeftRadius: '0',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <CreateIcon
            fontSize="small"
            sx={{
              transform: 'translateX(-3px)'
            }}
          ></CreateIcon>
        </Fab>
      </ButtonGroup>
    </Box>
  );
}
