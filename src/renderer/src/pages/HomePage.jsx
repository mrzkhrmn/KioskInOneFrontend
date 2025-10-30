import { Link } from 'react-router-dom'

const HomeButtons = ({ to, text }) => {
  return (
    <Link
      style={{ fontWeight: 700 }}
      className=" h-[70px] text-[32px] text-gray-700 flex items-center justify-center  border-none active:scale-95  tracking-wide bg-white/95  rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md "
      to={to}
    >
      {text}
    </Link>
  )
}

const HomePage = () => {
  return (
    <div className="flex flex-col   h-[90vh] items-center justify-center w-screen">
      <div className="flex-1 items-center justify-center flex flex-col gap-20">
        <div className="flex flex-col gap-10  justify-center ">
          <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
            Hoş Geldiniz
          </h1>
          <p style={{ fontWeight: 700 }} className="text-4xl text-center text-white">
            Lütfen yapmak istediğiniz işlemi seçiniz:
          </p>
        </div>
        <div className="flex flex-col w-[540px] gap-12  justify-center">
          <HomeButtons text="Randevu Al" to="/verify-id-or-passport" />
          <HomeButtons text="Randevum Var - Kayıt Aç" to="/appointment" />
          <HomeButtons text="Tetkikleri Onayla" to="/approve-tests" />
          <HomeButtons text="Bilgi Düzenleme / Güncelleme" to="/update-info" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
