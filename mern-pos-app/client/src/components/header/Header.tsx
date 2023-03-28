import React, { useState } from 'react';
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { Input, Badge, Switch } from 'antd';

const Header: React.FC = () => {
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        if (checked) {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')
        }
    };
    return (
        <div className='border-b mb-6 dark:bg-slate-600'>
            <header className='py-4 px-6 flex justify-between items-center gap-10'>
                <div className="logo">
                    <a href="/">
                        <h2 className='text-2xl font-bold md:text-4xl dark:text-white transition-all'>LOGO</h2>
                    </a>
                    <Switch onChange={onChange} className='bg-slate-300' />
                </div>
                <div className="header-search flex-1  flex justify-center">
                    <Input size="large" className='rounded-full' placeholder="large size" prefix={<SearchOutlined />} />
                </div>
                <div className="menu-links flex items-center justify-between gap-7 md:static fixed bottom-0 md:w-auto w-screen dark:bg-slate-600 bg-white md:bg-transparent left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
                    <a href={"/"} className="menu-link flex flex-col dark:text-white hover:text-[#40a9ff] transition-all ">
                        <HomeOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Ana Sayfa</span>
                    </a>
                    <Badge count={5} offset={[0, 6]} className="md:flex hidden">
                        <a
                            href={"/"}
                            className="menu-link flex flex-col dark:text-white hover:text-[#40a9ff] transition-all"
                        >
                            <ShoppingCartOutlined className="md:text-2xl text-xl" />
                            <span className="md:text-xs text-[10px]">Sepet</span>
                        </a>
                    </Badge>
                    <a href={"/"} className="menu-link flex flex-col dark:text-white  hover:text-[#40a9ff] transition-all">
                        <CopyOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Faturalar</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col dark:text-white hover:text-[#40a9ff] transition-all">
                        <UserOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Müşteriler</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col dark:text-white hover:text-[#40a9ff] transition-all">
                        <BarChartOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">İstatistikler</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col dark:text-white hover:text-[#40a9ff] transition-all">
                        <LogoutOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Çıkış</span>
                    </a>
                </div>
                <Badge count={5} offset={[0, 6]} className="md:hidden flex">
                    <a
                        href={"/"}
                        className="menu-link flex flex-col dark:text-white hover:text-[#40a9ff] transition-all"
                    >
                        <ShoppingCartOutlined className="text-2xl" />
                        <span className="md:text-xs text-[10px]">Sepet</span>
                    </a>
                </Badge>
            </header>
        </div>
    )
}

export default Header