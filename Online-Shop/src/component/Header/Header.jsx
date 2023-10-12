import shoes from '../../assets/shoes.png';
import shoes1 from '../../assets/shoes1.png';
import shoes2 from '../../assets/shoes2.png';

export function Header() {
    return (<>
            <header>
                <div className={'grid grid-rows-1 grid-flow-col grid-cols-12 mt-12 flex-wrap flex'}>
                    <div className={' sm:col-span-5 col-span-12 text-white '}>
                        <div className={'mt-40 sm:mt-2 text-xl sm:text-8xl pl-32'}>
                            <h1>JUST</h1>
                            <h1>DO</h1>
                            <h1>IT</h1>
                            <div className={'flex w-[300px] sm:w-auto'}><p
                                className={' text-xs  sm:text-xl  mt-3 sm:text-justify sm:w-6/12 '}>Innovated to
                                withstand
                                your toughest matches, this updated design puts flexible, durable materials exactly
                                where they're needed
                                most. </p></div>
                        </div>
                    </div>
                    <div className={' mt-5 ml-3 sm:col-span-7  col-span-12'}>

                        <div
                            className={'bg-white  text-[#185955FF] custom-1 font-bold sm:h-[84px] bg-[#D9D9D9FF] sm:mt-32 bg-[#185955FF] w-6/12 sm:w-[373px]'}>
                            <p className={'pl-8 pt-3'}>NikeCourt Zoom</p>
                            <p className={'pl-8'}>Vapor Cage 4 Rafa</p>
                        </div>
                        <div className={'-mt-52 '}>
                            <img src={shoes}
                                 className={' sm:w-[520px] sm:h-[600px]   shrink-0 sm:mt-[-294px] sm:ml-[-10px] custom-2  '}
                                 alt=""/>
                        </div>


                    </div>
                </div>
            </header>
            <div className={'grid grid-cols-12 flex '}>
                <div className={'sm:col-span-5 col-span-12'}>
                    <div className={'pl-20 mt-10'}>
                        <button
                            className={'p-3 sm:p-2  ml-28 sm:w-4/12 sm:h-10 shrink-0 sm:text-[20px] text-[14px] custom-3 mb-32'}>Shop
                            Now
                        </button>
                    </div>
                </div>
                <div className={'sm:col-span-7 col-span-12 '}>
                    <div className={'flex  gap-5 mb-4 -mt-20'}>
                        <div className={''}>
                            <img src={shoes1}
                                 className={'hover:w-[174px] hover:h-[200px] custom-5 sm:w-[152px] sm:h-[152px] bg-[#FAFF23FC] shadow-inner opacity-80  shadow-2xl'}
                                 alt=""/>
                            <p className={'text-white text-center mt-2'}>rafa-hard-court</p>
                        </div>
                        <div className={''}>
                            <img src={shoes2}
                                 className={'hover:w-[174px] hover:h-[200px] sm:w-[152px] sm:h-[152px] custom-5 bg-[#FAFF23FC] opacity-80 shadow-inner shadow-2xl'}
                                 alt=""/>
                            <p className={'text-white text-center mt-2'}>pro-hard-court</p></div>
                        <div className={''}>
                            <img src={shoes1}
                                 className={'hover:w-[174px] hover:h-[200px] sm:w-[152px] sm:h-[152px] custom-5 bg-[#FAFF23FC] opacity-80 shadow-inner shadow-2xl'}
                                 alt=""/>
                            <p className={'text-white text-center  mt-2'}>Vapor Cage 4 Rafa</p></div>

                    </div>
                </div>

            </div>
            <div className={'grid grid-cols-12 '}>
                <div className={'col-span-12 text-center mb-8'}><p className={'text-black'}>Created By Mahdi Kargar</p></div>
            </div>

        </>


    )
}
