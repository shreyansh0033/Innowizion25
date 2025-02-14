import { type FC } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import TeamSection from "./components/Team";
import Footer from "./components/Footer";
import type { TeamMember } from "./types/team";
import facultyImage1 from "./assets/our-team/faculty-1.webp";
import facultyImage2 from "./assets/our-team/faculty-2.webp";
import facultyImage3 from "./assets/our-team/faculty-3.webp";
import studentImage1 from "./assets/our-team/student-1.webp";
import studentImage2 from "./assets/our-team/student-2.webp";
import studentImage3 from "./assets/our-team/student-3.webp";
import studentImage4 from "./assets/our-team/student-4.webp";
import studentImage5 from "./assets/our-team/student-5.webp";
import studentImage6 from "./assets/our-team/student-6.webp";
import studentImage7 from "./assets/our-team/student-7.webp";
import studentImage8 from "./assets/our-team/student-8.webp";
import studentImage9 from "./assets/our-team/student-9.webp";
import studentImage10 from "./assets/our-team/student-10.webp";
import studentImage11 from "./assets/our-team/student-11.webp";

const facultyAdvisors: TeamMember[] = [
  {
    id: "1",
    name: "Professor Jeeoot Singh",
    designation: "Prof., Mechanical Engg. Dept.",
    role: "President, IIC",
    image: facultyImage1,
  },
  {
    id: "2",
    name: "Dr. Ram Bilas Prasad",
    designation: "Asst. Prof., Mechanical Engg. Dept.",
    role: "Vice-President, IIC",
    image: facultyImage2,
  },
  {
    id: "3",
    name: "Dr. Prashant Saini",
    designation: "Asst. Prof., Mechanical Engg. Dept.",
    role: "Convenor, IIC",
    image: facultyImage3,
  },
  // ... rest of your faculty data
];

const studentMembers: TeamMember[] = [
  {
    id: "4",
    name: "Shreyansh Pandey",
    designation: "President, UIC",
    image: studentImage1,
    branch: "CSE",
    year: "Final Year",
  },
  {
    id: "5",
    name: "Aaditya Narayan Pandey",
    designation: "President, UIC",
    image: studentImage2,
    branch: "IT",
    year: "Final Year",
  },
  {
    id: "6",
    name: "Abhinav Ojha",
    designation: "Vice- President, UIC",
    image: studentImage3,
    branch: "CSE",
    year: "Final Year",
  },
  {
    id: "7",
    name: "Nikhil Singh",
    designation: "Treasurer, UIC",
    image: studentImage4,
    branch: "CSE",
    year: "Final Year",
  },
  {
    id: "8",
    name: "Sumit Gupta",
    designation: "Secretary, UIC",
    image: studentImage5,
    branch: "ECE",
    year: "Final Year",
  },
  {
    id: "9",
    name: "Shiv Narayan",
    designation: "Joint- Secretary, UIC",
    image: studentImage6,
    branch: "CSE",
    year: "Final Year",
  },
  {
    id: "10",
    name: "Kumar Saurabh",
    designation: "Event Head, UIC",
    image: studentImage7,
    branch: "EE",
    year: "Final Year",
  },
  {
    id: "11",
    name: "Amit Yadav",
    designation: "Public Relations, UIC",
    image: studentImage8,
    branch: "IT",
    year: "Final Year",
  },
  {
    id: "12",
    name: "Vikash Kumar",
    designation: "Public Relations, UIC",
    image: studentImage9,
    branch: "ME",
    year: "Final Year",
  },
  {
    id: "13",
    name: "Anshu",
    designation: "Mentor, UIC",
    image: studentImage10,
    branch: "CSE",
    year: "Final Year",
  },
  {
    id: "14",
    name: "Shivangi Sharma",
    designation: "Mentor, UIC",
    image: studentImage11,
    branch: "ECE",
    year: "Final Year",
  },
];

const App: FC = () => {
  console.log("App is rendering"); // Debug log

  return (
    <div className="min-h-screen bg-[#112227]">
      <Navbar />
      <Home />
      <Events />
      <TeamSection
        facultyAdvisors={facultyAdvisors}
        studentMembers={studentMembers}
      />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
