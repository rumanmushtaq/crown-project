import React from "react";
import "./preview-collection.styles.scss";
import CollectioinItem from "./../collectioin-item/collectioin-item.component";

const Preview = ({ title, items }) => {
  console.log({title},{items});
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectioinItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Preview;
