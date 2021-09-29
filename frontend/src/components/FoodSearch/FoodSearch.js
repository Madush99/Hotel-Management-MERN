import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterFoods } from '../../actions/foodsAction'

 const FoodSearch = () => {

    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState('')

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center shadow-sm p-3 mb-5 bg-white rounded'>
                    <div className='col-md-3'>
                        <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="text" className='form-control' placeholder="Seacrch" />
                    </div>

                    <div className='col-md-3 mt-2'>
                        <button className="btn btn-outline-warning" style={{ marginTop: '-8px', width: '50%' }} onClick={() => (dispatch(filterFoods(searchKey)))}>
                            Search
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FoodSearch