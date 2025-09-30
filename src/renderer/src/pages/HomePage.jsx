import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="flex flex-col   h-[90vh] items-center justify-center w-screen">
      <div className="flex-1 items-center justify-center flex flex-col gap-20">
        <div className="flex flex-col gap-10  justify-center ">
          <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
            Eve hayir deneme
          </h1>
          <p style={{ fontWeight: 700 }} className="text-4xl text-center text-white">
            Lütfen yapmak istediğiniz işlemi seçiniz:
          </p>
        </div>

        <div className="flex flex-col w-[540px] gap-12  justify-center">
          <Link
            style={{ fontWeight: 700 }}
            className=" h-[70px] text-[32px] text-gray-700 flex items-center justify-center  border-none active:scale-95  tracking-wide bg-white/95  rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md hover:bg-white hover:shadow-lg"
            to="/verify-id-or-passport"
          >
            Randevu Al
          </Link>

          <Link
            style={{ fontWeight: 700 }}
            className=" h-[70px] text-[32px] text-gray-700 flex items-center justify-center  border-none active:scale-95  tracking-wide bg-white/95  rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md hover:bg-white hover:shadow-lg"
            to="/appointment-accept"
          >
            Randevum Var - Kayıt Aç
          </Link>

          <Link
            style={{ fontWeight: 700 }}
            className=" h-[70px] text-[32px] text-gray-700 flex items-center justify-center  border-none active:scale-95  tracking-wide bg-white/95  rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md hover:bg-white hover:shadow-lg"
            to="/approve-tests"
          >
            Tetkikleri Onayla
          </Link>

          <Link
            style={{ fontWeight: 700 }}
            className=" h-[70px] text-[32px] text-gray-700 flex items-center justify-center  border-none active:scale-95  tracking-wide bg-white/95  rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-md hover:bg-white hover:shadow-lg"
            to="/update-info"
          >
            Bilgi Düzenleme / Güncelleme
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
