'use client';
import Image from "next/image";
import { BiQuestionMark } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const IncludesList = ({ title, subtitle, itemsList }: IncludesListProps) => {
    const [activeTooltip, setActiveTooltip] = useState<string>('');
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

    const toggleExpanded = (index: number) => {
        setExpandedItems((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
      };


    const toggleTooltip = (tooltipId: string) => {
        setActiveTooltip(prev => prev === tooltipId ? '' : tooltipId);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!event.target.closest('.tooltip-container')) {
                setActiveTooltip('');
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <section className='includes-list'>
            <div className="container">
                <h2 className="text-4xl text-center">{title}</h2>
                <p className="text-xl text-center mt-4">{subtitle}</p>
                <div className="includes-list__content flex flex-col gap-16 mt-16">
                    {itemsList && itemsList.map((item, index) => {
                        const isExpanded = expandedItems[index];
                        const shouldShowButton =
                          (item.includeList?.length > 6 || item.mayIncludeList?.length > 6);

                          const visibleIncludeList = isExpanded
                            ? item.includeList
                            : item.includeList?.slice(0, 4);

                            const visibleMayIncludeList = isExpanded
                            ? item.mayIncludeList
                            : item.mayIncludeList?.slice(0, 4);

                            const moreOptions = (item.includeList?.length > item.mayIncludeList?.length) ? item.includeList?.length - 4 : item.mayIncludeList?.length - 4;
                        return (
                            <div className='includes-list__item flex justify-between gap-12' key={index}>
                                <div className="item-col flex justify-between flex-col w-1/3">
                                    <div className="">
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
                                    {shouldShowButton && (
                                        <Button
                                            className="mt-4"
                                            onClick={() => toggleExpanded(index)}
                                            variant="outline"
                                        >
                                            {isExpanded ? 'Скрыть' : `Еще ${moreOptions} ${moreOptions > 1 ? 'опций' : 'опция'}`}
                                        </Button>
                                        )}
                                </div>
                                <div className="item-col w-1/3">
                                    <div className="item-col-title uppercase font-bold mb-4 text-ring">Входит в стоимость</div>
                                    {visibleIncludeList.map((info: IncludesItem, i: number) => {
                                        console.log(info.id)
                                        return (<div className={`info py-6 border-b w-5/6 flex justify-between ${i === 0 && 'border-t'}`} key={info.id}>
                                            <div className="content">
                                                <div className="info-title h-[50px]">{info.title}</div>
                                                
                                            </div>
                                            <div className="info-description relative tooltip-container">
                                                <span
                                                    onClick={(e) => toggleTooltip(String(info.id))}
                                                    className="description-btn text-white bg-border w-[16px] h-[16px] rounded-full flex items-center justify-center text-xs">
                                                    <BiQuestionMark />
                                                </span>
                                                <span className={`description-tooltip ${activeTooltip === info.id ? 'visible' : 'hidden'}`}>
                                                    <div className="tooltip-arrow"></div>
                                                    {info.description}
                                                </span>
                                            </div>
                                        </div>)
                                    })}
                                </div>
                                <div className="item-col w-1/3">
                                    <div className="item-col-title uppercase font-bold text-primary mb-4">Можно добавить</div>
                                    {visibleMayIncludeList.map((info: IncludesItem, i: number) => (
                                        <div className={`info py-6 border-b w-5/6 flex justify-between ${i === 0 && 'border-t'}`} key={info.id}>
                                            <div className="content h-[50px]">
                                                <div className="info-title text-primary">{info.title}</div>
                                                <div className="info-price text-ring mt-1">{info.price}</div>
                                            </div>
                                        
                                        <div className="info-description relative tooltip-container">
                                            <span
                                                onClick={(e) => toggleTooltip(String(info.id))}
                                                className="description-btn text-white bg-border w-[16px] h-[16px] rounded-full flex items-center justify-center text-xs">
                                                <BiQuestionMark />
                                            </span>
                                            <span className={`description-tooltip ${activeTooltip === info.id ? 'visible' : 'hidden'}`}>
                                                <div className="tooltip-arrow"></div>
                                                {info.description}
                                            </span>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default IncludesList