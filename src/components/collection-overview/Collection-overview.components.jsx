import React from "react";
import './collection-overview.styles.scss';
import Preview from "../preview-collection/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../reduxs/shop/shop.selector";

const CollectionOverview =( { collections }) => {
  collections.map(data=>console.log(data.id))
  return (
    <div className="collection-overview">
        {collections.forEach(data =>{
          console.log(data);
          return(<Preview key={data.id} data={data} />)}
      )}
    </div>
)
        }

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(CollectionOverview);