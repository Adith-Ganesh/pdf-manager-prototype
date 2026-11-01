import { useState } from  'react'
import { supabase } from '../lib/supabase'

function Auth() {
    
    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    
    return (
        <div>
            <h1>login / signup</h1>

            <input 
            type="email"
            placeholder = "enter email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}> 
            </input>

            <input
            type="password"
            placeholder="enter password"
            value></input>

        </div>
    )

}

export default Auth