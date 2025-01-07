import { useNavigate, useRouteError } from "react-router-dom"
import  ErrorImage  from "../../assets/errorImg.jpg"



const ErrorPage = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    const error = useRouteError()
    console.log(error)
    if(error.status==404){
        return (
            <div className="flex items-center justify-center flex-col h-lvh">
                <img src={ErrorImage} alt="" className="max-w-96"/>
                <p>{`${error.statusText} - ${error.error.message}`}</p>
                {/* <NavLink to='/' className='bg-red-800 text-white font-bold py-2 px-8 rounded-md duration-300 hover:bg-gray-800 mt-5'>Back to Home Page</NavLink> */}

                <button className="bg-red-800 text-white font-bold py-2 px-8 rounded-md duration-300 hover:bg-gray-800 mt-5" onClick={handleGoBack}>Back to Previous Page</button>
            </div>
        )
    }
    return(
        <div className="flex items-center justify-center flex-col h-lvh">
            <p className="text-4xl font-bold text-gray-800">The page you were looking for could not exist.</p>
            {/* <NavLink to='/' className='bg-red-800 text-white font-bold py-2 px-8 rounded-md duration-300 hover:bg-gray-800 mt-5'>Back to Home Page</NavLink> */}
        </div>
    )
}

export default ErrorPage