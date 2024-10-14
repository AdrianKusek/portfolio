import { client } from '@/app/lib/client';
import WorkClient from './WorkClient';

const Work = async () => {
  const query = '*[_type == "works"]';
  const works = await client.fetch(query);

  return <WorkClient works={works} />;
};

export default Work