'use client';

import { author } from '@/lib/content/portfolio';

import Sidebar from '@/components/ui/Sidebar';
import SocialLink from '@/components/socials/SocialLink';

const Email = () => {
  return (
    <Sidebar side="right">
      <SocialLink
        href={`mailto:${author.email}`}
        className="[writing-mode:vertical-lr] font-mono tracking-widest text-xs"
      >
        {author.email}
      </SocialLink>
    </Sidebar>
  );
};

export default Email;
