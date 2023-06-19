import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({topics}) => {
  return (
  <div className="top-nav-bar__topic-list">
    {topics.map((topic)=>(
      <li key={topic.id}>
        <TopicListItem
        title={topic.title}
        slug={topic.slug}/>
      </li>
    ))}
  </div>
  );
};

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },  
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
}
export default TopicList