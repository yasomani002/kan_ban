import { Input, InputAdornment } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import PropTypes from 'prop-types'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '49px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #EAEAEA',
        textDecoration: 'none',
        boxShadow: '#908a8a 6px 6px 7px',
        '& input': {
            margin: '10px',
            fontWeight: 500,
            fontSize: 'clamp(0rem , 5vw, 0.875rem)', //6px-14px',
            color: '#000648',
            '&::placeholder': {
                color: '#6a6c7e',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '18px'
            }
        },
    },
    textFiledRequiredSymbole: {
        // color: theme.palette.orange
    },
    redRoot: {
        boxShadow: '#fcc7c7 6px 6px 7px',
        border: '1px solid red',
        // animation: `$lauchTime 100ms ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes lauchTime": {
        "0%": {
            transform: "translate(5%, 0%)",
        },
        "25%": {
            transform: "translate(-5%)",
        },
        "50%": {
            transform: "translate(5%)",
        },
        "75%": {
            transform: "translate(5%)",
        },
        "100%": {
            transform: "translate(0%)",
        }
    },
    inputIcon: {
        display: 'inline',
        marginLeft: '1rem'
    },
    endInputIcon: {
        display: 'inline',
        marginRight: '1rem'
    },
    label: {
        margin: '0 0 12px 2px',
        textAlign: 'start'
    },
    error: {
        color: 'red',
        fontWeight: 500,
        fontSize: '0.625rem', //10px
        lineHeight: '0.875rem', //14px
        margin: '8px 0 0 5px',
        fontFamily: 'Object Sans',
    },
    '@media (max-width: 1000px)': {
        root: {
            width: '100%',
            height: '40px',
        },
        label: {
            margin: '0 0 6px 2px'
        },
    }
}))

function CustomTextFiled({
    label,
    id,
    name,
    type,
    placeholder,
    maxLength,
    icon,
    onChange,
    autoComplete,
    errors,
    defaultValue,
    touched,
    required,
    endIcon,
    className
}) {
    const classes = useStyles()
    const inputValue = defaultValue || '';
    return (
        <div className={classes.className}>
            <p className={classes.label}>{label}
                {required ? <span className={classes.textFiledRequiredSymbole}>{' *'}</span> : ''}
            </p>
            <Input
                id={id}
                name={name}
                className={
                    errors?.length > 1 && touched
                        ? `${classes.redRoot} ${classes.root} ${className}`
                        : `${classes.root} ${className}`
                }
                disableUnderline
                type={type}
                onChange={onChange}
                autoComplete={autoComplete}
                placeholder={placeholder}
                defaultValue={inputValue}
                inputProps={{ maxLength: maxLength }}
                startAdornment={icon ?
                    <InputAdornment position="start" className={classes.inputIcon} >
                        {icon}
                    </InputAdornment> : ''
                }
                endAdornment={endIcon ?
                    <InputAdornment position="end" className={classes.endInputIcon}>
                        {endIcon}
                    </InputAdornment> : ''
                }
            />

            {errors && touched ? <p className={classes.error}>{errors}</p> : null}
        </div>
    )
}

CustomTextFiled.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.any,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
    placeholder: PropTypes.any,
    icon: PropTypes.node,
    maxLength: PropTypes.number,
    defaultValue: PropTypes.any,
    required: PropTypes.bool
}

export default CustomTextFiled


// 