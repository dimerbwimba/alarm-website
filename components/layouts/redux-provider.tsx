"use client";
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';

interface ReduxProvidersProps {
  children: ReactNode;
}

export function ReduxProviders({ children }: ReduxProvidersProps) {
  return <Provider store={store}>{children}</Provider>
}