import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    button: {
        backgroundColor: '#FF4F21',
        color: '#ffffff',
        minWidth: '110px',
        width: 'auto',
        height: 'auto',
        maxHeight: '50px',
        border: 'none',
        borderRadius: '40px',
        fontSize: 'clamp(18px , 18px, 24px)', //18px-24px
        lineHeight: 'clamp(8px, 18px, 18px)', //8px-18px
        padding: '12px 36px',
        cursor: 'pointer'
    }
})
function Button({ children, onClick }) {
    const classes = useStyles()
    return (
        <>
            <button
                className={classes.button}
                onClick={onClick}
            >{children}</button>
        </>
    )
}

export default Button