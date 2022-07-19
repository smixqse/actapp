import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  ThemeProvider,
  Slide,
  useTheme,
  useMediaQuery
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import HistoryTwoToneIcon from '@mui/icons-material/HistoryTwoTone';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const tabs = {
  home: { title: 'refletir', icon: <HomeIcon /> },
  act: { title: 'agir', icon: <AllInclusiveIcon /> },
  visualize: { title: 'visualizar', icon: <HistoryTwoToneIcon /> }
};

const tabNames = Object.keys(tabs);

const tabsSize = { xs: '60px', sm: '80px' };

export default function Layout({ children, ...props }: PropsWithChildren) {
  const router = useRouter();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  function getTab(route: string) {
    return tabNames.indexOf(route.slice(1));
  }

  function isThisATab(route: string) {
    const tabInTabNames = getTab(route);
    return tabInTabNames !== -1;
  }

  const [tab, setTab] = useState(getTab(router.pathname));
  const [shouldShowTabs, setShouldShowTabs] = useState(
    isThisATab(router.pathname)
  );

  useEffect(() => {
    setShouldShowTabs(isThisATab(router.pathname));
    setTab(getTab(router.pathname));
  }, [router, location]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          height: '100%',
          overflow: 'hidden'
          //filter: 'blur(3px)'
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
            {children}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', sm: tabsSize.sm },
            height: { xs: tabsSize.xs, sm: '100%' },
            order: { sm: -1 }
          }}
          display={shouldShowTabs ? 'flex' : 'none'}
        ></Box>
      </Box>
      <Slide
        direction={sm ? 'right' : 'up'}
        appear={false}
        in={shouldShowTabs}
        mountOnEnter
      >
        <BottomNavigation
          value={tab}
          onChange={(_, tabIndex) => router.push(`/${tabNames[tabIndex]}`)}
          sx={{
            flexDirection: { sm: 'column' },
            position: 'fixed',
            bottom: '0',
            width: { xs: '100%', sm: tabsSize.sm },
            height: { xs: tabsSize.xs, sm: '100%' }
          }}
        >
          {Object.entries(tabs).map(([tab, tabInfo]) => (
            <BottomNavigationAction
              key={tab}
              icon={tabInfo.icon}
              showLabel={false}
            />
          ))}
        </BottomNavigation>
      </Slide>
      <Box
        sx={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          opacity: '50%'
        }}
      >
        a
      </Box>
    </>
  );
}
