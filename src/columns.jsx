import { Droppable } from "react-beautiful-dnd";
import React, { memo } from "react";
import PropTypes from "prop-types";
import TaskCard from "./task-card";
import { StrictModeDroppable } from "./strict-mode-droppable";
const Column = ({ droppableId, column }) => {
  return (
    <StrictModeDroppable droppableId={droppableId} key={droppableId}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? "radial-gradient(circle at 18.7% 37.8%, rgb(210, 250, 250) 0%, rgb(215, 234, 238) 90%)" : 'radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)',
              padding: 12,
              width: 250,
              minHeight: 500,
              // border: "2px dashed #ccc",
              borderRadius: "8px",
              borderTop: `7px solid ${column.color}`
            }}
          >
            <h2>{column.name}</h2>
            {column?.items?.map((item, index) => {
              return <TaskCard key={item.id} item={item} index={index} />;
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </StrictModeDroppable>
  );
};

Column.propTypes = {
  column: PropTypes.object,
  droppableId: PropTypes.string,
};

export default memo(Column);
