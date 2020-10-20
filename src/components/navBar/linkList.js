import React from 'react';
import { Link } from 'gatsby';

const LinkList = ({ links, setToggle }) => {
  const generateLink = (link, name) => {
    const expression = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi;
    const isExternalLink = expression.test(link);
    if (link === '/') {
      return (
        <li key={name} onClick={() => setToggle(false)}>
          <Link to={link}>{name}</Link>
        </li>
      );
    }
    if (isExternalLink) {
      return (
        <li key={name}>
          <a target="__blank" rel="noreferrer" href={link}>
            {name}
          </a>
        </li>
      );
    }
    return (
      <li key={name}>
        <Link to={link}>{name}</Link>
      </li>
    );
  };

  return <>{links.map(({ link, name }) => generateLink(link, name))}</>;
};

export default LinkList;
