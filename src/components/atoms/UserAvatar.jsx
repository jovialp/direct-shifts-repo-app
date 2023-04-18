import React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

const UserAvatar = ({ name, avatarUrl }) => {
  return (
    <Chip
      avatar={<Avatar alt={name} src={avatarUrl} />}
      label={name}
      variant="outlined"
      sx={{ height: 'auto', padding: '2px 0px' }}
    />
  );
};
export default UserAvatar;
