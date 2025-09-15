export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `bg-[#45484B] text-white text-lg sm:text-xl  w-full py-2 sm:py-3 rounded-[5.33px] caret-transparent ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
