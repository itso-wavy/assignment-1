import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useOutletContext } from "react-router-dom"

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useOutletContext()
  const navigate = useNavigate()

  return (
    !isLoggedIn ?
      <LoginForm />
      :
      <div>
        <p>이미 로그인되어 있습니다.</p>
        <button onClick={() => navigate('/researcher')}>관리자 페이지로 이동</button>
      </div>
  )
}

export default Login

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler = (data) => console.log(data)

  return (
    <div>
      <p role="heading">관리자 로그인</p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="ID">ID</label>
          <input type="text" id='ID' placeholder="ID" {...register("id", { required: true })} />
          {errors.id && <p className="text-xs mt-1.5 text-red-500">*id 입력이 필요합니다.</p>}
        </div>
        <div>
          <label htmlFor="PW">PW</label>
          <input type="password" id='PW' placeholder="PW" {...register("pw", { required: true })} />
          {errors.id && <p className="text-xs mt-1.5 text-red-500">*pw 입력이 필요합니다.</p>}
        </div>
        <input type="submit" value="로그인" />
      </form>
    </div>
  )
}