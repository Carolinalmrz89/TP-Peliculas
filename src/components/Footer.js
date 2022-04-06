import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { mainColor } from "../auxiliaries/Auxiliaries";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Paper
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: mainColor,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "white", fontSize: "14px" }}
          >
            {" "}
            LMRZ DEV - 2022
          </Typography>
        </Box>
        <Box>
          <Link href="https://github.com/Carolinalmrz89">
            <BottomNavigationAction
              label="Recents"
              icon={<GitHubIcon />}
              sx={{ color: "white", p: 0, pt: 2 }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/carolina-almaraz/">
            <BottomNavigationAction
              label="Recents"
              icon={<LinkedInIcon />}
              sx={{ color: "white", p: 0, pt: 2, minWidth: 0 }}
            />
          </Link>
        </Box>
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
