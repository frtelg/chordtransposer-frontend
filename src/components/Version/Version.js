import React from 'react';
import classes from './Version.module.css';

export default props => <div className={classes.Version}>v{props.version}</div>