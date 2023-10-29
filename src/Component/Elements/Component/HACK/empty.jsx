import { Formik } from 'formik'
import React, {useContext} from 'react'
import { Context } from '../../../Context/Context'
import * as yup from 'yup'

const Empty = () => {
    const {setCom, setName} = useContext(Context)
    const schema = yup.object({
        name:yup.string().max(12).min(2).required(),
        comment: yup.string().max(100).min(2).required(),
    })
  return (
    <div>
        <div>
<Formik 
initialValues={{name:"", comment:""}}
validationSchema={schema}
onSubmit={(e,{resetForm})=>{
        setCom(e.comment)
        setName(e.name)
        resetForm()
}}>
    {
        (props)=>{
           return(
            <div>
            <div className=' flex flex-col items-center w-full md:w-[500px] font-Anton '>
                <div className=' md:text-2xl mb-5'>Drop a comment</div>
                <input type='text' className=' border-2 border-black border-solid w-full h-14 rounded-lg pl-2' placeholder='NAME' value={props.values.name} onChange={props.handleChange('name')}/>
                <div  className=' mb-5 text-purple'>{props.touched.name && props.errors.name}</div>
                <textarea className=' border-2 border-black border-solid w-full h-60 p-2 rounded-lg ' placeholder='COMMENT' value={props.values.comment} onChange={props.handleChange('comment')}/>
                <div className='mb-5 text-purple '>{props.touched.comment && props.errors.comment}</div>
                <input type='submit' value="Send" className=' mb-5 bg-yellow font-Anton px-8 rounded-lg shadow-sm cursor-pointer hover:shadow-none shadow-black py-2' onClick={props.handleSubmit}/>
            </div>
            </div>
           )
        }
    }
</Formik>
        </div>
    </div>
  )
}

export default Empty