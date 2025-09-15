import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout authType='forgot'>
            <Head title="Forgot Password" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <h1 className="text-base sm:text-lg mb-6 sm:mb-8 sm:text-left font-normal caret-transparent">Mot de passe oublié?</h1>
                <p className="text-sm sm:text-base font-normal mb-6 sm:mb-8 caret-transparent">Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</p>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Votre e-mail"
                    value={data.email}
                    className="mt-1 block w-full text-base sm:text-lg"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="mt-14 sm:mt-16 flex items-center ">
                    <PrimaryButton type="submit" disabled={processing}>
                        Envoyer
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
