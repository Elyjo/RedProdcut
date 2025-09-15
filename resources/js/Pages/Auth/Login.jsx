import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';


export default function Login({ status}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => 
                reset('password'),

        });
    };

    return (
        <GuestLayout authType='login'>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="flex flex-col">
                <h1 className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 sm:text-left font-normal caret-transparent">Connectez-vous en tant que Admin</h1>
                <div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={data.email}
                        className="mt-1 block w-full text-base sm:text-lg"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    
                 
                </div>

                <div className="mt-4 sm:mt-6">

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={data.password}
                        className="mt-1 block w-full text-base sm:text-lg"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                  
                </div>

                <div className="mt-4 sm:mt-6 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-base sm:text-lg caret-transparent">
                            Gardez-moi connecté
                        </span>
                    </label>
                </div>

                <div className="mt-6 sm:mt-8 flex items-center">
                    <PrimaryButton type="submit"  disabled={processing}>
                        Se connecter
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
        
    );
}
