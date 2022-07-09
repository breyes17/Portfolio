import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const ContainerComp = () => {
  return (
    <Container fixed>
      <Grid container spacing={1}>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box sx={{ height: '100vh', width: '100%', flexGrow: 1 }}>
            <Typography variant="h1">Bryan Reyes</Typography>
            <Typography variant="h6" mb={3}>
              A Web Developer.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, non. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nostrum, sapiente?
            </Typography>

            <Box mt={5}>
              <ButtonGroup variant="outlined" size="large">
                <IconButton>
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton>
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton>
                  <EmailIcon fontSize="large" />
                </IconButton>
              </ButtonGroup>
            </Box>
          </Box>
        </Grid>
        <Grid
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          Should be gone in smaller screen.
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContainerComp;
