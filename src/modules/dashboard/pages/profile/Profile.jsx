import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
	Avatar
} from '@material-tailwind/react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import Container from '../../../../components/container/Container'
import { useRecoilValue } from 'recoil'
import { storeUserGet } from '../../../../stores/storeSelector'
import account from '../../../../assets/img/account.png'

export default function Profile() {
	const user = useRecoilValue(storeUserGet)
	return (
		<Container>
			<Card className='flex-row justify-center w-full'>
				<CardHeader
					shadow={false}
					floated={false}
					className='w-2/5 shrink-0 m-0 rounded-r-none'
				>
					<img
						src={
							user.photo
								? user.photo.link
									? user.photo.link
									: account
								: account
						}
						alt='image'
						className='w-full h-full object-cover'
					/>
				</CardHeader>
				<CardBody>
					<Typography variant='h6' color='blue' className='mb-4'>
						Nom : {user.nom} <br />
						Email : {user.adresse_mail} <br />
						Matricule : {user.matricule}
					</Typography>
					<Typography variant='h4' color='blue-gray' className='mb-2'>
						Section : {user.section.nom} <br />
						Spécialité : {user.specialite} <br />
						Tel : {user.phone_number} <br />
						Nationalité : {user.phone_number} <br />
						Sexe : {user.sexe} <br />
					</Typography>
					<Typography color='gray' className='font-normal mb-8'>
						Like so many organizations these days, Autodesk is a
						company in transition. It was until recently a
						traditional boxed software company selling licenses. Yet
						its own business model disruption is only part of the
						story
					</Typography>
				</CardBody>
			</Card>
		</Container>
	)
}
