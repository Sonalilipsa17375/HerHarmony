import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './../configs/FirebaseConfig';

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Stack>
      {isAuthenticated ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="index" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
