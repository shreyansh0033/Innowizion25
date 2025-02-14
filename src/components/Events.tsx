import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronDown, Calendar } from "lucide-react";
import { createPortal } from "react-dom";
import expoImage from "../assets/event-Images/I-Expo.jpg";
import quizImage from "../assets/event-Images/I-Quiz.jpg";
import cluminateImage from "../assets/event-Images/I-Cluminate.jpg";
import dottingImage from "../assets/event-Images/Dotting the Eye.jpg";
import trashImage from "../assets/event-Images/Trash Bash.jpg";
import elementosImage from "../assets/event-Images/Elementos.jpg";
import techTribunalImage from "../assets/event-Images/Tech-Tribunal.jpg";
import notice1 from "../assets/notices/notice-1.jpg";
import notice2 from "../assets/notices/notice-2.jpg";
import notice3 from "../assets/notices/notice-3.jpg";
import notice4 from "../assets/notices/notice-4.jpg";
import notice5 from "../assets/notices/notice-5.jpg";
import notice6 from "../assets/notices/notice-6.jpg";
import notice7 from "../assets/notices/notice-7.jpg";
import AnimatedBackground from "./AnimatedBackground";

interface Event {
  id: number;
  title: string;
  description: string;
  poster: string;
  notice: string;
  registrationLink: string;
}

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

// Form Modal Component
const FormModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
}> = ({ isOpen, onClose, formUrl }) => {
  const [isFormLoaded, setIsFormLoaded] = useState(true);

  if (!isOpen) return null;

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        zIndex: 99999,
        backgroundColor: "rgba(17, 24, 39, 0.85)",
        backdropFilter: "blur(8px)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl h-[85vh] bg-[#111827] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          zIndex: 100000,
          boxShadow: "0 0 40px rgba(255, 131, 41, 0.1)",
          border: "1px solid rgba(255, 131, 41, 0.1)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-14 bg-[#1F2937] flex items-center justify-between px-6"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            zIndex: 100001,
          }}
        >
          <h3 className="text-white font-semibold">Event Registration</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#374151] transition-colors group"
            style={{ zIndex: 100001 }}
          >
            <X
              size={20}
              className="text-gray-400 group-hover:text-[#FF8329] transition-colors"
            />
          </button>
        </div>

        <div
          className="w-full h-full pt-14"
          style={{
            position: "relative",
            zIndex: 100000,
            backgroundColor: "#1F2937",
          }}
        >
          <div className="w-full h-full bg-[#111827] rounded-t-xl overflow-hidden">
            <iframe
              src={formUrl}
              className="w-full h-full border-0"
              onError={() => setIsFormLoaded(false)}
              title="Event Registration Form"
              style={{
                filter: "contrast(95%)",
                backgroundColor: "#111827",
              }}
            />
          </div>

          {!isFormLoaded && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#111827] bg-opacity-98"
              style={{ zIndex: 100001 }}
            >
              <div className="text-center px-6">
                <div className="mb-4">
                  <ExternalLink size={48} className="text-[#FF8329] mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Unable to Load Form
                </h3>
                <p className="text-gray-400 mb-6">
                  The registration form couldn't be loaded in the modal
                </p>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF8329] text-white rounded-lg hover:bg-opacity-90 transition-all hover:scale-105"
                >
                  Open in Google Forms
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
};

