import React from 'react'
import PropTypes from 'prop-types'
import styles from './radio-btn.module.scss'
import Text from '../text'

/**
 * Render Custom CheckBox
 * @param {func} onChange
 * @param {string} labelClass
 * @param {bool} defaultChecked
 * @param {any} reference
 * @param {any} reference
 * @param {string} labelName
 * @param {any} value
 * @param {bool} disabled
 * @param {bool} checked
 * @param {string} variant
 * @param {string} customClass
 * @param {string} className
 * @param {string} id
 * @returns node
 */

const RadioBtn = ({
  onChange,
  labelClass,
  defaultChecked,
  reference,
  name,
  labelName,
  value,
  disabled,
  variant,
  customClass,
  className,
  subClass,
  subLabel,
  id
}) => {
  return (
    <div className={`${styles.checkboxWrapper} ${className}`}>
      <label className={`${styles.checkedSection} ${styles[variant]} ${labelClass}
       ${labelName === undefined ? styles.displayBlock : ""}`}
       for={id}
       >
        <input
          checked={defaultChecked}
          type="radio"
          onChange={onChange}
          reference={reference}
          name={name}
          value={labelName}
          id={id}
          disabled={disabled}
        />
        <Text className={styles.checkmark} />
        <Text className={`${styles.nameWrapper} ${[customClass]}`}>{labelName}</Text>
        <Text className={`${styles.subLabel} ${styles.dBlock} ${[subClass]}`}>{subLabel}</Text>
      </label>
    </div>
  )
}

RadioBtn.defaultProps = {
  labelClass: ''
}

RadioBtn.propTypes = {
  onChange: PropTypes.func,
  labelClass: PropTypes.string,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  reference: PropTypes.any,
  name: PropTypes.string,
  labelName: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  variant: PropTypes.string,
  customClass: PropTypes.string,
  id: PropTypes.string,
  subClass: PropTypes.string,
  subLabel: PropTypes.string,
}

export default RadioBtn
