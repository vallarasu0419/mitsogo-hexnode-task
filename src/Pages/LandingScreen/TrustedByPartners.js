import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img11 from "../../Assets/marriott-intl.svg";
import img12 from "../../Assets/merck.svg";
import img13 from "../../Assets/costco.svg";
import img14 from "../../Assets/saic.svg";
import img15 from "../../Assets/hilton.svg";
import img16 from "../../Assets/group1-automotive.png";
import img17 from "../../Assets/lowes.svg";
import img18 from "../../Assets/polaris.svg";
import img19 from "../../Assets/gorillas.svg";
import img20 from "../../Assets/wolt.svg";

const images = [
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const TrustedByPartners = () => {
  return (
    <Box
      sx={{
        padding: "80px 0",
        textAlign: "center",
        backgroundColor: "#f5faff",
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          maxWidth: 780,
          margin: "0 auto",
          paddingBottom: 2,
          fontSize: "32px",
          lineHeight: "1.2",
          fontWeight: "700",
        }}
      >
        Trusted by hundreds of SMBs and
      </Typography>
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          maxWidth: 780,
          margin: "0 auto",
          paddingBottom: 4,
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        Enterprises around the world
      </Typography>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "auto%",
          padding: "0px 140px 30px 140px",
        }}
      >
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          transitionTime={500}
          swipeable={true}
          emulateTouch={true}
          className="custom-carousel"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => {
                const imgIndex = (index * 6 + i) % images.length;
                return (
                  <img
                    key={imgIndex}
                    src={images[imgIndex]}
                    alt={`partner-${imgIndex}`}
                    style={{ width: "calc(100% / 6)", maxWidth: "210px" }}
                  />
                );
              })}
            </div>
          ))}
        </Carousel>
      </Box>

      <Grid container spacing={2} sx={{ display: { md: "none", xs: "flex" } }}>
        {images.map((image, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            key={index}
            sx={{ textAlign: "center" }}
          >
            <img
              src={image}
              alt={`partner-${index}`}
              style={{ width: "100%", maxWidth: "210px" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrustedByPartners;

// import React, { useEffect, useState } from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import img11 from "../../Assets/marriott-intl.svg";
// import img12 from "../../Assets/merck.svg";
// import img13 from "../../Assets/costco.svg";
// import img14 from "../../Assets/saic.svg";
// import img15 from "../../Assets/hilton.svg";
// import img16 from "../../Assets/group1-automotive.png";
// import img17 from "../../Assets/lowes.svg";
// import img18 from "../../Assets/polaris.svg";
// import img19 from "../../Assets/gorillas.svg";
// import img20 from "../../Assets/wolt.svg";

// // Array of images
// const images = [
//   img11,
//   img12,
//   img13,
//   img14,
//   img15,
//   img16,
//   img17,
//   img18,
//   img19,
//   img20,
// ];

// const Slider = ({ images }) => {
//   const [firstImageIndex, setFirstImageIndex] = useState(0);
//   const displayedImages = images.slice(firstImageIndex, firstImageIndex + 6);
//   const totalImages = images.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFirstImageIndex((prevIndex) => {
//         const nextIndex = (prevIndex + 1) % totalImages;
//         return nextIndex;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [totalImages]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         gap: 2,
//       }}
//     >
//       {displayedImages.map((image, index) => (
//         <Box key={index} sx={{ flexShrink: 0, textAlign: "center" }}>
//           <img
//             src={image}
//             alt={`partner-${firstImageIndex + index}`}
//             style={{ width: "100%", maxWidth: "210px" }}
//           />
//         </Box>
//       ))}
//     </Box>
//   );
// };

// const TrustedByPartners = () => {
//   return (
//     <Box
//       sx={{
//         padding: "80px 0",
//         textAlign: "center",
//         backgroundColor: "#f5faff",
//       }}
//     >
//       <Typography
//         variant="h1"
//         gutterBottom
//         sx={{
//           maxWidth: 780,
//           margin: "0 auto",
//           paddingBottom: 2,
//           fontSize: "32px",
//           lineHeight: "1.2",
//           fontWeight: "700",
//         }}
//       >
//         Trusted by hundreds of SMBs and
//       </Typography>
//       <Typography
//         variant="h1"
//         gutterBottom
//         sx={{
//           maxWidth: 780,
//           margin: "0 auto",
//           paddingBottom: 4,
//           fontSize: "32px",
//           fontWeight: "700",
//         }}
//       >
//         Enterprises around the world
//       </Typography>

//       <Box sx={{ display: { xs: "none", md: "block" } }}>
//         <Slider images={images} />
//       </Box>

//       <Grid container spacing={2} sx={{ display: { md: "none", xs: "flex" } }}>
//         {images.map((image, index) => (
//           <Grid
//             item
//             xs={6}
//             sm={4}
//             md={2}
//             key={index}
//             sx={{ textAlign: "center" }}
//           >
//             <img
//               src={image}
//               alt={`partner-${index}`}
//               style={{ width: "100%", maxWidth: "210px" }}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default TrustedByPartners;
