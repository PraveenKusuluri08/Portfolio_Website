'use client';
import { SoftwareSkillType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';

import ListItem from '@/components/lists/ListItem';
import ShowLottie from '@/components/ui/ShowLottie';
import SkillIcon from '@/components/skills/SkillIcon';

import { motion, MotionProps, Variants } from 'framer-motion';

type Props = {
  lottie?: any;
  title: string;
  points: string[];
  skills: SoftwareSkillType[];
  className?: string;
  variants?: Variants;
} & MotionProps;

const Skill = ({
  lottie,
  title,
  skills,
  points,
  className = '',
  variants,
  ...rest
}: Props) => {
  // Organize skills by category
  const languageSkills = skills.filter(skill => 
    ['Python', 'Java', 'JavaScript', 'Go', 'C#'].includes(skill.name)
  );
  const frontendSkills = skills.filter(skill => 
    ['React.js', 'Next.js', 'Angular', 'Vue.js', 'Svelte', 'TypeScript', 'Redux', 'TailwindCSS', 'CSS3'].includes(skill.name)
  );
  const backendSkills = skills.filter(skill => 
    ['Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', '.NET'].includes(skill.name)
  );
  const databaseSkills = skills.filter(skill => 
    ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle SQL', 'AWS DynamoDB', 'Firestore'].includes(skill.name)
  );
  const cloudSkills = skills.filter(skill => 
    ['AWS', 'GCP', 'Firebase', 'Kubernetes', 'GitHub Actions', 'Docker'].includes(skill.name)
  );
  const toolSkills = skills.filter(skill => 
    !languageSkills.includes(skill) && !frontendSkills.includes(skill) && !backendSkills.includes(skill) && 
    !databaseSkills.includes(skill) && !cloudSkills.includes(skill)
  );

  const skillCategories = [
    { title: 'Languages', skills: languageSkills, color: 'from-indigo-500 to-purple-500' },
    { title: 'Frontend', skills: frontendSkills, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', skills: backendSkills, color: 'from-green-500 to-emerald-500' },
    { title: 'Databases', skills: databaseSkills, color: 'from-purple-500 to-pink-500' },
    { title: 'Cloud & DevOps', skills: cloudSkills, color: 'from-orange-500 to-red-500' },
    { title: 'Tools', skills: toolSkills, color: 'from-gray-500 to-slate-500' },
  ].filter(category => category.skills.length > 0);

  // Extract animation props from rest to avoid conflicts
  const { initial, whileInView, viewport, ...motionRest } = rest as any;
  
  return (
    <motion.div
      className={`flex gap-6 sm:gap-8 lg:gap-12 flex-col lg:flex-row items-start ${className}`}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      {...motionRest}
    >
      {/* Left - Skills Section */}
      <div className="space-y-6 lg:w-3/5 w-full">
        <div>
          <h3 className="mb-2 text-2xl sm:text-3xl font-bold text-center capitalize text-dark-2 dark:text-dark-1">
            {title}
          </h3>
          <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full mx-auto mb-6" />
        </div>

        {/* Organized Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-3.5 rounded-lg bg-bg-secondary dark:bg-bg-secondary border border-accent/10 hover:border-accent/30 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center gap-2 pb-2 mb-2.5 border-b border-accent/20">
                <div className={`h-0.5 w-6 bg-gradient-to-r ${category.color} rounded-full`} />
                <h4 className="text-xs font-bold text-accent uppercase tracking-wider">
                  {category.title}
                </h4>
                <div className={`h-0.5 w-6 bg-gradient-to-r ${category.color} rounded-full`} />
              </div>
              <div className="grid grid-cols-3 gap-2.5 justify-items-center">
                {category.skills.map(({ name, icon }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                  >
                    <SkillIcon src={icon} name={name} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Points */}
        <div className="mt-6 pt-6 border-t border-accent/20">
          <h4 className="mb-3 text-base font-semibold text-center text-dark-2 dark:text-dark-1">
            What I Build
          </h4>
          <ul className="space-y-2 text-sm">
            {points.map((point, index) => (
              <ListItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {point}
              </ListItem>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Right - Lottie Animation - Larger size */}
      {lottie && (
        <div className="lg:w-2/5 flex justify-center items-center lg:sticky lg:top-20 h-fit">
          <div className="relative w-full max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <ShowLottie path={lottie} className="w-full h-auto min-h-[350px] lg:min-h-[450px]" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Skill;
