import { AiOutlineCalendar, AiOutlineHome, AiOutlineForm, AiOutlineSetting } from 'react-icons/ai';

import { Navigation } from '@/type';

const navigations: Navigation[] = [
  {
    path: '/',
    title: 'Home',
    icon: AiOutlineHome
  },
  {
    path: '/attendance',
    title: 'Attendance',
    icon: AiOutlineCalendar
  },
  {
    path: '/',
    title: 'Null',
    icon: 'Null'
  },
  {
    path: '/form',
    title: 'Form',
    icon: AiOutlineForm
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: AiOutlineSetting
  },
];

export default navigations;