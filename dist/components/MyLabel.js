import { jsx as _jsx } from "react/jsx-runtime";
import '../components/MyLabel.css';
// allcaps: boolean, color: css, fontColor: string
export const MyLabel = ({ label, size, color, fontColor, allCaps, backgroundColor = 'transparent' }) => {
    return (_jsx("span", { className: `${size} ${color}`, style: { color: fontColor, backgroundColor }, children: allCaps ? label.toUpperCase() : label }));
};
