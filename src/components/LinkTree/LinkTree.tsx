import React from 'react';
import LinkCard from '../LinkCard/LinkCard';
import './LinkTree.css';

interface Link {
  title: string;
  url: string;
  icon?: string;
}

interface LinkTreeProps {
  profileImage?: string;
  name: string;
  bio?: string;
  links: Link[];
}

const LinkTree: React.FC<LinkTreeProps> = ({ profileImage, name, bio, links }) => {
  return (
    <div className="link-tree">
      <div className="profile">
        {profileImage && (
          <img src={profileImage} alt={name} className="profile-image" />
        )}
        <h1 className="profile-name">{name}</h1>
        {bio && <p className="profile-bio">{bio}</p>}
      </div>
      <div className="links-container">
        {links.map((link, index) => (
          <LinkCard
            key={index}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkTree; 