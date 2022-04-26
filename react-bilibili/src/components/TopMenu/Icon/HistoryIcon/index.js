import React from 'react';
import Icon from '@ant-design/icons';

const historyIcon = () => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="right-entry-icon">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10 1.74286C5.02955 1.74286 1 5.7724 1 10.7429C1 15.7133 5.02955 19.7429 10 19.7429C14.9705 19.7429 19 15.7133 19 10.7429C19 5.7724 14.9705 1.74286 10 1.74286ZM10.0006 3.379C14.0612 3.379 17.3642 6.68282 17.3642 10.7426C17.3642 14.8033 14.0612 18.1063 10.0006 18.1063C5.93996 18.1063 2.63696 14.8033 2.63696 10.7426C2.63696 6.68282 5.93996 3.379 10.0006 3.379Z"
              fill="currentColor"></path>
        <path d="M9.99985 6.6521V10.743" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
        <path d="M12.4545 10.7427H10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
    </svg>
);
const HistoryIcon = props => <Icon component={historyIcon} {...props} />;

export default HistoryIcon;