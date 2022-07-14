import React from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollections } from "../../reduxs/shop/shop.selector";
import CollectioinItem from "../../components/collectioin-item/collectioin-item.component";

const CategroyPage = ({ collection }) => {
  const location = useLocation();
  const categoryArray = location.pathname.split(`/`);
  const categoryId = categoryArray[categoryArray.length - 1];
  console.log(categoryArray, categoryId);
  console.log(collection);
  const result = collection
        .find((collect) => collect.routeName === categoryId)

  const {title , items} = result;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .map((item) => (
            <CollectioinItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(state),
});
export default connect(mapStateToProps)(CategroyPage);


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
