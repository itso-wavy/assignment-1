import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Researcher = () => {
  let researchers = [
    {
      "pin": "1234ASDF",
      "organization": "서울대학교병원",
      "password": "0000",
      "phoneNumber": "010-0000-0000",
      "name": "김댕댕"
    }
  ]

  return (
    <>
      <ResearcherRegistrationForm />
      <ResearchersTable researchers={researchers} />
    </>
  );
};

export default Researcher;

const ResearcherRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler = (data) => console.log(data)

  return (
    <div>
      <p role="heading">Researcher 등록​</p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">이름</label>
          <input type="text" id='name' placeholder="이름" {...register("name", { required: true })} />
          {errors.name && <p className="text-xs mt-1.5 text-red-500">*이름 입력이 필요합니다.</p>}
        </div>
        <div>
          <label htmlFor="phone">전화번호</label>
          <input type="text" id='phone' placeholder="전화번호" {...register("phone", { required: true })} />
          {errors.phone && <p className="text-xs mt-1.5 text-red-500">*전화번호 입력이 필요합니다.</p>}
        </div>
        <div>
          <label htmlFor="PW">소속기관</label>
          <input type="text" id='organization' placeholder="소속기관" {...register("organization", { required: true })} />
          {errors.organization && <p className="text-xs mt-1.5 text-red-500">*기관 입력이 필요합니다.</p>}
        </div>
        <input type="submit" value="등록" />
      </form>
    </div>
  );
}

const ResearchersTable = ({ researchers }) => {
  const [selected, setSelected] = useState()

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Organization</th>
            <th>PIN</th>
            <th>init</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {researchers.map((researcher, index) =>
          (
            <tr key={researcher.id}>
              <td>{index}</td>
              <td>{researcher.name}</td>
              <td>{researcher.organization}</td>
              <td>{researcher.pin}</td>
              <td><button>초기화</button></td>
              <td><button>삭제</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}