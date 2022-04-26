import React from 'react';
import Icon from '@ant-design/icons';

const writingCenter = () => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
         className="right-entry-icon">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="16" height="20">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.74286H17.5V20.0762H2.5V1.74286Z"
                  fill="currentColor"></path>
        </mask>
        <g mask="url(#mask0)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.99999 1.74286C9.92916 1.74286 9.85916 1.74369 9.78833 1.74536C5.85416 1.85453 2.58416 5.14869 2.50166 9.08286C2.44999 11.5404 3.58666 13.7304 5.36999 15.1337C5.52166 15.2529 5.63166 15.4162 5.67333 15.6045L6.30416 18.447C6.51583 19.3987 7.36083 20.0762 8.33583 20.0762H11.6617C12.6383 20.0762 13.4842 19.3987 13.6958 18.4445L14.3275 15.602C14.3692 15.4154 14.4775 15.2537 14.6275 15.1354C16.3733 13.7629 17.5 11.637 17.5 9.24286C17.5 5.10036 14.1425 1.74286 9.99999 1.74286ZM10.0003 3.40939C13.2161 3.40939 15.8336 6.02606 15.8336 9.24273C15.8336 11.0386 15.0186 12.7086 13.5978 13.8252C13.1428 14.1827 12.8244 14.6852 12.7011 15.2402L12.0686 18.0827C12.0269 18.2752 11.8586 18.4094 11.6619 18.4094H8.33609C8.14109 18.4094 7.97359 18.2761 7.93192 18.0852L7.30025 15.2427C7.17609 14.6869 6.85775 14.1827 6.40109 13.8236C4.94359 12.6769 4.12942 10.9619 4.16859 9.11773C4.23192 6.05523 6.77442 3.49606 9.83442 3.41189C9.88942 3.41023 9.94525 3.40939 10.0003 3.40939Z"
                  fill="currentColor"></path>
            <path d="M10 6.81299L8.81253 9.18726H11.1875L9.99952 11.561" stroke="currentColor" stroke-width="1.6"
                  stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <path d="M6.66656 15.9095H13.3332" stroke="currentColor" stroke-width="1.7"></path>
    </svg>
);
const WritingCenter = props => <Icon component={writingCenter} {...props} />;

export default WritingCenter;