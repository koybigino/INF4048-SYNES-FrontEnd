import { Option, Select } from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';
import { storeSections } from '../../stores/storeSelector';

function UserFilter({setTableRows, allUsers}) {
    const sections = useRecoilValue(storeSections);

    const handleChange = (e) => {

        let filterUser = [];
        if(e.target.innerText !== "All"){
            filterUser = allUsers.filter((user) => {
                if(user.section.nom.includes(e.target.innerText)){
                    return user;
                }
            })
        }
        else{
            filterUser = allUsers;
        }

        setTableRows(filterUser)
    }

    
  return (
    <div className="w-72">
      <Select color='orange' className='z-50' label="filtrer les membre par section">
        {sections.map((s) => <Option onClick={handleChange} key={s}>{s}</Option>)}
      </Select>
    </div>
  )
}

export default UserFilter;