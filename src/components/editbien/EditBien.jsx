import {
	Alert,
	Avatar,
	Card,
	IconButton,
	Input,
	Spinner,
	Typography
} from '@material-tailwind/react'

import { Fragment, useRef, useState } from 'react'
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody
} from '@material-tailwind/react'
import { PencilIcon } from '@heroicons/react/24/outline'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
	ExclamationTriangleIcon,
	CheckCircleIcon
} from '@heroicons/react/24/solid'
import { storeToken, storeTokenType } from '../../stores/storeAtoms'
import { getData, putData } from '../../config/apiFunctions'
import {
	storeGetAllSection,
	storeGetAllSectionName
} from '../../stores/storeSelector'
import Select from '../select/Select'
import account from '../../assets/img/account.png'

export default function EditBien({ bien, allbien, setbien }) {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(!open)

	const [nom, setNom] = useState(bien.nom)
	const [description, setDesciption] = useState(bien.description)
	const [valeur_marchande, setValeur] = useState(bien.valeur_marchande)
	const [photos, setPhoto] = useState(new FormData())
	const [sect, setSection] = useState(bien.section ? bien.section.nom : '')
	const [showAlertSucess, setShowAlertSucess] = useState(false)
	const [showAlertDanger, setShowAlertDanger] = useState(false)
	const [loading, setLoading] = useState(false)
	const sectionNames = useRecoilValue(storeGetAllSectionName)
	const [token, setToken] = useRecoilState(storeToken)
	const [tokenType, setTokenType] = useRecoilState(storeTokenType)
	const imageref = useRef()
	const [imagePath, setImagePath] = useState(
		bien.photos.length > 0 ? bien.photos : [{ link: account }]
	)
	const sections = useRecoilValue(storeGetAllSection)

	const handleClick = () => {
		imageref.current.click()
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		let section = {}

		for (let i = 0; i < sections.items.length; i++) {
			const element = sections.items[i]

			if (element.nom === sect) {
				section = element
				break
			}
		}

		setLoading(true)

		section = { id: section.id, nom: section.nom }

		putData('/bien/' + bien.id, token, tokenType, {
			nom,
			description,
			valeur_marchande,
			section
		})
			.then((res) => {
				console.log(res)

				setbien(null)
				console.log(bien.id, photos)

				putData('/bien/photos/' + bien.id, token, tokenType, photos)
					.then((res) => {
						console.log(res)
						getData('/bien/all', token, tokenType).then((res) => {
							console.log(res.data)
							setLoading(false)
							setbien(res.data.items)

							setShowAlertSucess(true)

							setTimeout(() => {
								setShowAlertSucess(false)
							}, 5000)
						})
					})
					.catch((err) => {
						console.log(err)
						setLoading(false)

						setShowAlertDanger(true)

						setTimeout(() => {
							setShowAlertDanger(false)
						}, 5000)
					})
			})
			.catch((err) => {
				console.log(err)
				setLoading(false)

				setShowAlertDanger(true)

				setTimeout(() => {
					setShowAlertDanger(false)
				}, 5000)
			})
	}

	const changeImage = (e) => {
		const files = e.target.files
		const imgs = []
		const formdata = new FormData()

		if (files) {
			for (let index = 0; index < files.length; index++) {
				const file = files[index]

				const path = URL.createObjectURL(file)

				imgs.push({ link: path })

				formdata.append('photos', file, file.name)

				//imgsBinary.push(fileBinary);
			}
			setPhoto(formdata)

			setImagePath(imgs)
		}
	}

	return (
		<Fragment>
			<IconButton onClick={handleOpen} variant='text' color='blue-gray'>
				<PencilIcon className='h-4 w-4' />
			</IconButton>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>
					<Typography variant='h4' color='blue-gray'>
						Modifier la bien {bien.nom}
					</Typography>
				</DialogHeader>
				<div className='mx-10 mb-2'>
					<Alert
						color='red'
						icon={<ExclamationTriangleIcon className='h-6 w-6' />}
						open={showAlertDanger}
						setOpen={setShowAlertDanger}
					>
						Erreur lors de la modification des informations de la
						bien !
					</Alert>
					<Alert
						color='green'
						icon={<CheckCircleIcon className='mt-px h-6 w-6' />}
						open={showAlertSucess}
						setOpen={setShowAlertSucess}
					>
						Modification des informations de la bien réussit !
					</Alert>
				</div>
				<DialogBody
					className='flex items-center justify-center'
					divider
				>
					<Card color='transparent' shadow={false}>
						<Typography color='gray' className='mt-1 font-normal'>
							Entrer les détails pour modifier une bien
						</Typography>
						<form
							onSubmit={handleSubmit}
							className='mt-8 mb-2 max-w-screen-lg w-96'
						>
							<div className='mb-4 flex  flex-col gap-6'>
								<Input
									onChange={(e) => setNom(e.target.value)}
									value={nom}
									color='orange'
									size='lg'
									label='Nom du Bien'
									required
								/>
								<Input
									onChange={(e) =>
										setDesciption(e.target.value)
									}
									value={description}
									color='orange'
									size='lg'
									label='Description'
									required
								/>
								<Input
									onChange={(e) => setValeur(e.target.value)}
									value={valeur_marchande}
									color='orange'
									size='lg'
									type='number'
									label='Valeur marchante'
									required
								/>
								<Select
									value={sect}
									options={sectionNames}
									onSelectChange={setSection}
								/>
								<div className='flex justify-center'>
									{imagePath.map((src) => (
										<Avatar
											onClick={handleClick}
											src={src.link}
											alt='avatar'
											size='lg'
										/>
									))}
								</div>
								<input
									hidden
									onChange={changeImage}
									ref={imageref}
									type='file'
									name=''
									id=''
									multiple
								/>
							</div>
							<Button
								type='submit'
								color='orange'
								className='mt-6 bg-main flex items-center gap-10 justify-center'
								fullWidth
							>
								Editer {loading && <Spinner color='amber' />}
							</Button>
						</form>
					</Card>
				</DialogBody>
			</Dialog>
		</Fragment>
	)
}
