import { client } from '../../lib/client';
import AboutClient from './AboutClient';

const About = async () => {
  const query = '*[_type == "abouts"]';
  const abouts = await client.fetch(query);

  return <AboutClient abouts={abouts} />;
};

export default About;