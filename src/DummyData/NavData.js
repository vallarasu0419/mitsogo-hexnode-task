import img2 from "../Assets/forrester.png";
import img3 from "../Assets/gartner-logo.svg";
import img4 from "../Assets/idc-logo.png";
import img5 from "../Assets/digital-signage-software.jpg";
import img6 from "../Assets/rugged-management.jpg";
import img7 from "../Assets/mobile-management.jpg";
import img8 from "../Assets/management.jpg";
import img9 from "../Assets/lockdown-management.jpg";
import img10 from "../Assets/iot-management.jpg";
import img1 from "../Assets/img1.jpg";
import Setup from "../Assets/multi-Device-Setup.webp";
import men1 from "../Assets/men1.jpg";
import men2 from "../Assets/men2.jpg";
import men3 from "../Assets/men3.jpg";
import engine from "../Assets/engine.jpg";
import donaldson from "../Assets/donaldson.png";
import airways1 from "../Assets/western-airways.png";
import airways2 from "../Assets/western-airways (1).png";
import condeNast1 from "../Assets/conde-nast.jpg";
import condeNast2 from "../Assets/conde-nast.svg";

export const menuItems = [
  {
    name: "Solutions",
    submenu: [
      {
        title: "Hexnode UEM",
        description:
          "Centralize management of mobiles, PCs, and wearables in the enterprise",
      },
      {
        title: "Hexnode Kiosk Lockdown",
        description:
          "Lockdown devices to apps and websites for high yield and security",
      },
      {
        title: "Hexnode Secure Browser",
        description:
          "Enforce protection from malicious websites and online threats",
      },
      {
        title: "Hexnode Digital Signage",
        description: "Central management for digital signages",
      },
      {
        title: "Hexnode Genie",
        description: "AI-based device management with Hexnode Genie",
      },
    ],
  },
  { name: "Pricing" },
  { name: "Customers" },
  {
    name: "Partners",
    submenu: [
      {
        title: "Hexnode Partner Programs",
        description: "Explore every partnership program offered by Hexnode",
      },
      {
        title: "Reseller Partnership",
        description: "Deliver Hexnode's solution to your clients",
      },
      {
        title: "MSP Partnership",
        description:
          "Help your clients scale their endpoint management efforts",
      },
      {
        title: "OEM Partnership",
        description: "Integrate Hexnode for managing your devices",
      },
      {
        title: "Distribution Program",
        description: "Become Hexnode's official distributor and grow revenue",
      },
      {
        title: "ISV Partnership",
        description: "Sell Hexnode UEM and explore the UEM market",
      },
      {
        title: "Hexnode Marketplace",
        description: "Checkout Hexnode's partner integrations and tools",
      },
    ],
  },
  { name: "Blog" },
  {
    name: "Contact Us",
    submenu: [
      {
        title: "Sales",
        description: "Get in touch with our sales team",
      },
      {
        title: "Support",
        description: "Contact customer support",
      },
    ],
  },
];

export const awards = [
  {
    organization: img4,
    description:
      "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
  },
  {
    organization: img3,
    description:
      "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.",
  },
  {
    organization: img2,
    description:
      "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
  },
];

export const cardsData = [
  {
    title: "Unified Endpoint Management",
    image: img8,
    link: "/endpoint-management",
  },
  {
    title: "Mobile Device Management",
    image: img7,
    link: "/mobile-device-management",
  },
  {
    title: "Kiosk Lockdown Management",
    image: img9,
    link: "/kiosk-lockdown-management",
  },
  {
    title: "Rugged Device Management",
    image: img6,
    link: "/rugged-device-management",
  },
  {
    title: "IoT Management",
    image: img10,
    link: "/iot-management",
  },
  {
    title: "Digital Signage Software",
    image: img5,
    link: "/digital-signage-software",
  },
];

export const testimonials = [
  {
    img: img1,
    title:
      "Domonova was able to remotely manage devices deployed all across Spain, saving time and money.",
    description:
      "The reason why we chose Hexnode was they gave us the possibility to control all the devices from our HQ. This saves us a lot of money and time. With its intuitive design and advanced management features, Hexnode has transformed our workflow, giving us complete control and visibility over our device fleet. We’re now more productive and efficient than ever.",
  },
  {
    img: Setup,
    title: "Efficient management for organizations of any scale.",
    description:
      "Hexnode's ease of use and reliability make it the perfect solution for remote management across multiple locations. From monitoring device health to deploying updates seamlessly, Hexnode has truly redefined our approach to IT management. It has been an invaluable tool in ensuring our operations run smoothly, with minimal downtime and maximum efficiency.",
  },
];

export const Customer = [
  {
    img: men1,
    name: "Tom Morrison",
    interest: "Owner - Technology Specialist",
    position: "Relevant Services, LLC",
    title:
      "Hexnode was the mama bear solution, wasn’t too big, wasn’t too small, just the right fit",
    description:
      "See how Hexnode streamlined Relevent Services Apple only ecosystem.",
    points: [
      "Lockdown devices to specific functions",
      "Automatically handle device software updates",
      "Set up geofences and location tracking on managed devices",
    ],
  },
  {
    img: men2,
    name: "Sarah Lee",
    interest: "IT Director",
    position: "Tech Innovations Co.",
    title: "Efficient device management for a modern workforce",
    description:
      "Discover how Sarah's team uses Hexnode to simplify device management across departments.",
    points: [
      "Deploy policies remotely with ease",
      "Monitor device usage and health in real-time",
      "Restrict app usage to increase productivity",
    ],
  },
  {
    img: men3,
    name: "John Doe",
    interest: "Operations Manager",
    position: "Global Solutions",
    title: "Simplifying operational efficiency with effective device control",
    description:
      "Global Solutions optimized operations with Hexnode, reducing management time significantly.",
    points: [
      "Enhanced data security and encryption",
      "Remote troubleshooting and support",
      "Easy integration with existing tools",
    ],
  },
];

export const caseStudiesDetails = [
  {
    img1: engine,
    img2: donaldson,
    title: "Streamlining device management with Hexnode",
  },
  {
    img1: airways1,
    img2: airways2,
    title: "Managing mobile devices in the sky with Hexnode",
  },
  {
    img1: condeNast1,
    img2: condeNast2,
    title: "Locking down field devices with Hexnode",
  },
];
