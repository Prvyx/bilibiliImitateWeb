import React from 'react';
import Icon from '@ant-design/icons';

const dynamicIcon = () => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="right-entry-icon">
        <g clip-path="url(#clip0)">
            <path
                d="M10 10.743C7.69883 10.743 5.83333 8.87747 5.83333 6.5763C5.83333 4.27512 7.69883 2.40964 10 2.40964V10.743Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
            <path
                d="M10 10.743C10 13.0441 8.1345 14.9096 5.83333 14.9096C3.53217 14.9096 1.66667 13.0441 1.66667 10.743H10Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
            <path
                d="M10 10.743C10 8.44182 11.8655 6.57632 14.1667 6.57632C16.4679 6.57632 18.3333 8.44182 18.3333 10.743H10Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
            <path
                d="M9.99999 10.743C12.3012 10.743 14.1667 12.6085 14.1667 14.9096C14.1667 17.2108 12.3012 19.0763 9.99999 19.0763V10.743Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="20" height="20" fill="currentColor" transform="matrix(-1 0 0 1 20 0.742981)"></rect>
            </clipPath>
        </defs>
    </svg>
);
const DynamicIcon = props => <Icon component={dynamicIcon} {...props} />;

export default DynamicIcon;