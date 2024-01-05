import type { Metadata } from 'next';

export const metadata:Metadata ={
    title: 'Contact',
    description: 'Contact Developer'
}

export default function ContactPage(){
    return(
        <>
            <span className='text-lg'>Pagina Contact</span>
        </>
    )
}