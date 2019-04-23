import React, { Component } from 'react';
import data from './data';

export default function Previous(props) {
  return (
    <button onClick={props.task}>Previous</button>
  )
}