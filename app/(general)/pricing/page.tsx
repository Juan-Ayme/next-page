import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Princing',
    description: 'Product Pricing'
};

export default function PrincingPage(){
    return(
        <>
            <span className='text-7xl'>Pagina Princing</span>
        </>
    )
}