```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Incorrect nesting of Routes */}
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </Routes>
    </BrowserRouter>
  );
}
```