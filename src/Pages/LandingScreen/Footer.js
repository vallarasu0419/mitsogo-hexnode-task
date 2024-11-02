import React from "react";
import { Box, Typography, Grid, Link, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import hexnode from "../../Assets/hexnode (1).svg";
import mitsogo from "../../Assets/powered-by-mitsogo.svg";
import banner from "../../Assets/promo-banner.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "40px" }}>
      <Grid container spacing={4}>
        {/* Hexnode Logo and Capabilities */}
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Box>
            <img src={hexnode} alt="hexnode" style={logoStyle} />
          </Box>
          <Box
            variant="subtitle2"
            sx={{
              color: "#556575",
              fontSize: "14px",
              lineHeight: "18px",
              marginBottom: "12px",
            }}
          >
            <img src={mitsogo} alt="mitsogo" style={subLogoStyle} />
          </Box>
          <Link href="#" underline="none" sx={linkStyle}>
            Hexnode UEM
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Hexnode Kiosk Lockdown
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Hexnode Secure Browser
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Hexnode Digital Signage
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Hexnode Genie
          </Link>
          <br />

          <Typography variant="body2" sx={sectionTitleStyle}>
            Capabilities
          </Typography>
          <Link href="#" underline="none" sx={linkStyle}>
            Device Management
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Kiosk Lockdown
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Compliance & Security
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Supported Platforms
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Enterprise Integrations
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Industry
          </Link>
        </Grid>

        {/* Product Section */}
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Typography sx={sectionTitleStyle}>Product</Typography>
          <Link href="#" underline="none" sx={linkStyle}>
            All Features
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Pricing
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Customers
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Customer Stories
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Resources
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Webinar
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Help
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Academy
          </Link>
        </Grid>

        {/* Sales & Support Section */}
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Typography sx={sectionTitleStyle}>Sales & Support</Typography>
          <Typography sx={infoTextStyle}>US: +1-833-HEXNODE</Typography>
          <Typography sx={infoTextStyle}>UK: +44-8003-689920</Typography>
          <Typography sx={infoTextStyle}>AU: +61-1800-165-939</Typography>
          <Typography sx={infoTextStyle}>NZ: +64-9-8842599</Typography>
          <Typography sx={infoTextStyle}>CH: +41-44-798-2244</Typography>
          <Typography sx={infoTextStyle}>
            International: +1-415-636-7555
          </Typography>
          <Typography sx={infoTextStyle}>Fax: +1-415-646-4151</Typography>
          <Typography sx={infoTextStyle}>
            Support: support@hexnode.com
          </Typography>
          <Typography sx={infoTextStyle}>
            Partnership: partners@hexnode.com
          </Typography>
        </Grid>

        {/* Company Section */}
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Typography sx={sectionTitleStyle}>Company</Typography>
          <Link href="#" underline="none" sx={linkStyle}>
            About us
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Security
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            GDPR Compliance
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Contact us
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Sitemap
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Blog
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            News
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Events
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Careers
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Legal
          </Link>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Typography sx={sectionTitleStyle}>Contact Us</Typography>
          <Link href="#" underline="none" sx={linkStyle}>
            Talk to Sales/Support
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Schedule a Demo
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Watch a Demo
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Get a Quote
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Raise a Ticket
          </Link>
          <br />
          <Link href="#" underline="none" sx={linkStyle}>
            Partner Programs
          </Link>
          <br />
        </Grid>

        {/* Extra Info and Social Icons */}
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <img src={banner} alt="banner" style={bannerStyle} />
          <Typography
            variant="body2"
            sx={{ color: "#556575", fontSize: "14px", lineHeight: 2 }}
          >
            Our team of industry specialists will be at IT-SA 2024, October 22nd
            - 24th! Come meet us at Hall 9, Stand 221 (9-221) to have a chat.
          </Typography>
          <Link
            href="#"
            sx={{
              color: "#556575",
              fontSize: "14px",
              lineHeight: 2,
              margin: "12px 0",
              marginBottom: "20px",
              mt: 2,
              fontWeight: "bold",
            }}
          >
            BOOK A MEETING
          </Link>

          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#191919",
              }}
            >
              SOCIAL
            </Typography>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "#3b5998" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "#00acee" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "#0e76a8" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://youtube.com"
              target="_blank"
              sx={{ color: "#FF0000" }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#556575" }}>
          LOCATIONS
        </Typography>
        <Typography variant="body2" sx={{ color: "#556575" }}>
          USA • CANADA • AUSTRALIA • UK • GERMANY • FRANCE
        </Typography>
      </Box>
    </Box>
  );
};

// CSS Style Objects
const logoStyle = { height: "50px", width: "150px", marginTop: "-10px" };
const subLogoStyle = { height: "20px" };
const bannerStyle = { width: "100%", height: "auto", marginBottom: "10px" };
const sectionTitleStyle = {
  color: "#191919",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "uppercase",
  marginBottom: "20px",
};
const linkStyle = {
  color: "#556575",
  fontSize: "14px",
  textDecoration: "none",
  lineHeight: 2,
  margin: "12px 0",
  marginBottom: "20px",
};
const infoTextStyle = {
  color: "#556575",
  fontSize: "14px",
  lineHeight: "18px",
  marginBottom: "12px",
};

export default Footer;
