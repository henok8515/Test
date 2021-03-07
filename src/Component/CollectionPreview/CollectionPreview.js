import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.css";
const CollectionPreview = ({ title, items, id }) => (
  <div>
    <h1 className="title">{title}</h1>
    <div className="collection-preview">
      <div className="preview"></div>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
