const InsuranceSelectionPage = () => {
  return (
    <div className="flex flex-col   h-[90vh] items-center justify-center w-screen">
      <div className="flex-1 items-center justify-center flex flex-col gap-20">
        <div className="flex flex-col gap-10  justify-center ">
          <h1 style={{ fontWeight: 700 }} className="text-5xl text-center text-white">
            Sayın Ahmet Örnekadam
          </h1>
          <p style={{ fontWeight: 700 }} className="text-4xl text-center text-white">
            Lütfen sosyal güvence türü seçiniz:
          </p>
        </div>
        <div className="flex flex-col w-[540px] gap-12  justify-center">
          <InsuranceButtons text="Bireysel Hasta Olarak Devam Et" to="/id-verification" />
          <InsuranceButtons text="SGK" to="/sgk" />
          <InsuranceButtons text="Özel Sağlık Sigortası" to="/private-insurance" />
        </div>
      </div>
    </div>
  )
}

const InsuranceButtons = ({ to, text }) => {
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

export default InsuranceSelectionPage
