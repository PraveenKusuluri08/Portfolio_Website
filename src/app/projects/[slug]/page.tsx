import { projectsSection } from '@/lib/content/projects';
import { findProjectBySlug } from '@/lib/utils/helper';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/containers/ProjectDetail';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projectsSection.projects
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug!,
    }));
}

export default async function ProjectPage({ params }: Props) {
  const project = findProjectBySlug(params.slug, projectsSection.projects);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

