

import '../components/MyLabel.css'
import { ALLCaps, Secondary, CustomColors } from '../stories/MyLabel.stories';

interface Props {
  /**
   *  Text to display
   */
  label: string,
  /**
   *  Level size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3' ,
  /**
   *  UpperCase
   */
  allCaps?: true,
  /**
   *  Color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary", 
  /**
   * Background Color
   */
  fontColor?:  string,

}

// allcaps: boolean, color: css, fontColor: string

export const MyLabel = ({ label, size, color, fontColor, allCaps }: Props) => {
  return (
    <span className={`${size} ${color}`} style={{ color: fontColor}} >{ allCaps ? label.toUpperCase() : label }</span>
  )
}
