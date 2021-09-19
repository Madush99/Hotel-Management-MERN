import React, {useEffect,useState} from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getFoodDetails } from '../../actions/foodsAction'





const FoodUpdateScreen = (match) => {
    const foodId =match.params.id

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('') 
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const foodDetailsByid = useSelector((state) => state.foodDetailsByid)
    const { loading, error, foods } = foodDetailsByid

    useEffect(() =>{
        if(!foods.name || foods._id !== foodId){
            dispatch(getFoodDetails(foodId))
        }else{
            setName(foods.name)
            setCategory(foods.category)
            setPrice(foods.price)
            setDescription(foods.description)
            setImage(foods.image)
    
        }
    },[dispatch,foodId,foods])

    const submitHandler = (e) => {
        e.preventDefault()
        //Update foods
    }




} 
export default FoodUpdateScreen
