import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterRestaurants } from '../../actions/restaurantsActions'


export default function Search(){

    const dispatch = useDispatch()
    const[searchKey, setSearchKey] = useState('')
    const[type, setType] = useState('all')

    return(
        <div className='container'>
            <div className='row justify-content-center shadow-sm p-3 mb-5 bg-white rounded'>
                <div className='col-md-3'>
                    <input value={searchKey} onChange={(e)=> setSearchKey(e.target.value)} type = "text" className='form-control' placeholder="Seacrch" />
                </div>

                <div className='col-md-3' value={type} onChange={(e)=>setType(e.target.value)} >
                    <select className="form-control">
                        <option value="all">All</option>
                        <option value="bar">Bar</option>
                        <option value="restaurant">Restaurant</option>
                    </select>
                </div>

                <div className='col-md-3 mt-2'>
                    <button className="btn btn-outline-warning" style={{marginTop:'-8px',width:'50%'}} onClick={()=>(dispatch(filterRestaurants(searchKey, type)))}>
                        Filter
                    </button>
                </div>

            </div>
        </div>
    )
}