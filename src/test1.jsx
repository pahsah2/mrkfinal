import React from 'react';
import { Card } from 'react-bootstrap';
export default function test1(props) {
  const onDeleteStudent = () => {
    props.deleteStudent();
  };
  return (
    <div className="card">
      <div className="card-header text-center">
        <button onClick={onDeleteStudent} className="btn btn-danger btn-sm">
          delete
        </button>
      </div>
      <div className="card-body">
        <dl className="row">
          <dt className="col-6">id: </dt>
          <dd className="col-6">{props.data.id}</dd>
          <dt className="col-6">name: </dt>.
          <dt className="col-6">{props.data.name}</dt>
        </dl>
      </div>
    </div>
  );
}
