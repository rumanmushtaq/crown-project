import React from "react";
import './collection-overview.styles.scss';
import Preview from "../preview-collection/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../reduxs/shop/shop.selector";

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Preview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(CollectionOverview);