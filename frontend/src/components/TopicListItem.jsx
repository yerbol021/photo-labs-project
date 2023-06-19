import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({
  slug, title
}) => {
  return (
  <div className="topic-list__item">
    <div className='title'>{title}
      <div className='slug'>{slug}</div>
    </div>
  </div>

  );
};

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "title": "Nature"
}
export default TopicListItem