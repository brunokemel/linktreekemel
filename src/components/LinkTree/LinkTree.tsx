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
    <div className="link-tree" data-testid="link-tree">
      <div className="profile" data-testid="profile-section">
        {profileImage && (
          <img src={profileImage} alt={name} className="profile-image" data-testid="profile-image" />
        )}
        <h1 className="profile-name" data-testid="profile-name">{name}</h1>
        {bio && <p className="profile-bio" data-testid="profile-bio">{bio}</p>}
      </div>
      <div className="links-container" data-testid="links-container">
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