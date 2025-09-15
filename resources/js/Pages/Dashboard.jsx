import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout menu='dash'
            
        >
            <Head title="Dashboard" />

            <div className="caret-transparent">
                <div>
                    <div className="bg-white sm:py-2 sm:mt-6 mt-[110px]">
                        <div className="p-6 caret-transparent flex flex-col justify-start sm:ml-2 mt-6 ">
                            <p className="sm:text-[32px] text-xl font-thin">Bienvenue sur RED Product</p>
                            <p className="sm:text-base text-xs text-gray-500 font-normal">Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>

                <div className="sm:flex sm:flex-row items-center gap-4 ">
                    {/* 1 */}
                    <div 
                        className="sm:ml-8 ml-5 mt-6 sm:mt-4 sm:w-[450px] sm:h-[106px] w-[300px] h-[60px] bg-white rounded-[14px] flex flex-row items-center">
                        
                        <div 
                            className="sm:ml-8 ml-5 sm:w-[63.99px] sm:h-[63.99px] w-[40px] h-[40px] bg-[#A88ADD] rounded-[666.56px] flex flex-col justify-center items-center">
                            <img className="sm:w-[15px] sm:h-[15px] w-[12px] h-[12px] " src="/mess.png" alt="mess" />
                        </div>
                        <div className="flex flex-col justify-center sm:ml-5 ml-2">
                            <p className="sm:text-3xl text-sm font-thin">125 <span className="sm:text-lg text-xs font-thin">Formulaires</span></p>
                            <p className="sm:text-lg text-xs font-normal text-gray-500">Je ne sais pas quoi mettre</p>
                        </div> 

                    </div>

                    {/* 2 */}
                    <div 
                       className="sm:ml-8 ml-5 mt-6 sm:mt-4 sm:w-[450px] sm:h-[106px] w-[300px] h-[60px] bg-white rounded-[14px] flex flex-row items-center">
                        
                        <div 
                            className="sm:ml-8 ml-5 sm:w-[63.99px] sm:h-[63.99px] w-[40px] h-[40px] bg-[#0CC2AA] rounded-[666.56px] flex flex-col justify-center items-center">
                            <img className="sm:w-[15px] sm:h-[15px] w-[12px] h-[12px] " src="/p.png" alt="p" />
                        </div>
                        <div className="flex flex-col justify-center sm:ml-5 ml-2">
                            <p className="sm:text-3xl text-sm font-thin">40 <span className="sm:text-lg text-xs font-thin">Messages</span></p>
                            <p className="sm:text-lg text-xs font-normal text-gray-500">Je ne sais pas quoi mettre</p>
                        </div>  

                    </div>

                </div>
                

                <div className="sm:flex sm:flex-row items-center gap-4 ">
                    {/* 3 */}
                    <div 
                        className="sm:ml-8 ml-5 mt-6 sm:mt-4 sm:w-[450px] sm:h-[106px] w-[300px] h-[60px] bg-white rounded-[14px] flex flex-row items-center">
                        
                        <div 
                            className="sm:ml-8 ml-5 sm:w-[63.99px] sm:h-[63.99px] w-[40px] h-[40px] bg-[#FCC100] rounded-[666.56px] flex flex-col justify-center items-center">
                            <img className="sm:w-[15px] sm:h-[15px] w-[14px] h-[12px] " src="/u.png" alt="u" />
                        </div>
                        <div className="flex flex-col justify-center sm:ml-5 ml-2">
                            <p className="sm:text-3xl text-sm font-thin">600 <span className="sm:text-lg text-xs font-thin">Utilisateurs</span></p>
                            <p className="sm:text-lg text-xs font-normal text-gray-500">Je ne sais pas quoi mettre</p>
                        </div> 

                    </div>

                    {/* 4 */}
                    <div 
                       className="sm:ml-8 ml-5 mt-6 sm:mt-4 sm:w-[450px] sm:h-[106px] w-[300px] h-[60px] bg-white rounded-[14px] flex flex-row items-center">
                        
                        <div 
                            className="sm:ml-8 ml-5 sm:w-[63.99px] sm:h-[63.99px] w-[40px] h-[40px] bg-[#F90000] rounded-[666.56px] flex flex-col justify-center items-center">
                            <img className="sm:w-[15px] sm:h-[15px] w-[12px] h-[12px] " src="/mess.png" alt="mess" />
                        </div>
                        <div className="flex flex-col justify-center sm:ml-5 ml-2">
                            <p className="sm:text-3xl text-sm font-thin">25 <span className="sm:text-lg text-xs font-thin">E-mails</span></p>
                            <p className="sm:text-lg text-xs font-normal text-gray-500">Je ne sais pas quoi mettre</p>
                        </div>  

                    </div>

                </div>
                

                <div className="sm:flex sm:flex-row items-center gap-4 ">
                    {/* 5 */}
                    <div 
                        className="sm:ml-8 ml-5 mt-6 sm:mt-4 sm:w-[450px] sm:h-[106px] w-[300px] h-[60px] bg-white rounded-[14px] flex flex-row items-center">
                        
                        <div 
                            className="sm:ml-8 ml-5 sm:w-[63.99px] sm:h-[63.99px] w-[40px] h-[40px] bg-[#9C27B0] rounded-[666.56px] flex flex-col justify-center items-center">
                            <img className="sm:w-[15px] sm:h-[15px] w-[12px] h-[12px] " src="/p.png" alt="p" />
                        </div>
                        <div className="flex flex-col justify-center sm:ml-5 ml-2">
                            <p className="sm:text-3xl text-sm font-thin">40 <span className="sm:text-lg text-xs font-thin">Hôtels </span></p>
                            <p className="sm:text-lg text-xs font-normal text-gray-500">Je ne sais pas quoi mettre</p>
                        </div> 

                    </div>

                    {/* 6 */}
                    <div 
                       className="sm:ml-8 ml-5 mt-6 sm:mt-4 sm:w-[450px] sm:h-[106px] w-[300px] h-[60px] bg-white rounded-[14px] flex flex-row items-center">
                        
                        <div 
                            className="sm:ml-8 ml-5 sm:w-[63.99px] sm:h-[63.99px] w-[40px] h-[40px] bg-[#1565C0] rounded-[666.56px] flex flex-col justify-center items-center">
                            <img className="sm:w-[15px] sm:h-[15px] w-[14px] h-[12px] " src="/u.png" alt="u" />
                        </div>
                        <div className="flex flex-col justify-center sm:ml-5 ml-2">
                            <p className="sm:text-3xl text-sm font-thin">02 <span className="sm:text-lg text-xs font-thin">Entités </span></p>
                            <p className="sm:text-lg text-xs font-normal text-gray-500">Je ne sais pas quoi mettre</p>
                        </div>  

                    </div>

                </div>    
                
            </div>
         
        </AuthenticatedLayout>
    );
}
