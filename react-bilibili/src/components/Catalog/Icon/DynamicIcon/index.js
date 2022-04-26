import React from 'react';
import Icon from '@ant-design/icons';

const dynamicIcon = () => (
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="icon-bg--icon">
        <path
            d="M6.41659 15.625C3.88528 15.625 1.83325 13.7782 1.83325 11.5H10.9999C10.9999 13.7782 8.94789 15.625 6.41659 15.625Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
            d="M15.125 16.0827C15.125 18.614 13.2782 20.666 11 20.666L11 11.4993C13.2782 11.4993 15.125 13.5514 15.125 16.0827Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
            d="M6.875 6.91667C6.875 9.44797 8.72183 11.5 11 11.5L11 2.33333C8.72182 2.33333 6.875 4.38536 6.875 6.91667Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M15.5833 7.375C13.052 7.375 11 9.22183 11 11.5H20.1667C20.1667 9.22183 18.1146 7.375 15.5833 7.375Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
);
const DynamicIcon = props => <Icon component={dynamicIcon} {...props} />;

export default DynamicIcon;