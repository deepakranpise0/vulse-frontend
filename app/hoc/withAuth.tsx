import { useEffect } from 'react';

import {
  usePathname,
  useRouter,
} from 'next/navigation';

export const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const pathName=usePathname()

    // Your authentication logic goes here
    let token = localStorage.getItem('token');
    const isAuthenticated = token ? true : false; // Example authentication check

    useEffect(() => {
      console.log(pathName)
      if (typeof window !== 'undefined') {
        if (!isAuthenticated) {
          router.push('/login');
        } else if (pathName === '/login') {
          router.push('/home');
        }
      }
    }, [isAuthenticated, pathName, router]);

    // Render the wrapped component if authenticated, else null
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthComponent;
};