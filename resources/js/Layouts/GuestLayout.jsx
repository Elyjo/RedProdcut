import { Link } from '@inertiajs/react';

export default function GuestLayout({ children, authType = 'login' }) {
    return (
        <div 
            className="flex min-h-screen flex-col items-center bg-cover bg-center pt-6 sm:justify-center sm:pt-0 px-4" 
            style={{ backgroundImage: "url('/redp.jpg')" }}>

            

            <div className="mt-4 sm:mt-6">
                <Link href="/">
                    <div className="flex flex-row items-center gap-2">
                        <img src="/logo.png" className='w-6 h-6 sm:w-8 sm:h-8' alt="logo" />
                        <h1 className="text-gray-200 text-xl sm:text-2xl font-extrabold caret-transparent">RED PRODUCT</h1>
                    </div>

                </Link>
            </div>

            <div className="w-full mt-6 bg-white px-6 py-10 shadow-md sm:max-w-md sm:rounded-[4px]">
                {children}
            </div>

            {authType === 'login' && (
                <>
                    <Link href={route('password.request')} 
                        className="text-base sm:text-lg text-[#FFD964] font-semibold mt-6 sm:mt-8 caret-transparent">Mot de passe oublié?
                    </Link>
                    <p className="text-base sm:text-lg text-gray-300 font-normal mt-4 caret-transparent">Vous n'avez pas de compte?
                        <Link href={route('register')} className="text-base sm:text-lg text-[#FFD964] font-semibold ml-1 caret-transparent">
                            S'inscrire
                        </Link>
                    </p>
                </>
            )}

            {authType === 'register' && (

                 <>
                    <p className="text-base sm:text-lg text-gray-300 font-normal mt-4 caret-transparent">Vous avez déjà un compte?
                        <Link href={route('login')} className="text-base sm:text-lg text-[#FFD964] font-semibold ml-1 caret-transparent">
                            Se connecter
                        </Link>
                    </p>
                </>

            )}

            {authType === 'forgot' && (
                <>
                    <Link href={route('login')} className="flex flex-row items-center justify-center gap-1 mt-4">
                        <p className="text-base sm:text-lg text-gray-300 font-normal caret-transparent">Revenir à la</p>
                        <span className="text-base sm:text-lg text-[#FFD964] font-semibold caret-transparent">connexion</span>
                    </Link>   
                </>
               
            )}
            
        </div>
    );
}
