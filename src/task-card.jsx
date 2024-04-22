import React, { memo } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
function TaskCard({ item, index }) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: "none",
              padding: 16,
              margin: "0 0 8px 0",
              minHeight: "50px",
              backgroundColor: snapshot.isDragging ? "#radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)" : "white",
              borderRadius: "4px",
              ...provided.draggableProps.style,
            }}
          >
            <div className="content-card">
              <div className="header_content">
                <h5 style={{color: 'blue'}}>{item.task_num}</h5>
                <h5 style={{marginLeft: '8px'}}>{item.task}</h5>
              </div>
              <div className="date_status_content">
                <h5>Due: {item.due_date}</h5>
                <h5 style={{marginLeft: '8px'}}>{item.status}</h5>
              </div>
              <div className="profile_content">
                <img
                src="https://react-beautiful-dnd.netlify.app/static/media/bmo-min.9c65ecdf.png"
                alt="logo"
                className="logo"
              />
                <h5 style={{marginLeft: '8px'}}>{item.assignee}</h5>
              </div>
              
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}

TaskCard.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
};

export default memo(TaskCard);
