import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "../mocks/topics";

const TopicList = ({ topics, handleTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <li key={topic.id}>
          <TopicListItem
            handleTopicClick={handleTopicClick}
            id={topic.id}
            key={topic.id}
            title={topic.title}
          />
        </li>
      ))}
    </div>
  );
};

TopicList.defaultProps = {
  topics: topics,
};
export default TopicList;
