import { UserPlusIcon } from '@heroicons/react/24/solid'
import {
	Card,
	Input,
	Typography,
	Spinner,
	Textarea
} from '@material-tailwind/react'
import {
	ExclamationTriangleIcon,
	CheckCircleIcon
} from '@heroicons/react/24/solid'

import { Fragment, useState } from 'react'
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody
} from '@material-tailwind/react'

import { useRecoilState, useRecoilValue } from 'recoil'
import { storeToken, storeTokenType } from '../../stores/storeAtoms'
import Alert from '../alert/Alert'
import { getData, postData } from '../../config/apiFunctions'
import { storeUserGet } from '../../stores/storeSelector'

export default function CreateCaisse({ setTableRows, allCaisses }) {
	const [montant, setMontant] = useState('')
	const [nom, setNom] = useState('')
	const [description, setDescription] = useState('')
	const [currentUser, setCurrentUser] = useRecoilState(storeUserGet)

	const [showAlertSucess, setShowAlertSucess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [showAlertDanger, setShowAlertDanger] = useState(false)
	const [token, setToken] = useRecoilState(storeToken)
	const [tokenType, setTokenType] = useRecoilState(storeTokenType)

	const handleSubmit = (e) => {
		e.preventDefault()

		setLoading(true)

		let caisses = allCaisses

		caisses = [...caisses, { nom: montant, montant }]

		if (montant) {
			postData('/caisse', token, tokenType, {
				email_createur: currentUser.adresse_mail,
				nom,
				description,
				montant_courant: montant
			})
				.then(() => {
					setLoading(false)

					setTableRows(null)

					getData('/caisse/all', token, tokenType)
						.then((res) => {
							console.log(res)
							setTableRows(res.data.items)
						})
						.catch((e) => {
							console.log(e)
						})

					setMontant('')
					setNom('')
					setDescription('')
					setShowAlertSucess(true)

					setTimeout(() => {
						setShowAlertSucess(false)
					}, 5000)
				})
				.catch((err) => {
					console.log(err)
					setLoading(false)
					setShowAlertDanger(true)

					setTimeout(() => {
						setShowAlertDanger(false)
					}, 5000)
				})
		} else {
			setLoading(false)
			setShowAlertDanger(true)

			setTimeout(() => {
				setShowAlertDanger(false)
			}, 5000)
		}
	}

	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(!open)

	return (
		<Fragment>
			<Button
				onClick={handleOpen}
				color='orange'
				className='flex items-center gap-3'
				size='sm'
			>
				<UserPlusIcon strokeWidth={2} className='h-4 w-4' /> Ajouter une
				Caisse
			</Button>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>
					<div className='flex'>
						<Typography variant='h4' color='blue-gray'>
							Création d'une Caisse
						</Typography>
					</div>
				</DialogHeader>
				<div className='mx-10 mb-2'>
					<Alert
						color='red'
						icon={<ExclamationTriangleIcon className='h-6 w-6' />}
						open={showAlertDanger}
						setOpen={setShowAlertDanger}
					>
						Erreur de creation d'un nouvelle Caisse !
					</Alert>
					<Alert
						color='green'
						icon={<CheckCircleIcon className='mt-px h-6 w-6' />}
						open={showAlertSucess}
						setOpen={setShowAlertSucess}
					>
						Creation d'un nouvelle Caisse réussit !
					</Alert>
				</div>
				<DialogBody
					className='flex items-center justify-center'
					divider
				>
					<Card color='transparent' shadow={false}>
						<Typography color='gray' className='mt-1 font-normal'>
							Entrer les détails pour créer un Caisse
						</Typography>
						<form
							onSubmit={handleSubmit}
							className={`mt-8 mb-2 w-80 max-w-screen-lg`}
						>
							<div className='mb-4 flex  flex-col gap-6'>
								<Input
									onChange={(e) => setNom(e.target.value)}
									value={nom}
									color='orange'
									size='lg'
									label='Nom'
									required
								/>
							</div>
							<div className='mb-4 flex  flex-col gap-6'>
								<Input
									onChange={(e) => setMontant(e.target.value)}
									value={montant}
									type='number'
									color='orange'
									size='lg'
									label='Montant'
									required
								/>
							</div>
							<div className='mb-4 flex  flex-col gap-6'>
								<Textarea
									onChange={(e) =>
										setDescription(e.target.value)
									}
									value={description}
									color='orange'
									size='lg'
									label='Description'
									required
								/>
							</div>
							<Button
								type='submit'
								color='orange'
								className='mt-6 bg-main flex justify-center gap-10'
								fullWidth
							>
								Créer {loading && <Spinner color='amber' />}
							</Button>
						</form>
					</Card>
				</DialogBody>
			</Dialog>
		</Fragment>
	)
}
