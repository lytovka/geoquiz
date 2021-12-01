import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

export const LoginWrapper = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const [renderTrigger, setRenderTrigger] = useState(false);

    useEffect(() => {
        setRenderTrigger(isAuthenticated);
    }, [isAuthenticated]);

    return (
        <Button
            variant='text'
            onClick={() => {
                if (!isAuthenticated) {
                    loginWithRedirect();
                } else {
                    logout();
                }
            }}
            color='secondary'>
            {isAuthenticated ? 'Log Out' : 'Log In'}
        </Button>);
}