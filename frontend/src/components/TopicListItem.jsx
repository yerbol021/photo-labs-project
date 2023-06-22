import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, handleTopicClick, id }) => {
  return (
    <div className="topic-list__item" onClick={() => handleTopicClick(id)}>
      <div className="title">{title}</div>
    </div>
  );
};

// TopicListItem.defaultProps = {
//   id: "1",
//   slug: "topic-1",
//   title: "Nature",
// };
export default TopicListItem;
