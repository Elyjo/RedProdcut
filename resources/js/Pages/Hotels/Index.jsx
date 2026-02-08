import InputLabel from '@/Components/InputLabel';
import { router } from '@inertiajs/react';
import toast from 'react-hot-toast';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from '@headlessui/react';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';



export default function Index() {
    const { hotels } = usePage().props;
    const [showadd, setShowadd] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [hotelsState, setHotels] = useState(hotels);
    const [edit, setEdit] = useState(false);
    const [edited, setEdited] = useState(null);

    const { data: dataHotel, setData: setDataHotel, post, put, processing, reset } = useForm({
        name: '',
        city: '',
        email: '',
        phone: '',
        price: '',
        devise: 'XOF',
        image: null,
    });

    useEffect(() => {
        setHotels(hotels);
    }, [hotels]);



    const submit = (e) => {
        e.preventDefault();
        console.log(dataHotel);

        post(route('hotels.store'), {
            forceFormData: true,
            onSuccess: (page) => {
                const newHotel = page.props.hotels.slice(-1)[0];
                setHotels(prev => [...prev, newHotel]);
                reset();
                setPhoto(null);
                setShowadd(false);
                toast.success('Hôtel créé avec succès !');

            },
        });
    };

    const handleDelete = (hotelId) => {
        router.delete(route('hotels.destroy', hotelId), {
            onSuccess: () => {
                setHotels(prev => prev.filter(hotel => hotel.id !== hotelId));
                toast.success('Hôtel supprimé avec succès !')
            },
        });
    };

    const updateHotel = (e) => {
        e.preventDefault();
        console.log("Modification faite");

        put(route('hotels.update', edited), dataHotel, {
            forceFormData: true,
            onSuccess: (page) => {

                const updatedHotel = page.props.hotels;
                setHotels(prev => prev.map(h => h.id === updatedHotel.id ? updatedHotel : h));
                reset();
                setPhoto(null);
                setShowadd(false);
                setEdit(false);
                setEdited(null);
                toast.success('Hôtel modifié avec succès !');
            },

            onError: () => {
                toast.error("Erreur lors de la modification");
            },
        });
    };

    const handleEditClick = (hotel) => {
        setDataHotel({
            name: hotel.name,
            city: hotel.city,
            email: hotel.email,
            phone: hotel.phone,
            price: hotel.price,
            devise: hotel.devise,
            image: null,
        });
        setPhoto(hotel.image ? `/storage/${hotel.image}` : null);
        setEdit(true);
        setEdited(hotel.id);
        setShowadd(true);
    };



    return (
        <AuthenticatedLayout header="Liste des hôtels" menu='hotels'>
            <Head title="Hôtels" />

            <div className="bg-white sm:py-1.5 sm:mt-8 mt-[80px] fixed top-6 sm:top-[32px] left-0 sm:left-[241px] right-0 z-10">
                <div className="flex flex-row justify-between justify-center items-center caret-transparent ml-2 p-6">
                    <p className="sm:text-[32px] tex-xl font-thin relative right-[8px] sm:right-0 ">Hôtels <span className="text-[#C3C3C3DE]">{hotels.length}</span></p>
                    <Button
                        onClick={() => setShowadd(true)}
                        

                        className="bg-white sm:px-6 sm:py-2 px-2 py-1 rounded-[14px] border border-1 border-[#AEAEAE] mr-5 relative sm:left-[20px] left-[20px]"
                    >
                        <div className="flex flex-row items-center justify-center sm:gap-2 gap-1">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="sm:h-5 sm:w-5 h-3 w-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <line
                                    x1="12"
                                    y1="5"
                                    x2="12"
                                    y2="19"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <line
                                    x1="5"
                                    y1="12"
                                    x2="19"
                                    y2="12"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="sm:text-lg text-xs">Créer un nouveau hôtel </p>
                        </div>
                    </Button>
                </div>
            </div>

            {/* popup */}

            {showadd && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        className="flex flex-col items-start bg-white sm:w-[600px] w-[410px] h-[438px] sm:h-[638px]">
                        <div className="ml-5">

                            <div className="flex flex-row gap-2 sm:mt-14 mt-6 caret-transparent items-center">
                                <Link onClick={() => setShowadd(false)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="sm:h-6 sm:w-6 h-5 w-5 text-[#555555] "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 12H5M12 19l-7-7 7-7"
                                        />
                                    </svg>

                                </Link>

                                <h1 className="sm:text-xl text-base text-[#555555] font-bold ">
                                    {edit ? "Modifier l'hôtel" : "Créer un nouveau hôtel"}
                                </h1>

                            </div>

                            <div>
                                <form onSubmit={edit ? updateHotel : submit}>
                                    {/* 1 */}
                                    <div className="flex flex-row gap-6 sm:mt-4 mt-4">
                                        <div className="flex flex-col gap-2">
                                            <InputLabel>Nom de l'hôtel</InputLabel>
                                            <input
                                                className="rounded-lg sm:w-64 sm:h-10 w-[160px] h-[25px] border-1 border-gray-400 placeholder-black sm:font-bold font-semibold focus:ring-gray-500 focus:border-gray-500 placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
                                                type="text"
                                                placeholder="CAP Marniane"
                                                value={dataHotel.name}
                                                onChange={e => setDataHotel('name', e.target.value)}
                                            />

                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <InputLabel>Adresse</InputLabel>
                                            <input
                                                className="rounded-lg sm:w-64 sm:h-10 w-[160px] h-[30px] border-1 border-gray-400 placeholder-black sm:font-bold font-semibold focus:ring-gray-500 focus:border-gray-500 placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
                                                type="text"
                                                placeholder="Les îles du saloum, Mar Lodj"
                                                value={dataHotel.city}
                                                onChange={e => setDataHotel('city', e.target.value)}
                                            />

                                        </div>
                                    </div>

                                    {/* 2 */}
                                    <div className="flex flex-row gap-6 sm:mt-4 mt-4">
                                        <div className="flex flex-col gap-2">
                                            <InputLabel>E-mail</InputLabel>
                                            <input
                                                className="rounded-lg sm:w-64 sm:h-10 w-[160px] h-[30px] border-1 border-gray-400 placeholder-black sm:font-bold font-semibold focus:ring-gray-500 focus:border-gray-500 placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
                                                type="text"
                                                placeholder="information@gmail.com"
                                                value={dataHotel.email}
                                                onChange={e => setDataHotel('email', e.target.value)}
                                            />

                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <InputLabel>Numéro de téléphone</InputLabel>
                                            <input
                                                className="rounded-lg sm:w-64 sm:h-10 w-[160px] h-[30px] border-1 border-gray-400 placeholder-black sm:font-bold font-semibold focus:ring-gray-500 focus:border-gray-500 placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
                                                type="text"
                                                placeholder="+221 77 777 77 77"
                                                value={dataHotel.phone}
                                                onChange={e => setDataHotel('phone', e.target.value)}


                                            />

                                        </div>
                                    </div>

                                    {/* 3 */}
                                    <div className="flex flex-row gap-6 sm:mt-4 mt-4">
                                        <div className="flex flex-col gap-2">
                                            <InputLabel>Prix par nuit</InputLabel>
                                            <input
                                                className="rounded-lg sm:w-64 sm:h-10 w-[160px] h-[30px] border-1 border-gray-400 placeholder-black sm:font-bold font-semibold focus:ring-gray-500 focus:border-gray-500 placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
                                                type="text"
                                                placeholder="25000"
                                                value={dataHotel.price}
                                                onChange={e => setDataHotel('price', e.target.value)}
                                            />

                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <InputLabel>Devise</InputLabel>
                                            <select
                                                class="bg-white border-1 border-gray-400 sm:text-sm text-xs sm:font-bold font-semibold rounded-lg focus:ring-gray-500 focus:border-gray-500 block sm:w-64 sm:h-10 w-[160px] h-[30px] overflow-y-hidden" 
                                                value={dataHotel.devise}
                                                onChange={e => setDataHotel('devise', e.target.value)}
                                            >
                                                <option value="XOF">XOF</option>
                                                <option value="Euro">Euro</option>
                                                <option value="Dollar">Dollar</option>
                                            </select>

                                        </div>
                                    </div>
                                    {/* photo */}
                                    <div className="mt-4">
                                        <InputLabel>Ajouter une photo</InputLabel>
                                    </div>
                                    <div
                                        className="mt-2 sm:w-[534px] sm:h-[140px] w-[343px] h-[75px] rounded-lg border border-1 border-gray-400 relative overflow-hidden caret-transparent">

                                        <label className="absolute inset-0 cursor-pointer flex flex-col items-center ">

                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={e => {
                                                    const file = e.target.files[0];
                                                    setDataHotel('image', file);
                                                    if (file) {
                                                        setPhoto(URL.createObjectURL(file));
                                                    }
                                                }}
                                            />

                                            {!photo && (
                                                <>
                                                    <div className="flex flex-col gap-1 items-center sm:mt-6 mt-2">
                                                        <img className="sm:w-10 sm:h-10 w-6 h-6" src="/photo.png" alt="phto" />
                                                        <p className="sm:text-sm text-xs text-[#BDBDBD] caret-transparent">Ajouter une photo</p>
                                                    </div>
                                                </>
                                            )}

                                            {photo && (
                                                <>
                                                    <img
                                                        className="w-full h-full"
                                                        src={photo}
                                                        alt="photo"

                                                    />
                                                </>
                                            )}

                                        </label>

                                    </div>

                                    <div className="flex flex-row justify-end sm:mt-3 mt-3 caret-transparent">
                                        <Button
                                            type="submit"
                                            className="sm:w-[150px] sm:h-[40px] w-[100px] h-[30px] bg-[#555555] rounded-lg text-white sm:text-sm text-xs sm:font-bold font-semibold"
                                            disabled={processing}>

                                            {edit ? "Modifier" : "Enregistrer"}

                                        </Button>
                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            )}

            {/* hotels */}
            <div
                className="sm:ml-8 ml-5 grid sm:grid-cols-4 grid-cols-2 caret-transparent cursor-pointer mt-[180px] sm:gap-y-4 gap-y-5">
                {hotels.length > 0 ? (
                    hotelsState.map((hotels) => (
                        <div
                            key={hotels.id}
                            className="group sm:w-[230.57px] sm:h-[280.43px] w-[175px] h-[220px] bg-white rounded-[13.65px] shadow transform transition-transform duration-300 ease-out hover:-translate-y-1"
                        >

                            <img
                                className="rounded-t-[13.65px] sm:h-[160px] sm:w-[232px] h-[110px] w-[175px] " src={hotels.image ? `/storage/${hotels.image}` : "/h1.jpg"} alt={hotels.name}
                            />

                            <div className="flex flex-col ml-2 mt-2">
                                <p
                                    className="sm:text-sm text-xs text-[#8D4B38] font-normal truncate max-w-[230px]">
                                    {hotels.city}
                                </p>
                                <h1 className="sm:text-base text-sm font-bold text-[#222222] mb-2">
                                    {hotels.name}
                                </h1>

                                <div className="flex flex-row justify-between">

                                    {/* prix par nuit */}
                                    <div>

                                        <p className="sm:text-sm text-xs text-[#222222] font-normal ">
                                            {Number(hotels.price).toLocaleString('fr-FR')} <span>{hotels.devise} <span>par nuit</span>
                                            </span>
                                        </p>

                                    </div>

                                    {/* edit - delete  */}
                                    <div
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-row items-center justify-center mr-2 sm:gap-4 gap-2">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="sm:h-6 sm:w-6 h-4 w-4 text-blue-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            onClick={() => handleEditClick(hotels)}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15.232 5.232l3.536 3.536M9 11l6.232-6.232a2 2 0 112.828 2.828L11.828 13.828a2 2 0 01-1.414.586H9v-1.414a2 2 0 01.586-1.414z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 19h14"
                                            />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="sm:h-5 sm:w-5 h-3 w-3 text-red-400 "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            onClick={() => handleDelete(hotels.id)}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 7h12M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2"
                                            />
                                        </svg>


                                    </div>

                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">
                        Aucun hôtel trouvé
                    </p>
                )}

            </div>
        </AuthenticatedLayout>
    );
}
