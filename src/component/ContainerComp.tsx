import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContainerComp = () => {
  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h1">Bryan Reyes</Typography>
            <Typography variant="h6">A Web Developer.</Typography>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, non. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nostrum, sapiente?
            </Typography>

            <Box>
              <ButtonGroup variant="contained">
                <IconButton>
                  <GitHubIcon />
                </IconButton>
                <IconButton>
                  <GitHubIcon />
                </IconButton>
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </ButtonGroup>
            </Box>
          </Grid>
          <Grid
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: { sm: 'none', md: 'block' },
            }}
          >
            Should be gone in smaller screen.
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContainerComp;
