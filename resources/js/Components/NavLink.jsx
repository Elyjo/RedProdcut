import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 text-base sm:text-lg text-[#4D5154] font-semibold leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? ' text-[#4D5154] '
                    : 'text-gray-200') +
                className
            }
        >
            {children}
        </Link>
    );
}
