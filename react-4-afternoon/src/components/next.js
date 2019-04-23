import React, { Component } from 'react';
import data from './data';

export default function Next(props) {
  return (
    <button onClick={props.task}>Next</button>
  )
}