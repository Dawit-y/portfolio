import { motion } from "framer-motion";
import { skillsData } from "../data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-14 flex flex-col items-center justify-center"
    >
      <h1 className="heading mb-10">
        My
        <span className="text-purple"> Skills</span>
      </h1>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 w-3/4 self-center">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
