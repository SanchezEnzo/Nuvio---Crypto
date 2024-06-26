import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/home/Navbar'
import { ConectWallet } from '@/components/home/ConectWallet'
import { Wallet } from './Wallet'

export function Home(): React.ReactNode {
	return (
		<div className='flex w-full items-center h-screen'>
			<aside className='fixed h-full flex w-[116px]'>
				<Navbar />
			</aside>
			<div className='fixed top-8 right-5'>
				<ConectWallet />
			</div>
			<section className='flex justify-center w-full'>
				<Outlet />
			</section>
			<Wallet />
		</div>
	)
}
