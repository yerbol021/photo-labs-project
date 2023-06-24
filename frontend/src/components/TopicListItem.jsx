import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, handleTopicClick, id }) => {
  return (
    <div className="topic-list__item" onClick={() => handleTopicClick(id)}>
      <div className="title">{title}</div>
    </div>
  );
};

export default TopicListItem;
