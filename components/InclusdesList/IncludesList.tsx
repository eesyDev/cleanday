import Image from "next/image";
import { BiQuestionMark } from "react-icons/bi";

const IncludesList = ({ title, subtitle, itemsList }: IncludesListProps) => {
    console.log(itemsList);
    return (
        <section className='includes-list'>
            <div className="container">
                <h2 className="text-4xl text-center">{title}</h2>
                <p className="text-xl text-center mt-4">{subtitle}</p>
                <div className="includes-list__content flex flex-col gap-16 mt-16">
                    {itemsList && itemsList.map((item, index) => (
                        <div className='includes-list__item flex justify-between gap-6' key={index}>
                            <div className="item-col w-1/3">
                                <div className="item-title text-2xl font-bold">{item.title}</div>
                                <div className="item-image">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        width={300}
                                        height={200}
                                        className="rounded-md mt-4"
                                    />
                                </div>
                            </div>
                            <div className="item-col w-1/3">
                                <div className="item-col-title uppercase font-bold mb-4 text-ring">Входит в стоимость</div>
                                {item.includeList && item.includeList.map((info, i) => (
                                    <div className={`info py-6 border-b w-5/6 flex justify-between ${i === 0 && 'border-t'}`}>
                                        {info.title}
                                        <div className="description-btn text-white bg-border w-[16px] h-[16px] rounded-full flex items-center justify-center text-xs items-center">
                                            <BiQuestionMark/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="item-col w-1/3">
                            <div className="item-col-title uppercase font-bold text-secondary mb-4">Можно добавить</div>
                                {item.includeList && item.mayIncludeList.map((info, i) => (
                                    <div className={`info py-6 border-b w-5/6 flex justify-between ${i === 0 && 'border-t'}`}>
                                        {info.title}
                                        <div className="description-btn text-white bg-border w-[16px] h-[16px] rounded-full flex items-center justify-center text-xs items-center">
                                            <BiQuestionMark/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IncludesList