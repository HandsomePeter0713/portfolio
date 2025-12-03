/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yao-Peng Chang",
  title: "Hi all, I'm Yao-Peng Chang",
  subTitle: emoji(
    "A passionate Mechanical Engineering student and Robotics Enthusiast 🚀. Experienced in mechatronics, control systems, and full-stack development. I love building robots that move in unique ways!"
  ),
  resumeLink: "#",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HandsomePeter0713", // Update with your actual GitHub URL
  linkedin: "https://www.linkedin.com/in/yaopeng-chang/", // Update with your actual LinkedIn URL
  gmail: "yp.peter.chang@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MECHANICAL DESIGN, ROBOTICS CONTROL & SOFTWARE INTEGRATION",
  skills: [
    emoji(
      "⚡ Designing complex mechanisms and robotic systems using advanced CAD tools"
    ),
    emoji("⚡ Developing control algorithms and simulations in Simulink"),
    emoji(
      "⚡ Integrating electromechanical systems with microcontrollers and AI vision"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "SolidWorks",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-layer-group" // approximation for analysis
    },
    {
      skillName: "ROS/Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "LabVIEW",
      fontAwesomeClassname: "fas fa-microchip"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Taiwan University (NTU)",
      logo: require("./assets/images/ntuLogo.png"), // Update with NTU logo if available
      subHeader:
        "B.S. in Mechanical Engineering, minor in Computer Science and Information Engineering",
      duration: "September 2021 - January 2026",
      desc: "Overall GPA: 4.14/4.3 | Ranking: 7/210 (Top 3%)",
      descBullets: [
        "Specialized in Robotics, Control Systems, and Vehicle Dynamics.",
        "Presidential Award (Academic Year 2022) - Top 2% of department.",
        "Academic Excellence Award (3 semesters) - Top 5% of class."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mechanical Design (CAD/CAE)",
      progressPercentage: "100%"
    },
    {
      Stack: "Control Systems & Simulation",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming (C++/Python)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Undergraduate Researcher",
      company: "Bio-inspired Robotics Laboratory",
      companylogo: require("./assets/images/biorolaLogo.png"), // Update logo
      date: "June 2023 – October 2025",
      desc: "Advisor: Prof. Pei-Chun Lin",
      descBullets: [
        'Developed "Mosphero", a dual-mode spherical robot with a differential drive mechanism.',
        "Built dynamic models in MATLAB/Simulink and validated them through experiments.",
        "Implemented angular velocity control (reduced IAE by 87.1%) and impulsive momentum control (shortened escape time on deformable terrain by 7.4x)."
      ]
    },
    {
      role: "Mechanical Engineering Intern",
      company: "Logitech",
      companylogo: require("./assets/images/logitechLogo.png"), // Update with Logitech logo
      date: "July 2024 – August 2024",
      desc: "Designed Racing Simulation Products.",
      descBullets: [
        "Built the company's first active-pedal prototype, benchmarking commercial systems for force-feedback performance.",
        "Designed a force-sensing mechanism with load cells and integrated a PID controller on linear actuators for adjustable pedal resistance."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards & Honors 🏆 "),
  subtitle: "Recognition for competitions.",

  achievementsCards: [
    {
      title: "First Prize, MechaHeroes 2024",
      subtitle:
        "Awarded for the research and design of the 2-DOF spherical robot (Mosphero).",
      image: require("./assets/images/MechaHeroes.png"), // Update Image
      imageAlt: "MechaHeroes Award",
      footerLink: []
    },
    {
      title: "FSAE Japan 2025",
      subtitle:
        "Overall 11/25 in EV Class. Won Sportsmanship Award & JAMA Chairman Award.",
      image: require("./assets/images/NTUR_award.png"), // Update Image
      imageAlt: "FSAE Award",
      footerLink: []
    },
    {
      title: "Best Popularity Award",
      subtitle:
        '2023 MakeNTU Hackathon for the "Backflipping Mechanical Cat Robot".',
      image: require("./assets/images/Cat_award.png"), // Update Image
      imageAlt: "MakeNTU Award",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+886-979327123",
  email_address: "yp.peter.chang@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

// My Custom Project Section

const customProjects = {
  display: true,
  title: "Projects",
  subtitle: "ROBOTICS, AUTOMATION & SOFTWARE DEVELOPMENT",
  projects: [
    {
      title: "Dual-Mode Spherical Robot (Mosphero)",
      subtitle: "2023-2025, Bio-inspired Robotics Lab, NTU",
      summary:
        "A novel spherical robot using a differential drive mechanism to achieve omnidirectional rolling and terrain escape capabilities.",
      image: require("./assets/images/1_actual_robot.png"),
      descriptionSections: [
        {
          heading: "Project Goals:",
          points: [
            "Design Mosphero to achieve continuous omnidirectional rolling, sharp turns, and side-rolling capability.",
            "Integrate a dual-mode actuation strategy for self-rescue on deformable terrain using high-torque impulses.",
            "Develop a modular shell structure that ensures expandability for additional sensing/actuation modules."
          ]
        },
        {
          heading: "Methods:",
          points: [
            "Mechanism: Coaxial dual-pendulum mechanism with bevel gear coupling, enabling two-axis rotation.",
            "Control: Hierarchical architecture combining low-level PI motor control (Arduino) with high-level Angular Velocity Control and Impulsive Momentum Control (Raspberry Pi).",
            "Modeling: Dynamic model formulated using the Lagrangian method and verified against Vicon motion capture data and MATLAB/Simulink simulations."
          ]
        },
        {
          heading: "Results:",
          points: [
            "Stability: Closed-loop control successfully stabilized the system, reducing the Integral of Absolute Error (IAE) by 87.1% compared with open-loop operation.",
            "Terrain Traversal: Impulsive actuation shortened the escape time on deformable terrain by a factor of 7.4 and nearly doubled the success rate.",
            "Agility: 2D trajectory tests confirmed omnidirectional locomotion capability, including sharp turns and side-rolling maneuvers."
          ]
        }
      ],
      slides: [
        {
          type: "image",
          src: require("./assets/images/1_actual_robot.png"),
          caption: "The Dual-Mode Spherical Robot (Mosphero)."
        },
        {
          type: "image",
          src: require("./assets/images/2_a_cad.png"),
          caption: "The differential drive mechanism in the robot."
        },
        {
          type: "image",
          src: require("./assets/images/2_b_hardware_block_diagram.png"),
          caption: "The hardware architecture of the robot."
        },
        {
          type: "image",
          src: require("./assets/images/3_dynamic.png"),
          caption: "The dynamic equation derived with the Lagrangian method."
        },
        {
          type: "image",
          src: require("./assets/images/5_b_angular_velocity.png"),
          caption: "The angular velocity controller vs open-loop controller."
        },
        {
          type: "image",
          src: require("./assets/images/5_b_control.png"),
          caption:
            "The result of the angular velocity controller in different reference velocity."
        },
        {
          type: "image",
          src: require("./assets/images/5_c_momentum.png"),
          caption:
            "The impulsive momentum controller decrease the time to leave the terrain."
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/RmHryG-aZJY",
          caption: "Demo Video: Mosphero."
        }
      ]
    },
    {
      title: "Hub Motor Gearbox Development",
      subtitle: "2022-Present, NTU Racing Formula SAE",
      summary:
        "Designed and optimized three generations of planetary reduction gearboxes for an electric racing car.",
      image: require("./assets/images/NTUR_cover.png"),
      descriptionSections: [
        {
          heading: "Key Achievements:",
          points: [
            "2023: Developed team's first hub planetary gearbox (gear modeling, load analysis, ANSYS/KISSsoft verification).",
            "2024: Rebuilt boundary conditions and redesigned for 41% mass reduction.",
            "2025: Co-developed new architecture reducing 350g per wheel and 30% thickness."
          ]
        },
        {
          heading: "Results:",
          points: [
            "FSAE Japan 2025 - Overall 11/25 (EV Class)",
            "FSAE Japan 2025 - Sportsmanship Award & JAMA Chairman Award",
            "Formula Student Taiwan 2025 - 2nd Place",
            "Formula Student Taiwan 2023 - 1st Place"
          ]
        }
      ],
      slides: [
        {
          type: "image",
          src: require("./assets/images/NTUR_wheelend.png"),
          caption: "The wheel-end system and the hub motor gearbox."
        },
        {
          type: "image",
          src: require("./assets/images/NTUR_sketch.png"),
          caption: "The sketch of the gearbox architecture."
        },
        {
          type: "image",
          src: require("./assets/images/NTUR_ansys.png"),
          caption: "Simulating the carrier of the gearbox in ANSYS."
        },
        {
          type: "image",
          src: require("./assets/images/NTUR_2nd.png"),
          caption:
            "The ring gear of the second generation of the gearbox, the whole gearbox reducing 41% of mass."
        },
        {
          type: "image",
          src: require("./assets/images/NTUR_car.png"),
          caption: "Our race car on the FSAE Japan 2025 circuit."
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/sIDlzRR5fLI",
          caption: "Demo Video: Gearbox."
        }
      ]
    },
    {
      title: "Traction Control & Torque Vectoring",
      subtitle: "2024, Course Project, Vehicle Dynamics",
      summary:
        "Implemented PID slip control and torque vectoring to enhance cornering stability and acceleration.",
      image: require("./assets/images/TCTV_TC.png"),
      descriptionSections: [
        {
          heading: "Methods:",
          points: [
            "Modeled Magic-Formula tire characteristics and a 3-DOF bicycle vehicle model in Simulink.",
            "Designed a PID slip controller to regulate wheel torque in real-time.",
            "Calculated differential wheel torque to generate required yaw moment for vectoring."
          ]
        },
        {
          heading: "Results:",
          points: [
            "Improved 0-75m acceleration time by 0.35 seconds (4.64s -> 4.29s).",
            "Significantly improved trajectory tracking during cornering compared to non-TV vehicles."
          ]
        }
      ],
      slides: [
        {
          type: "image",
          src: require("./assets/images/TCTV_tire.png"),
          caption:
            "Longitudinal force vs. slip ratio under different vertical loads (P = 12 psi) with Magic Formula fitting."
        },
        {
          type: "image",
          src: require("./assets/images/TCTV_TC.png"),
          caption: "Traction controller in MATLAB/Simulink."
        },
        {
          type: "image",
          src: require("./assets/images/TCTV_TC_result.png"),
          caption:
            "Improved 0-75m acceleration time by 0.35 seconds (4.64s -> 4.29s)."
        },
        {
          type: "image",
          src: require("./assets/images/TCTV_TV.png"),
          caption: "Torque vectoring controller in MATLAB/Simulink."
        },
        {
          type: "image",
          src: require("./assets/images/TCTV_TV_result.png"),
          caption:
            "Improved trajectory tracking during cornering compared to non-TV vehicles."
        }
      ]
    },
    {
      title: "Handsome Yoga – Real-Time AI Pose Guidance",
      subtitle: "2024, Course Project, Robot Vision",
      summary:
        "A real-time yoga pose correction system using MediaPipe and Machine Learning, achieving 97% accuracy.",
      image: require("./assets/images/Yoga_cover.png"),
      descriptionSections: [
        {
          heading: "Goal:",
          points: [
            "Recognize yoga poses in real-time via webcam.",
            "Provide immediate corrective feedback to users."
          ]
        },
        {
          heading: "Implementation:",
          points: [
            "Utilized MediaPipe for extracting 3D body landmarks.",
            "Trained an MLP classifier to identify poses (Warrior II, III, Triangle, Tree, Standing).",
            "Built a PyQt5 interface to display live feedback based on joint angle analysis."
          ]
        },
        {
          heading: "Outcome:",
          points: [
            "Achieved smooth performance (28-30 FPS).",
            "97% Classification Accuracy with robust recognition."
          ]
        }
      ],
      slides: [
        {
          type: "image",
          src: require("./assets/images/Yoga_matrix.png"),
          caption:
            "Confusion matrix illustrating high classification accuracy across five yoga poses."
        },
        {
          type: "image",
          src: require("./assets/images/Yoga_UI.png"),
          caption:
            "Handsome Yoga: Real-time pose recognition and corrective feedback UI."
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/RBnNu08OnBw",
          caption: "Demo Video: Handsome Yoga."
        }
      ]
    },
    {
      title: "Autonomous Wafer Handling Robot",
      subtitle: "2024, Electromechanical Principles Course",
      summary:
        "Designed a robot mechanism for smooth wafer pickup, obstacle avoidance, and precise placement.",
      image: require("./assets/images/Wafer_cover.png"),
      descriptionSections: [
        {
          heading: "Features:",
          points: [
            "Lifting mechanism designed to minimize acceleration for stable transport.",
            "Webcam-based QR code reading for auto-alignment.",
            "IR sensors for obstacle detection."
          ]
        },
        {
          heading: "Control:",
          points: [
            "System controlled by myRIO and LabVIEW.",
            "Integrated vision and motor control for autonomous operation."
          ]
        }
      ],
      slides: [
        {
          type: "video",
          src: "https://www.youtube.com/embed/WwzgNZalHHc",
          caption: "Project Demo: Autonomous Wafer Handling."
        }
      ]
    },
    {
      title: "Backflipping Mechanical Cat Robot",
      subtitle: "2023, MakeNTU Hackathon Project",
      summary:
        "A spring-powered robot designed to perform a backflip, built within 30 hours.",
      image: require("./assets/images/Cat_cover.png"),
      descriptionSections: [
        {
          heading: "Challenge:",
          points: [
            "Design and build a robot capable of backflipping within a 30-hour hackathon timeframe."
          ]
        },
        {
          heading: "Mechanism:",
          points: [
            "Designed a cam mechanism to slowly compress a spring and release energy instantaneously.",
            "Used Arduino to synchronize servo motors and limit switches for the jumping sequence."
          ]
        },
        {
          heading: "Result:",
          points: [
            "Successfully achieved a mechanical backflip.",
            "Won the Best Popularity Award."
          ]
        }
      ],
      slides: [
        {
          type: "image",
          src: require("./assets/images/Cat_cover.png"),
          caption:
            "Backflipping Mechanical Cat Robot prototype with spring–cam jumping mechanism."
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/nl-BKUGqzY8",
          caption: "Video Demo: Mechanical design of the leg."
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/0bbO0pl9IqM",
          caption: "Video Demo: Backflip demonstration."
        }
      ]
    },
    {
      title: "NTU ME International Compass",
      subtitle: "2025, Extracurricular Project",
      summary:
        "Led a student organization to build a web platform and mentorship program for students applying to graduate schools abroad.",
      image: require("./assets/images/NTUMEIC.png"),
      descriptionSections: [
        {
          heading: "Key Contributions:",
          points: [
            'Interviewed alumni studying abroad and published <a href="https://ntumeic.onrender.com/articles" target="_blank" rel="noopener noreferrer">articles</a>, improving graduate-school information access for all NTU ME students.',
            'Built the <a href="https://ntumeic.onrender.com/" target="_blank" rel="noopener noreferrer">web platform and database</a> to organize graduate school information.',
            "Led a mentor program that connected overseas alumni with prospective graduate-school applicants, resulting in over 10 successful matches."
          ]
        }
      ],
      slides: [
        {
          type: "image",
          src: require("./assets/images/NTUMEIC.png"),
          caption:
            "Group photo from the alumni sharing session on U.S. graduate study and career experiences, with over 80 participants."
        },
        {
          type: "image",
          src: require("./assets/images/NTUMEIC_Chiu.png"),
          caption:
            "Guest lecture by Professor George Chiu (Purdue University) on graduate admissions and study at Purdue, attended by over 80 participants."
        }
      ]
    }
  ]
};

const myName = "Chang, Y.-P.";

const publicationInfo = {
  display: true,
  papers: [
    {
      title: "The Dual-Mode Spherical Robot: Design and Control",
      authors: `Chang, P.-Y.*, Chou, C.-H.*, ${myName}*, Lin, P.-C. `,
      journal: "Under review, IEEE Robotics and Automation Letters (RAL)",
      volume: null,
      issue: null,
      pages: null,
      date: "2025",
      link: "https://drive.google.com/file/d/15k74Gd1zaRARg2h_V98sfGDVr87et9Js/preview",
      authorNote: "* Co-first author"
    },
    {
      title: "A Two-Degree-of-Freedom Pendulum-Driven Spherical Robot Platform",
      authors: `Chang, P.-Y.*, Chou, C.-H.*, Wang T.-J*., ${myName}*, Lin, P.-C. `,
      journal:
        "2025 International Conference on Advanced Robotics and Intelligent Systems (ARIS) & 2024 National Conference on Advanced Robotics (NCAR), Oral Presentation",
      volume: null,
      issue: null,
      pages: null,
      date: "2025",
      link: "https://drive.google.com/file/d/1dOCEIL2PLkt5aE1pvYJRXWgJ7tk2m2j8/preview",
      authorNote: "* Co-first author"
    }
  ]
};

const isHireable = true; // Set to true since you are a student/intern

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  customProjects,
  publicationInfo,
  myName
};
