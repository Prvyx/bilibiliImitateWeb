import React from 'react';
import Icon from '@ant-design/icons';

const channelIcon = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="icon-bg--icon">
        <circle cx="5.6875" cy="14" r="3.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"></circle>
        <circle cx="10.5" cy="5.6875" r="3.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"></circle>
        <circle cx="15.3125" cy="14" r="3.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"></circle>
    </svg>
);
const ChannelIcon = props => <Icon component={channelIcon} {...props} />;

export default ChannelIcon;