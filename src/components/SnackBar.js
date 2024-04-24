import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert, Slide } from '@mui/material';

export default function SimpleSnackbar({ message, severity }) {
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={true}
                autoHideDuration={6000}
                TransitionComponent={Slide}
            >
                <Alert
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
