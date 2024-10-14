import { client } from '../../lib/client';
import TestimonialsClient from './TestimonialsClient';

const Testimonial = async () => {
  const query = '*[_type == "testimonials"]';
  const testimonials = await client.fetch(query);

  return <TestimonialsClient testimonials={testimonials} />;
};

export default Testimonial;