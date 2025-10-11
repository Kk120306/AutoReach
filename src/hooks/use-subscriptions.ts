import { useState } from 'react'
import axios from 'axios'

export const useSubscription = () => { 
    const [isProcessing, setIsProcessing] = useState(false)

    const onSubscribe = async () => {
        try {
            setIsProcessing(true)
            const response = await axios.get('/api/payment')
            if (response.data.status === 200) {
                window.location.href = response.data.session_url
                return
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsProcessing(false)
        }
    }

    return { onSubscribe, isProcessing }
}
