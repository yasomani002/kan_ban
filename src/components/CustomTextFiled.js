import { makeStyles } from '@mui/styles'
import React from 'react'
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types'
import InputAdornment from '@mui/material/InputAdornment';
import { MenuItem } from '@mui/material';
import Typo from './Typo';


const useStyles = makeStyles((theme) => ({
    mainRoot:{
        margin: '10px 0'
    },
    root: {
        width: '100%',
    },
    textFiledRequiredSymbole: {
        // color: theme.palette.orange
    },
    redRoot: {
        boxShadow: '#fcc7c7 6px 6px 7px',
        border: '1px solid red',
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
        margin: '5px 0',
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
}))

function CustomTextFiled({
    label,
    required,
    id,
    name,
    type,
    placeholder,
    onChange,
    autoComplete,
    defaultValue,
    icon,
    endIcon,
    touched,
    select,
    manuItem,
    errors,
}) {
    const classes = useStyles()
    const inputValue = defaultValue || '';
    return (
        <div className={classes.mainRoot}>
            <Typo variant='lb03' className={classes.label}>{label}
                {required ? <span className={classes.textFiledRequiredSymbole}>{' *'}</span> : ''}
            </Typo>
            <TextField
                required={required}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                autoComplete={autoComplete}
                defaultValue={inputValue}
                className={classes.root}
                margin="dense"
                InputProps={{
                    startAdornment: icon ? (
                        <InputAdornment position="start" className={classes.inputIcon}>
                            {icon}
                        </InputAdornment>
                    ) : null,
                    endAdornment: endIcon ? (
                        <InputAdornment position="end" className={classes.endInputIcon}>
                            {endIcon}
                        </InputAdornment>
                    ) : null
                }}
                select={select}
            >
                {manuItem?.map((item) => {
                    return (
                        <MenuItem key={item.value} value={item.value}>
                            <Typo variant='lb03'>{item.label}</Typo>
                        </MenuItem>
                    )
                })}
            </TextField>


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