import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../reduxs/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';

const Directory =({directory}) => (
  <div className='directory-menu'>
  {directory.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ))}
</div>
)

const mapStateToProps = createStructuredSelector ({
  directory : selectDirectorySections
})


export default connect(mapStateToProps)(Directory);
