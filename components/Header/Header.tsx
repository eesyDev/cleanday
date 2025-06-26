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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { LogInIcon } from 'lucide-react';
import CustomFormField from '../CustomFormField/CustomFormField';
import SubmitButton from '../SubmitButton/SubmitButton';
import SimpleForm from '../SimpleForm/SimpleForm';

const Header = () => {
    return (
        <header className='header py-6 z-50 relative'>
            <div className="container">
                <div className="flex justify-between bg-testblue items-center">
                    <div className="header__left flex gap-8 items-center">
                        <div className="header__logo text-3xl">
                            <Link href="/" className="header__logo-link font-bold">
                                CleanDay
                            </Link>
                        </div>
                        <div className="header__menu">
                            <NavigationMenu className='relative' viewport={false}>
                                <NavigationMenuList className='gap-4'>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className=''>Уборка</NavigationMenuTrigger>
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
                                            <Link href="/docs" className=''>Химчистка</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className=''>Чистка</NavigationMenuTrigger>
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
                                            <Link href="/docs" className=''>О нас</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>

                            </NavigationMenu>
                        </div>
                    </div>

                    <div className="header__actions flex gap-6 items-center">
                        <Button variant="ghost" asChild className='h-[45px]  font-medium cursor-pointer'>
                            <Link href="/auth/login">
                                Войти
                                <LogInIcon className='w-[18px]' />
                            </Link>
                        </Button>
                        <Dialog>
                            <DialogTrigger asChild >
                                <Button className='h-[45px]  font-medium cursor-pointer'>Заказать уборку</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                                </DialogHeader>
                                <SimpleForm/>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header