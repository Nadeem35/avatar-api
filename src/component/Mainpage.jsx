import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Mainpage.css"

function Mainpage() {
    const [userList, setuserList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
                .then(res => setuserList(res.data))
        }, 1000) // take 1 second to laod API data
    }, [])

    return (
        <div>
            <div className="app">
                {
                    userList.map((user, index) => (
                        <div className="card">
                            <img key={index} src={"https://avatar.iran.liara.run/public/boy?username=Scott" + user.first} alt="user" />
                            {/* <img className='rota' key={index} src={"https://avatar.iran.liara.run/public/girl?username=[value]" + user.first} alt="user" /> */}

                            <div className="details">
                            <p><b>Name: </b><span className='name'> &nbsp; {user.first} {user.last}</span></p>
                            <p><b>Email: </b> <span className='email'> &nbsp; {user.email}</span> </p>
                            <p><b>Add: </b><span className=''>&nbsp; {user.address}</span> </p>
                            <p><b>Balance: </b> <span className='bal'> &nbsp; {user.balance}</span></p>
                            {/* <p><b>Created: </b> <span className='dat'> &nbsp; {user.created}</span></p> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Mainpage