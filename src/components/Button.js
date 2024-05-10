import { makeStyles } from '@mui/styles'
import React from 'react'
import classNames from 'classnames'

const useStyles = makeStyles({
    button: {
        backgroundColor: '#001fff',
        color: '#ffffff',
        minWidth: '110px',
        width: 'auto',
        height: 'auto',
        maxHeight: '50px',
        border: 'none',
        borderRadius: '10px',
        fontFamily: 'Kanit',
        fontSize: 'clamp(18px , 18px, 24px)', //18px-24px
        lineHeight: 'clamp(8px, 18px, 18px)', //8px-18px
        padding: '12px 36px',
        cursor: 'pointer'
    }
})
function Button({ children, onClick, className }) {
    const classes = useStyles()
    return (
        <>
            <button
                className={classNames(classes.button, className)}
                onClick={onClick}
            >{children}</button>
        </>
    )
}

export default Button