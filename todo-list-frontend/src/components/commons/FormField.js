import React from 'react';
import classNames from 'classnames';

import '../../assets/css/formField.css';

function FormField({ className, label, ...props }) {
    
    return (
        <div
            className={classNames(
            'formField',
            { 'formField--focused': false },
            className
        )}
        >
            <label className="formField-label">
                <span>{label}</span>
                <input
                    className="formField-input"
                    autoComplete="off"
                    {...props}
                ></input>
            </label>
        </div>
    )
};

export default FormField;