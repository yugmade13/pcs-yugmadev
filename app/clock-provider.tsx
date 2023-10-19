'use client';

import React, { createContext, useState } from 'react';

export const ClockContext = createContext({});
export default function ClockProvider({ children }: { children: React.ReactNode }) {
  const [checkIn, setCheckIn] = useState('08:30');
  const [checkOut, setCheckOut] = useState('');
  const [workingHours, setWorkingHours] = useState('');

  return (
    <ClockContext.Provider value={{
      checkOut,
      setCheckOut,
      workingHours,
      setWorkingHours,
      checkIn,
      setCheckIn
    }}>
      {children}
    </ClockContext.Provider>
  );
}