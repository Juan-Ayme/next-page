'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from './Active.module.css';

interface Props{
    path:string;
    text:string;
}

export const ActiveLink = ({path,text}:Props) =>{

    var pathName= usePathname();
    return(
        <Link
        className={ `${style.link} ${(pathName===path) && style['active-link']} `}
        href={path}>
            {text}</Link>
     )
}