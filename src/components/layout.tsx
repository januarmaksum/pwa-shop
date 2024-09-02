// import * as React from 'react';
import Button from '@mui/material/Button';
import { Slider } from '@mui/material';

export default function Layout() {
  return (
    <div className="p-4">
      <h1 className="text-sm font-bold">Hello, World!</h1>
      <Button variant="contained" color="primary">
        MUI Button
      </Button>
      <Slider defaultValue={30} className="text-teal-600" />
    </div>
  );
}