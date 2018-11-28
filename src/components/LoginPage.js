import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (

  <div className="box-layout">

      <div className="box-layout__box">
        <h1 className=".box-layout__title"> My Expenses</h1>
        <p> Get all expenses under control</p>
        <button className="button" onClick={startLogin}>Login with Gmail</button>
      </div>
   
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
