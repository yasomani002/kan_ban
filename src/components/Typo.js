import React from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

const useStyles = makeStyles({
  ka01: {
    fontFamily: 'Kanit',
    fontSize: 'clamp(0.875rem, 0.5699rem + 1.5254vw, 2rem)', // 14px-32px 
  },
  lb01: {
    fontFamily: 'Libre',
    fontSize: 'clamp(0.875rem, 0.7055rem + 0.8475vw, 1.5rem)', //14px - 26px
  },
  lb02: {
    fontFamily: 'Libre',
    fontSize: 'clamp(0.625rem, 0.4555rem + 0.8475vw, 1.25rem)', //10px - 20px
  },
  lb03: {
    fontFamily: 'Libre',
    fontSize: 'clamp(clamp(18px , 18px, 24px))', //18px - 24px
  },
})
function Typo({ children, variant, className }) {
  const classes = useStyles()

  const variantData =
  {
    'ka01': classes.ka01,
    'lb01': classes.lb01,
    'lb02': classes.lb02,
    'lb03': classes.lb03,
  }
  return (
    <span className={
      classNames(
        variantData[variant],
        className)
    }>{children}</span>
  )
}

export default Typo