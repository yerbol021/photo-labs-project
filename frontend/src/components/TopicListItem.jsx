import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({
  slug, label
}) => {
  return (
  <div className="topic-list__item">
    <div className='label'>{label}
      <div className='slug'>{slug}</div>
    </div>
  </div>

  );
};

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem