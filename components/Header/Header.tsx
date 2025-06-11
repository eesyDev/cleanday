import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from '../ui/button';
import { LogInIcon } from 'lucide-react';

const Header = () => {
    return (
        <header className='header py-6'>
            <div className="container">
                <div className="flex justify-between bg-testblue items-center">
                    <div className="header__logo text-3xl font-bold">
                        <Link href="/" className="header__logo-link">
                            CleanDay
                        </Link>
                    </div>
                    <div className="header__menu">
                        <NavigationMenu className='relative' viewport={false}>
                            <NavigationMenuList className='gap-4'>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='uppercase font-bold'>Уборка</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid min-w-[200px] gap-2">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">Поддерживающая уборка</Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">Генеральная уборка</Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">Уборка после ремонта</Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/docs" className='uppercase font-bold'>Химчистка</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='uppercase font-bold'>Чистка</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-2 min-w-[200px]">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">Кондиционеры</Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">Окна</Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/docs" className='uppercase font-bold'>О нас</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            
                        </NavigationMenu>
                    </div>
                    <div className="header__actions flex gap-6">
                        <Button variant="ghost" asChild>
                            <Link href="/auth/login">
                                Войти
                                <LogInIcon className='w-[18px]'/>
                            </Link>
                        </Button>
                        <Button>
                            Заказать уборку
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header