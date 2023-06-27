import { Option, Select } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { storeAllUser } from '../../stores/storeAtoms';

function UserFilter({setTableRows}) {
    const allUsers = useRecoilValue(storeAllUser);
        const [sections, setSections] = useState([]);

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

    useEffect(() => {
        let secs = ["All"]
        allUsers.filter((user) => {
        if(!secs.includes(user.section.nom)){
            secs.push(user.section.nom);
        }
       })

        setSections(secs);
    }, [allUsers])

    
  return (
    <div className="w-72">
      <Select color='orange' className='z-50' label="filtrer les membre par section">
        {sections.map((s) => <Option onClick={handleChange} key={s}>{s}</Option>)}
      </Select>
    </div>
  )
}

export default UserFilter;