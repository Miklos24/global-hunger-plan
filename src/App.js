import './App.css';
import Button from '@mui/material/Button';
import Create from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 3456)
    return ()=> clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="title-section">
        <Typography variant="h2">
          <span> Since you've arrived on this site, {seconds} people have died of hunger-related causes. </span>
        </Typography>
      </div>
      <div className="democracy-io-link">
        <Button 
          href="https://democracy.io"
          target="_blank"
          size="large" 
          variant="contained" 
          color="success" 
          startIcon={<Create />}>
          Write a Letter to Your Representatives
        </Button>
      </div>
    </div>
  );
}

export default App;
