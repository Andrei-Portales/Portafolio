import React from 'react';
import './RTags.scss';

const RTags = (props) => {
  const { content } = props;
  const { title, tags } = content;

  return (
    <div className="sectionRT" data-testid="rtags-test">
      <div className="title-RT">{title}</div>

      <div className="ele-RT">
        {tags.map((tag) => (
          <div className="tag-RT" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RTags;
