import AuthButton from '@/components/AuthButton';
import Form from '@/components/Form';
import InputForm from '@/components/InputForm';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
//import { useNavigate } from 'react-router-dom';

export default function Login() {
  //const navigate = useNavigate();

  return (
    <main className="min-h-screen w-screen bg-black overflow-hidden
    flex flex-col items-center justify-center">
      <TypeAnimation
      sequence={[
        'Bem-vindo de volta!',
        1000,
        'Que bom te ver!',
        1000,
      ]}
      repeat={Infinity}
      cursor={true}
      wrapper='h1'
      className='font-black text-white text-4xl md:text-5xl
      -rotate-2'
      />
      <div className='mt-4 flex items-center justify-center'>
        <Form>
          <InputForm
          placeholder='seu@email.com'
          type='email'
          label='Email'
          />
          <InputForm
          placeholder='********'
          type='password'
          label='Senha'
          />
          <AuthButton>
            <p
            className='text-white font-black text-xl '
            >
              FAZER LOGIN!
            </p>
          </AuthButton>
          <p
            className="txt-zinc-900 font-medium flex gap-1 text-center
            items-center justify-center"
          >
            Ainda não tem conta?
            <Link to="/register" className="text-zinc-950 font-bold text-lg">
              Criar conta!
            </Link>
          </p>
        </Form>
      </div>
    </main>
  );
}
