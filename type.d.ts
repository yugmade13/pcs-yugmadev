import React from 'react';

interface Navigation {
  path: string,
  title: string,
  icon: any,
}

interface News {
  avatar: string,
  user: string,
  date: string,
  title: string,
  body: string,
}

interface Notif {
  status: string
  title: 'Reimbursement'|'Sickness'|'Overtime',
  body: () => string,
  hasBeenRead: boolean,
  image: string,
}

interface Status {
  paid: string,
  rejected: string,
  processed: string,
  approved: string,
  reviewed: string,
}

interface Submission {
  title: string
}

interface User {
  avatar: string,
  name: string,
  username: string,
}