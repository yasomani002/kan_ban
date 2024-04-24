import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    os01: {
        fontFamily: 'Object Sans',
        fontSize: 'clamp(26px , 5vw, 16px)', //20px-60px
        lineHeight: 'clamp(2rem , 5vw, 4.25rem)', //32px-68px
        fontWeight: 700,
    },
})
function Typo({ children, variant }) {
    const classes = useStyles()

    const variantData =
    {
        'os01': classes.os01,
    }
  return (
    <span className={variantData[variant]} >{children}</span>
  )
}

export default Typo