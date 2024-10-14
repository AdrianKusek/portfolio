import React from 'react';
import { client } from '../../lib/client';
import SkillsClient from './SkillsClient';

const Skills = async () => {
  const skillsQuery = '*[_type == "skills"]';
  const skills = await client.fetch(skillsQuery);

  return <SkillsClient skills={skills} />;
};

export default Skills;