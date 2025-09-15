export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'h-4 w-4 sm:h-5 sm:w-5 rounded-[2.67px] border-2 border-[#9E9E9E] text-blue-600 shadow-sm caret-transparent ' +
                className
            }
        />
    );
}
