export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block sm:text-base text-sm font-medium text-[#555555] caret-transparent ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
