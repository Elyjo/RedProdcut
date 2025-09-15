import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout authType='register'>
            <Head title="Register" />

            <form onSubmit={submit}>
                <h1 className="text-base sm:text-lg sm:text-left md:text-xl mb-2 sm:mb-4 font-normal caret-transparent">Inscrivez-vous en tant que Admin</h1>
                <div>

                    <TextInput
                        id="name"
                        name="name"
                        placeholder="Nom"
                        value={data.name}
                        className="mt-1 block w-full text-base sm:text-lg"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4 sm:mt-6">
                    

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={data.email}
                        className="mt-1 block w-full text-base sm:text-lg"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 sm:mt-6">
                   
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={data.password}
                        className="mt-1 block w-full text-base sm:text-lg"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                
                <div className="mt-4 sm:mt-6 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="agree"
                            checked={data.agree}
                            onChange={(e) => 
                                setData('agree', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-base sm:text-lg caret-transparent">
                            Accepter les termes et la politique
                        </span>
                    </label>
                </div>
               

                <div className="mt-6 sm:mt-8 flex items-center">
                    <PrimaryButton disabled={processing}>
                        S'inscrire
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
