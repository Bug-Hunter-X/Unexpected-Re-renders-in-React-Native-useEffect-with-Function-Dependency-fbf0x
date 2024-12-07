# Unexpected Re-renders in React Native useEffect with Function Dependency

This repository demonstrates a common but subtle error in React Native: unexpected re-renders when using the `useEffect` hook with a function dependency.  The issue arises because a new function instance is created on every render, causing the effect to run repeatedly.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides the corrected version using `useCallback` to memoize the function and resolve the re-render issue.

## Solution

Use `useCallback` to memoize the function and prevent unnecessary re-renders.