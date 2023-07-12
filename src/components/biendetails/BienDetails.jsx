import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter
} from '@material-tailwind/react'

import { Fragment, useState } from 'react'
import Container from '../container/Container'

export default function BienDetail({ bien }) {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(!open)

	return (
		<>
			<Button color='amber' onClick={handleOpen} variant='text'>
				SeeDetails
			</Button>
			<Dialog size='lg' open={open} handler={handleOpen}>
				<DialogHeader>Détails du bien</DialogHeader>
				<DialogBody divider>
					<Card className='flex-row justify-center w-full'>
						<CardHeader
							shadow={false}
							floated={false}
							className='w-2/5 shrink-0 m-0 rounded-r-none'
						>
							<img
								src={bien.photos[0]?.link}
								alt='image'
								className='w-full h-full object-cover'
							/>
						</CardHeader>
						<CardBody>
							<Typography
								variant='h6'
								color='blue'
								className='uppercase mb-4'
							>
								NOM : {bien.nom}
							</Typography>
							<Typography
								variant='h4'
								color='blue-gray'
								className='mb-2'
							>
								valeur Marchande : {bien.valeur_marchande}
							</Typography>
							<Typography
								variant='h4'
								color='blue-gray'
								className='mb-2'
							>
								Section : {bien.section.nom}
							</Typography>
							<Typography
								color='gray'
								className='font-normal mb-8'
							>
								Description : {bien.description}
							</Typography>
							<Typography
								color='gray'
								className='font-normal mb-8'
							>
								Date d'obtention : {bien.date_creation}
							</Typography>
						</CardBody>
					</Card>
				</DialogBody>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={handleOpen}
						className='mr-1'
					>
						<span>Cancel</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	)
}
