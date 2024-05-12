import '../components/MyLabel.css';
export interface Props {
    /**
     *  Text to display
     */
    label: string;
    /**
     *  Level size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  UpperCase
     */
    allCaps?: true;
    /**
     *  Color
     */
    color?: "text-primary" | "text-secondary" | "text-tertiary";
    /**
     * Background Color
     */
    fontColor?: string;
    /**
     *  Background Color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, fontColor, allCaps, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
