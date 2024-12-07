The solution involves using `useCallback` from React to memoize the function:

```javascript
import React, { useState, useEffect, useCallback } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    // ...fetch data...
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    // ...JSX...
  );
};

export default MyComponent;
```

By using `useCallback`, the `fetchData` function is only recreated when its dependencies change (in this case, none, indicated by the empty array `[]`). This ensures that the `useEffect` hook runs only when necessary.