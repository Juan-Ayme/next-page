import type { Metadata } from 'next';

export const metadata:Metadata = {
    title: 'About',
    description: 'Online Store'
}

export default function AboutPage(){
    return(
            <span className='text-7xl'>Pagina About</span>
    )
};