const events: Event[] = [
  {
    id: 1,
    title: "I-EXPO",
    description:
      "A grand exhibition showcasing innovative student projects across various domains. Experience cutting-edge technology, creative solutions, and groundbreaking ideas from young innovators.",
    poster: expoImage,
    notice: notice1,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfi3ZqALhxlpWH36gEHg-eb2KLqnEhi2fjZbVE9EUaxgO800A/viewform?embedded=true&theme=dark",
  },
  {
    id: 2,
    title: "I-QUIZ",
    description:
      "Test your knowledge in this quiz competition. Challenge yourself with questions spanning technology, innovation, science, and current affairs.",
    poster: quizImage,
    notice: notice2,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSewHCsGwM8hLchEuILycDNSP3HwpDzsEJ9-T4UXJoP-Mo2C1Q/viewform?embedded=true&theme=dark",
  },
  {
    id: 3,
    title: "I-CLUMINATE",
    description:
      "Drawing, ideas, solutions, teamwork, creativity, problems, charts, brainstorming, expression, innovation.",
    poster: cluminateImage,
    notice: notice3,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeKlLQcGNIG29nOwbiLTxxt5EKNwREzGiDEFMqlyr1ePdhm2Q/viewform?embedded=true&theme=dark",
  },
  {
    id: 4,
    title: "DOTTING THE EYE",
    description:
      "Add the final touch to perfection. Showcase your attention to detail and creative problem-solving abilities.",
    poster: dottingImage,
    notice: notice4,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd64bHjDM9PE98qhRYyGo5Q07Wy11icbQMayG5Jt59GFDNthw/viewform?embedded=true&theme=dark",
  },
  {
    id: 5,
    title: "TRASH BASH",
    description:
      "Turn trash into treasure! Join us for an exciting competition that challenges you to create innovative solutions from recycled materials.",
    poster: trashImage,
    notice: notice5,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdEhXn_w67gLWJkhwd0GvPmidwJ1LAEzFEhXimt-D-m4Mqx7Q/viewform?embedded=true&theme=dark",
  },
  {
    id: 6,
    title: "TECH-TRIBUNAL",
    description:
      "Debate as tech giants, defend allegations, and justify ethical decisions.",
    poster: techTribunalImage,
    notice: notice6,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSce2qzsdaME9-7NDDJA_PEjA2BgghNIJVgLft6VY_i_d9LCvg/viewform?embedded=true&theme=dark",
  },
  {
    id: 7,
    title: "ELEMENTOS",
    description:
      "Explore the elements of success with ELEMENTOS. A unique opportunity to demonstrate your understanding of fundamental principles. Registration will be done offline at the time of the event.",
    poster: elementosImage,
    notice: notice7,
    registrationLink: "offline",
  },
];

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [showForm, setShowForm] = useState(false);

  if (!event) return null;

  const eventModalContent = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          zIndex: 9997,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.5, y: 100 }}
          className="bg-gray-800 rounded-xl overflow-hidden w-full max-w-4xl h-[80vh]"
          onClick={(e) => e.stopPropagation()}
          style={{ position: "relative", zIndex: 9998 }}
        >
          <div className="relative h-full flex flex-col">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
              style={{ zIndex: 9999 }}
            >
              <X className="text-white" size={24} />
            </button>

            <div className="flex-1 w-full overflow-y-auto p-4">
              <img
                src={event.notice}
                alt={`${event.title} Notice`}
                className="w-full h-auto object-contain"
              />
            </div>

            <div
              className="p-6 bg-gray-800"
              style={{ position: "relative", zIndex: 9998 }}
            >
              {event.registrationLink !== "offline" ? (
                <motion.button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 bg-[#ff8329] text-white px-8 py-3
                           rounded-lg hover:bg-opacity-80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                  <ExternalLink size={20} />
                </motion.button>
              ) : (
                <div className="inline-flex items-center gap-2 bg-gray-700 text-white px-8 py-3 rounded-lg">
                  Registration at Event
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showForm && event.registrationLink !== "offline" && (
          <FormModal
            isOpen={showForm}
            onClose={() => setShowForm(false)}
            formUrl={event.registrationLink}
          />
        )}
      </AnimatePresence>
    </>
  );

  return createPortal(eventModalContent, document.body);
};

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showAllEvents, setShowAllEvents] = useState(false);

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-gray-900 py-12 sm:py-16"
    >
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff8329]" />
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-['Orbitron']">
            Events
          </h2>
        </div>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Discover our exciting lineup of events designed to challenge your
          creativity, innovation, and technical skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: index < 3 || showAllEvents ? 1 : 0,
                  y: index < 3 || showAllEvents ? 0 : 50,
                  height: index < 3 || showAllEvents ? "auto" : 0,
                }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.8,
                  delay: showAllEvents ? index * 0.2 : 0,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() =>
                  (index < 3 || showAllEvents) && setSelectedEvent(event)
                }
                style={{
                  pointerEvents: index < 3 || showAllEvents ? "auto" : "none",
                  visibility: index < 3 || showAllEvents ? "visible" : "hidden",
                }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(255,131,41,0.3)] transition-shadow duration-300">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110
                               transition-transform duration-700"
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col justify-end p-6"
                  >
                    <h3 className="text-[#ff8329] text-2xl font-bold mb-2 font-['Orbitron'] tracking-wide">
                      {event.title}
                    </h3>
                    <p className="text-gray-200 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 mb-4">
          <motion.button
            onClick={() => setShowAllEvents(!showAllEvents)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff8329] hover:bg-opacity-80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown
              size={20}
              className={`text-white transform transition-transform duration-700 ${
                showAllEvents ? "rotate-180" : ""
              }`}
            />
          </motion.button>
        </div>

        <AnimatePresence>
          {selectedEvent && (
            <EventModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Events;
