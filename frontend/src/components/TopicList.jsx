import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';
import topics from '../mocks/topics';

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
  topics: topics
}
export default TopicList