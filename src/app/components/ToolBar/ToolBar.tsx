'use client';

import search from '@/assets/icon/search.svg';
import { CustomFlowbiteTheme, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react';

const ToolBar = () => {
  const [fontSize, setFontSize] = useState([
    { label: 'A', value: '16px' },
    { label: 'A+', value: '19px' },
    { label: 'A++', value: '22px' }
  ]);
  const changeFontSize = (size: string) => {
    document.documentElement.style.setProperty('--font-size', size);
  };
  const [language, setLanguage] = useState([{ label: '繁体中文', value: 'zh-hant' }]);
  const [currentLang, setCurrentLang] = useState({
    value: 'zh-hant',
    label: '繁体中文'
  });
  const customTheme: CustomFlowbiteTheme['dropdown'] = {
    arrowIcon: 'hidden'
  };
  const verticalLine = 'after:absolute after:left-0 after:h-[16px] after:border-r-2 after:border-[#dcdcdc]';
  return (
    <div className="bg-primary flex justify-center">
      <div className="container">
        <ul className="h-[50px] flex justify-end items-center gap-3">
          {/* 搜索框 */}
          <li>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.7949 12.9667L11.8728 10.0451C11.8073 9.97993 11.7297 9.92827 11.6442 9.8931C11.5588 9.85793 11.4672 9.83995 11.3748 9.84019H10.8968C11.8513 8.61741 12.3033 7.0767 12.1607 5.5322C12.0181 3.98771 11.2917 2.55574 10.1295 1.5283C8.96733 0.500847 7.45695 -0.0447086 5.90633 0.00286958C4.35571 0.0504477 2.88164 0.687577 1.78467 1.78434C0.687703 2.88111 0.050457 4.35492 0.0028701 5.90525C-0.0447168 7.45558 0.500939 8.96568 1.52858 10.1276C2.55621 11.2896 3.98844 12.0159 5.53322 12.1585C7.078 12.301 8.619 11.8491 9.842 10.8948V11.3728C9.84176 11.4651 9.85974 11.5567 9.89492 11.6421C9.93009 11.7275 9.98176 11.8052 10.047 11.8706L12.9691 14.7922C13.0343 14.858 13.1118 14.9103 13.1973 14.946C13.2827 14.9816 13.3744 15 13.4671 15C13.5597 15 13.6514 14.9816 13.7369 14.946C13.8223 14.9103 13.8999 14.858 13.965 14.7922L14.7949 13.9624C14.9263 13.83 15 13.6511 15 13.4646C15 13.2781 14.9263 13.0991 14.7949 12.9667ZM6.09078 9.84019C5.34886 9.84019 4.6236 9.62022 4.00671 9.20811C3.38983 8.796 2.90903 8.21024 2.62511 7.52493C2.34119 6.83961 2.2669 6.0855 2.41164 5.35797C2.55638 4.63044 2.91365 3.96216 3.43827 3.43764C3.96289 2.91312 4.63129 2.55591 5.35895 2.4112C6.08662 2.26648 6.84086 2.34076 7.52631 2.62462C8.21175 2.90849 8.79761 3.38921 9.2098 4.00598C9.62199 4.62275 9.842 5.34788 9.842 6.08966C9.84221 6.58225 9.74533 7.07005 9.55689 7.52518C9.36846 7.98032 9.09215 8.39386 8.74378 8.74217C8.3954 9.09048 7.98178 9.36674 7.52657 9.55514C7.07135 9.74354 6.58346 9.84041 6.09078 9.84019Z"
                    fill="#05489B"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full ps-10 py-1 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </li>
          {/* 字体大小 */}
          <li className={`flex items-center gap-6 pl-5 font-bold cursor-pointer text-white relative ${verticalLine}`}>
            {fontSize.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    changeFontSize(item.value);
                  }}
                >
                  {item.label}
                </span>
              );
            })}
          </li>
          {/* 多语言 */}
          <li className={`flex items-center gap-2 text-white relative pl-5 ${verticalLine}`}>
            <span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.991 4.50041e-06C7.21136 0.00178415 5.47218 0.531137 3.99333 1.52115C2.51447 2.51117 1.36232 3.91739 0.682508 5.56208C0.00269908 7.20678 -0.174247 9.01609 0.174035 10.7613C0.522318 12.5066 1.38019 14.1094 2.63922 15.3671C3.89825 16.6249 5.50192 17.4812 7.2475 17.8277C8.99308 18.1743 10.8022 17.9955 12.4462 17.3141C14.0902 16.6326 15.4953 15.479 16.4839 13.9992C17.4724 12.5194 18 10.7797 18 9C18 7.81735 17.7669 6.64629 17.3141 5.55377C16.8612 4.46126 16.1975 3.4687 15.3608 2.63286C14.5241 1.79701 13.5309 1.13427 12.4379 0.682504C11.3449 0.230741 10.1737 -0.00117815 8.991 4.50041e-06ZM15.228 5.4H12.573C12.291 4.28669 11.8739 3.21204 11.331 2.2C12.9721 2.7642 14.3553 3.90006 15.228 5.4ZM9 1.836C9.75601 2.92671 10.3361 4.12936 10.719 5.4H7.281C7.66394 4.12936 8.244 2.92671 9 1.836ZM2.034 10.8C1.722 9.62029 1.722 8.37972 2.034 7.2H5.076C4.99759 7.7969 4.95551 8.39801 4.95 9C4.95551 9.602 4.99759 10.2031 5.076 10.8H2.034ZM2.772 12.6H5.427C5.70898 13.7133 6.12608 14.788 6.669 15.8C5.02621 15.2389 3.64197 14.1023 2.772 12.6ZM5.427 5.4H2.772C3.6427 3.89719 5.02809 2.76046 6.672 2.2C6.12804 3.2119 5.70994 4.28655 5.427 5.4ZM9 16.164C8.244 15.0733 7.66394 13.8707 7.281 12.6H10.719C10.3361 13.8707 9.75601 15.0733 9 16.164ZM11.106 10.8H6.894C6.8051 10.204 6.75699 9.60258 6.75 9C6.75663 8.39741 6.80474 7.79599 6.894 7.2H11.106C11.1953 7.79599 11.2434 8.39741 11.25 9C11.243 9.60258 11.1949 10.204 11.106 10.8ZM11.331 15.8C11.8739 14.788 12.291 13.7133 12.573 12.6H15.228C14.3546 14.1005 12.9702 15.2364 11.328 15.8H11.331ZM12.924 10.8C13.0024 10.2031 13.0445 9.602 13.05 9C13.0445 8.39801 13.0024 7.7969 12.924 7.2H15.966C16.278 8.37972 16.278 9.62029 15.966 10.8H12.924Z"
                  fill="white"
                />
              </svg>
            </span>

            <Dropdown size="sm" inline theme={customTheme} label={currentLang.label}>
              {language.map((item, index) => (
                <Dropdown.Item key={index}>{item.label}</Dropdown.Item>
              ))}
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToolBar;
