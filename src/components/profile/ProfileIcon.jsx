import React from 'react'

import {
	UserCircleIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	PowerIcon,
	PresentationChartBarIcon
} from '@heroicons/react/24/outline'
import account from '../../assets/img/account.png'

import {
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar
} from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { storeToken, storeTokenType, storeUser } from '../../stores/storeAtoms'

const profileMenuItems = [
	{
		label: 'My Profile',
		icon: UserCircleIcon,
		to: '/dashboard/profile'
	},
	{
		label: 'Edit Profile',
		icon: Cog6ToothIcon,
		to: '/dashboard/edit-profile'
	},
	{
		label: 'Dashboard',
		icon: PresentationChartBarIcon,
		to: '/dashboard/users'
	},
	{
		label: 'Sign Out',
		icon: PowerIcon
	}
]

function Profile({ user }) {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)
	const closeMenu = () => setIsMenuOpen(false)
	const navigate = useNavigate()
	const setToken = useSetRecoilState(storeToken)
	const setTokenType = useSetRecoilState(storeTokenType)

	const logout = () => {
		closeMenu()

		setToken('')
		setTokenType('')
		localStorage.clear()
		navigate('/login')
	}

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
			<MenuHandler>
				<Button
					variant='text'
					color='blue-gray'
					className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
				>
					<Avatar
						variant='circular'
						size='sm'
						alt='candice wu'
						className='border border-main p-0.5'
						src={
							user.photo
								? user.photo.link
									? user.photo.link
									: account
								: account
						}
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? 'rotate-180' : ''
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className='p-1'>
				{profileMenuItems.map(({ label, icon, to }, index) => {
					const isLastItem = index === profileMenuItems.length - 1
					return (
						<>
							{isLastItem ? (
								<MenuItem
									key={index}
									onClick={logout}
									className={`flex items-center gap-2 rounded ${
										isLastItem
											? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
											: ''
									}`}
								>
									{React.createElement(icon, {
										className: `h-4 w-4 ${
											isLastItem ? 'text-red-500' : ''
										}`,
										strokeWidth: 2
									})}
									<Typography
										as='span'
										variant='small'
										className='font-normal'
										color={isLastItem ? 'red' : 'inherit'}
									>
										{label}
									</Typography>
								</MenuItem>
							) : (
								<Link to={to} className='w-fit'>
									<MenuItem
										key={label}
										onClick={closeMenu}
										className={`flex items-center gap-2 rounded ${
											isLastItem
												? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
												: ''
										}`}
									>
										{React.createElement(icon, {
											className: `h-4 w-4 ${
												isLastItem ? 'text-red-500' : ''
											}`,
											strokeWidth: 2
										})}
										<Typography
											as='span'
											variant='small'
											className='font-normal'
											color={
												isLastItem ? 'red' : 'inherit'
											}
										>
											{label}
										</Typography>
									</MenuItem>
								</Link>
							)}
						</>
					)
				})}
			</MenuList>
		</Menu>
	)
}

export default Profile
