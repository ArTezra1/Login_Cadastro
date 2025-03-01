import React from 'react'

const Login_Cadastro = () => {
  return (
    <section className='w-screen h-screen flex justify-center items-center'>
        <div className='bg-white/95 rounded-md w-[50vw] h-[70vh] absolute z-0 overflow-hidden'>
            <div className='w-[200px] h-[200px] bg-gradient-to-tr from-purple-500/80 to-red-500/80 absolute -z-1 rounded-full -left-20 bottom-20'>
            </div>
            <div className='w-[175px] h-[175px] bg-gradient-to-bl from-purple-500/80 to-red-500/80 absolute -z-1 rounded-full left-80 top-10'>
            </div>
            <div className='mt-10 h-[25%]'>
                <div className='flex flex-col gap-2 px-10 justify-center'>
                    <h1 className='font-bold text-3xl text-pink-400 text-left'>
                        Login
                    </h1>
                    <p className='text-zinc-700 leading-4'>
                        Insira o seu Email e sua Senha para continuar.
                    </p>
                </div>
            </div>

            <form action="" className='w-full h-full flex flex-col'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='flex flex-col justify-center items-center gap-2 w-full'>
                        <input type="email" name="email" id="email" 
                        placeholder='Email'
                        className='bg-none border-b-2 border-b-purple-950 w-[75%] rounded-xs text-zinc-950 px-2 py-2'
                        />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <label htmlFor="senha" className='text-zinc-700'>Senha</label>

                        <input type="password" name='senha' id='senha'
                        className=''
                        />
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Login_Cadastro