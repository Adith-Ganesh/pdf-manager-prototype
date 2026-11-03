import { useState } from  'react'
import { supabase } from '../lib/supabase'

function Auth() {
    
    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')

    async function handleSignup(){
        const { error } = await supabase.auth.signUp({
            email:email,
            password:password,
        })
        if (error) {
            alert(error.message)
        } else {
        alert("Signup successful! Please check your email for confirmation.")
        }
    }

    async function handleLogin(){
        const { error } = await supabase.auth.signInWithPassword    ({
            email:email,
            password:password,
        })
        if (error) {
            alert(error.message)
        } else {
            alert("Login successful!")
        }
    }

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
            </input>

            <button onClick = {handleSignup}> sign up </button>
            <button onClick = {handleLogin}> login </button>

        </div>
    )

}

export default Auth