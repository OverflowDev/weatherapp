import {useContext} from 'react'
import AlertContext from '../context/alert/AlertContext'

function Alert() {

    const {alert} = useContext(AlertContext)

  return alert !== null && (
    <div className='flex justify-center items-center'>
        <div className='flex space-x-2'>
            {alert.type === 'error' && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>          
            )}
            <p className='flex-1 text-base font-semibold leading-7 text-red-600'>
                <strong>{alert.msg}</strong>
            </p>
        </div>
    </div>
  )
}

export default Alert