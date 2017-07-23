import React from 'react';
import { connect } from 'dva';
import styles from './CountPage.less';

function CountPage({ count, dispatch }) {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({ type: 'count/add' }); }}>+</button>
        <button onClick={() => { dispatch({ type: 'count/minus' }); }}>-</button>
      </div>
    </div>
  );
}

CountPage.propTypes = {
};

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(CountPage);
