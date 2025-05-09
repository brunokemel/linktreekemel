import React from 'react';
import './LinkCard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface LinkCardProps {
  title: string;
  url: string;
  icon?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, icon }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
      {icon && <i className={`bi bi-${icon} link-icon`}></i>}
      <span className="link-title">{title}</span>
    </a>
  );
};

export default LinkCard; 