import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Experience from '@/containers/Experience';
import Hero from '@/containers/Hero';
import Layout from '@/containers/layout/Layout';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
