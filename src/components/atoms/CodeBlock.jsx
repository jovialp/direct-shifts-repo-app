import React from 'react';
import Box from '@mui/material/Box';

const CodeBlock = ({ text }) => {
  console.log({ text });
  return (
    <Box
      component="div"
      sx={{
        display: 'block',
        // px: 0,
        // py: 0,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : '#fff',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <pre
        style={{
          overflow: 'auto',
          padding: '15px',
          paddingTop: '0px',
          margin: 'unset',
        }}
      >
        <code>{text}</code>
      </pre>
    </Box>
  );
};
export default CodeBlock;
