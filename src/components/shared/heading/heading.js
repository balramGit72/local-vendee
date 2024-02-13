import React from 'react'
import PropTypes from 'prop-types'
import { HEADINGTYPES } from './constant'
import Styles from './heading.module.scss'
/**
 * Render Heading
 * @param {string} headingType
 * @param {string} headingText
 * @param {string} color
 * @param {string} lineThrough
 * @param {string} fontWeight
 * @param {string} className

 */

const renderHeading = ({
  headingType,
  headingText,
  className,
  color, 
  lineThrough, 
  fontWeight,
  onClick
}) => {
  const fontColor = color ? Styles[color] : ''
  const strikeThrough = lineThrough ? Styles[lineThrough] : ''
  const textVariant = fontWeight ? Styles[fontWeight] : ''
  switch (headingType) {
    case 'h1': {
      return <h1  onClick={onClick} className={`${Styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough} `}>{headingText}</h1>
    }
    case 'h2': {
      return <h2  onClick={onClick}  className={`${Styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{headingText}</h2>
    }
    case 'h3': {
      return <h3  onClick={onClick}  className={`${Styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{headingText}</h3>
    }
    case 'h4': {
      return <h4 onClick={onClick} className={`${Styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{headingText}</h4>
    }
    case 'h5': {
      return <h5 onClick={onClick}  className={`${Styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{headingText}</h5>
    }
    case 'h6': {
      return <h6 onClick={onClick}  className={`${Styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{headingText}</h6>
    }
    default: {
      return <h5 onClick={onClick}  className={`${Styles[headingType]} ${[className]} ${fontColor} ${textVariant} ${strikeThrough}`}>{headingText}</h5>
    }
  }
}

const Heading = (props) => {
  return (
    renderHeading(props)
  )
}

Heading.defaultProps = {
  type: HEADINGTYPES.TEXT
}

Heading.propTypes = {
  headingType: PropTypes.string,
  headingText: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.string,
  lineThrough: PropTypes.string,
  fontWeight: PropTypes.string,
  onClick:PropTypes.func
}

export default Heading
