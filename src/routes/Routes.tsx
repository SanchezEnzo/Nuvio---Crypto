import { Bridge } from '@/pages/Bridge'
import { Market } from '@/pages/Market'
import { Pools } from '@/pages/Pools'
import { Stake } from '@/pages/Stake'
import Swap from '@/pages/Swap'
import { Wallet } from '@/pages/Wallet'
import { useRoutes } from 'react-router-dom'

export function Routes(): React.ReactNode | null {
	const routes = useRoutes([
		{
			path: '/',
			element: <Swap />
		},
		{
			path: '/swap',
			element: <Swap />
		},
		{
			path: '/pools',
			element: <Pools />
    },
    {
      path: 'market',
      element: <Market />
    },
		{
			path: '/bridge',
			element: <Bridge />
		},
		{
			path: '/wallet',
			element: <Wallet />
		},
		{
			path: '/stake',
			element: <Stake />
		}
	])
	return routes
}