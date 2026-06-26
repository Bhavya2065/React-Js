import React from 'react';

const ChildCompo = React.memo(({ btnname, handleClick }) => {

    console.log("Child Component called!!");

    return (
        <button style={{ marginTop: '20px' }} onClick={handleClick}>{btnname}</button>
    )
});

export default ChildCompo;

/*
  =========================================
  UNDERSTANDING React.memo 
  =========================================

  1. WHAT IS IT?
     - React.memo is a tool that wraps a component to stop it from re-rendering unless its props change.

  2. HOW DOES IT HELP PREVENT CHILD RE-RENDERS?
     - By default: When a Parent component re-renders, the Child component also re-renders, even if the Child's props did not change.
     - With React.memo: React compares the new props with the old props before rendering the Child.
       * If props are the SAME: React skips rendering the Child and reuses the cached UI.
       * If props have CHANGED: React renders the Child.

  3. WHY WE PAIR IT WITH useCallback:
     - React.memo compares props using reference checks.
     - If you pass a function to a child, that function gets a new memory address on every parent render.
     - React.memo sees the new address and thinks the prop changed, so it re-renders the Child.
     - By using `useCallback` on the function in the Parent, the function's memory address remains the same. This allows `React.memo` to successfully skip re-rendering the Child.
*/