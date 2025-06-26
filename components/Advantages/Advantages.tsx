import { LuBadgeCheck, LuHeart, LuThumbsUp, LuBadgePercent, LuShieldCheck, LuHandCoins, LuUserRoundCheck, LuMessageCircleMore } from "react-icons/lu";


const Advantages = () => {
    return (
        <div className='advantages '>
            <div className="container">
                <div className="d-flex shadow-md bg-white p-8 border rounded-md">
                    <div className="adv-row flex border-b">
                        <div className="item p-6 border-r flex-1">
                            <div className="icon text-[25px]">
                                <LuThumbsUp />
                            </div>
                            <div className="item-title font-bold mt-4">Гарантия качества</div>
                            <p className="item-descr mt-2 text-ring">Клинер исправит недочёты, если вам не понравится результат</p>
                        </div>
                        <div className="item p-6 border-r flex-1">
                            <div className="icon text-[25px]">
                                <LuShieldCheck />
                            </div>
                            <div className="item-title font-bold mt-4">Надёжность</div>
                            <p className="item-descr text-ring mt-2">Компенсация или ремонт, если что-то пойдёт не так</p>
                        </div>
                        <div className="item p-6 border-r flex-1">
                            <div className="icon text-[25px]">
                                <LuUserRoundCheck />
                            </div>
                            <div className="item-title font-bold mt-4">Строгий отбор</div>
                            <p className="item-descr text-ring mt-2">Все клинеры проходят тестирование и профессиональный инструктаж</p>
                        </div>
                        <div className="item p-6 flex-1">
                            <div className="icon text-[25px]">
                                <LuBadgePercent />
                            </div>
                            <div className="item-title font-bold mt-4">Скидки</div>
                            <p className="item-descr text-ring mt-2">Для постоянных клиентов уборки дешевле</p>
                        </div>
                    </div>
                    <div className="adv-row flex">
                        <div className="item p-6 border-r flex-1">
                            <div className="icon text-[25px]">
                                <LuHeart />
                            </div>
                            <div className="item-title font-bold mt-4">Постоянство</div>
                            <p className="item-descr text-ring mt-2">Закрепляем за вами постоянного исполнителя</p>
                        </div>
                        <div className="item p-6 border-r flex-1">
                            <div className="icon text-[25px]">
                                <LuBadgeCheck />
                            </div>
                            <div className="item-title font-bold mt-4">9 лет опыта</div>
                            <p className="item-descr text-ring mt-2">Более 2.5 млн выполненных уборок</p>
                        </div>
                        <div className="item p-6 border-r flex-1">
                            <div className="icon text-[25px]">
                                <LuHandCoins />
                            </div>
                            <div className="item-title font-bold mt-4">Честная цена</div>
                            <p className="item-descr text-ring mt-2">Платите за количество комнат, а не за метры</p>
                        </div>
                        <div className="item p-6 flex-1">
                            <div className="icon text-[25px]">
                                <LuMessageCircleMore />
                            </div>
                            <div className="item-title font-bold mt-4">Постоянная поддержка</div>
                            <p className="item-descr text-ring mt-2">Платите за количество комнат, а не за метры</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages