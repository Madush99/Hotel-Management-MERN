import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterRestaurants } from '../../actions/restaurantsActions'

export default function Search(){

    const dispatch = useDispatch()
    const[searchKey, setSearchKey] = useState('')

    return(
        <div className='container'>
            <div className='row justify-content-center '>
                <div className='col-md-3'>
                    <input value={searchKey} onChange={(e)=> setSearchKey(e.target.value)} type = "text" className='form-control' placeholder="seacrch pizza" />
                </div>

                <div className='col-md-3 mt-2'>
                    <button className="" onClick={()=>(dispatch(filterRestaurants(searchKey)))}>
                        Filter
                    </button>
                </div>

            </div>
        </div>
    )
}