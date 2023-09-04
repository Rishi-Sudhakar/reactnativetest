// LoginScreen.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  it('displays login button', () => {
    const { getByText } = render(<LoginScreen />);
    const loginButton = getByText('Login');
    expect(loginButton).toBeDefined();
  });

  it('handles login when button is pressed', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
  
    console.log('usernameInput:', usernameInput);
    console.log('passwordInput:', passwordInput);
    console.log('loginButton:', loginButton);
  
    fireEvent.changeText(usernameInput, 'admin');
    fireEvent.changeText(passwordInput, 'admin@123');
    fireEvent.press(loginButton);
  

  });
});
