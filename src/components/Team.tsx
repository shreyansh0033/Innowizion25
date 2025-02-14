import { motion } from "framer-motion";
import { GraduationCap, Users, BrainCircuit, Cpu } from "lucide-react";
import type { TeamSectionProps, TeamMember } from "../types/team";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const FacultyCard = ({ member }: { member: TeamMember }) => (
  <motion.div
    variants={item}
    whileHover={{ scale: 1.02 }}
    className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center space-y-3 sm:space-y-4 overflow-hidden border border-gray-700/30"
  >
    <div className="absolute inset-0 opacity-5">
      <BrainCircuit className="w-full h-full text-white" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-20" />

    <motion.div className="relative" whileHover={{ scale: 1.05 }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff8329] to-[#ff8329] rounded-full blur-lg opacity-30" />
      <img
        src={member.image}
        alt={member.name}
        className="relative w-32 h-32 rounded-full object-cover border-4 border-[#ff8329]/30"
      />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#ff8329] to-transparent" />
    </motion.div>

    <div className="text-center relative z-10">
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <div className="text-[#ff8329]">{member.role}</div>
      <p className="text-gray-300">{member.designation}</p>
    </div>
  </motion.div>
);

const StudentCard = ({ member }: { member: TeamMember }) => (
  <motion.div
    variants={item}
    whileHover={{
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    }}
    className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700/30"
  >
    <div className="absolute inset-0 opacity-5">
      <Cpu className="w-full h-full text-white" />
    </div>

    <div className="relative flex items-center space-x-4 p-4 z-10">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative flex-shrink-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff8329] to-[#ff8329] rounded-full blur-md opacity-30" />
        <img
          src={member.image}
          alt={member.name}
          className="relative w-16 h-16 rounded-full object-cover ring-2 ring-[#ff8329]/30"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#ff8329] to-[#ff8329] rounded-full flex items-center justify-center"
        >
          <div className="w-4 h-4 bg-gray-900 rounded-full" />
        </motion.div>
      </motion.div>

      <div className="flex-grow min-w-0">
        <motion.h3
          className="font-semibold text-white truncate group-hover:text-[#ff8329] transition-colors duration-300"
          whileHover={{ x: 3 }}
        >
          {member.name}
        </motion.h3>
        <motion.p
          className="text-[#ff8329]/80 text-sm truncate"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {member.designation}
        </motion.p>
        <motion.p
          className="text-gray-400 text-xs mt-0.5"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {member.branch}
          {member.branch && member.year && ", "}
          {member.year}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#ff8329] to-[#ff8329]"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </div>
  </motion.div>
);

const StudentGrid = ({ students }: { students: TeamMember[] }) => {
  const firstRow = students.slice(0, 4);
  const secondRow = students.slice(4, 8);
  const lastRow = students.slice(8, 11);

  return (
    <div className="space-y-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {firstRow.map((student) => (
          <StudentCard key={student.id} member={student} />
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {secondRow.map((student) => (
          <StudentCard key={student.id} member={student} />
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        {lastRow.map((student) => (
          <div
            key={student.id}
            className="sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)]"
          >
            <StudentCard member={student} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function TeamSection({
  facultyAdvisors,
  studentMembers,
}: TeamSectionProps) {
  return (
    <div
      id="team"
      className="relative bg-gray-900 py-12 sm:py-16 px-3 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff8329]" />
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-['Orbitron']">
              Faculty Advisors
            </h2>
          </div>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Providing expert guidance and mentorship.
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {facultyAdvisors.map((advisor) => (
              <FacultyCard key={advisor.id} member={advisor} />
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff8329]" />
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-['Orbitron']">
              Student Members
            </h2>
          </div>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            A Passionate team driving innovation.
          </p>
          <StudentGrid students={studentMembers.slice(0, 11)} />
        </div>
      </div>
    </div>
  );
}
