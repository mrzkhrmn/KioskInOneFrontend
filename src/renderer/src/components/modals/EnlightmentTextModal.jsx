import React, { useState } from 'react'
import EditIcon from '../../assets/icons/edit.png'

const EnlightmentTextModal = ({ onClose }) => {
  const [isTelChecked, setIsTelChecked] = useState(true)
  const [isSmsChecked, setIsSmsChecked] = useState(true)
  const [isEmailChecked, setIsEmailChecked] = useState(true)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(false)
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-[975px] rounded-2xl shadow-2xl text-black px-10 py-12">
        <h1
          className="text-3xl font-bold text-center  text-gray-800"
          style={{ marginBottom: '20px' }}
        >
          Kişisel Verilerin Korunması, İşlenmesine İlişkin İletişim Aydınlatma Metni
        </h1>
        <p className="text-2xl">
          6698 sayılı Kişisel Verilerin Korunması Kanunu ("<b>Kanun</b>") uyarınca veri sorumlusu
          sıfatıyla hareket eden Vehbi Koç Vakfı Sağlık Kuruluşları olan Moment Eğitim Araştırma
          Sağlık Hizmetleri ve Ticaret Anonim Şirketi ("<b>Amerikan Hastanesi</b>" ve "
          <b>Amerikan Tıp Merkezi</b>"), Halikamas Özel Sağlık Hizmetleri ve Sağlık Malzemeleri
          Sanayi ve Ticaret Anonim Şirketi ("<b>Bodrum Amerikan Hastanesi</b>"). Koç Üniversitesi ("
          <b>Koç Üniversitesi Hastanesi</b>") ile Morrıentum Sağlık Turizm ve Catering Hizmetleri
          Ticaret Anonim Şirketi ("<b>Koç Sağlık Yanımda</b>") tarafından kişisel verileriniz
          aşağıda açıklanan kapsamda işlenebilecektir. Kişisel verilerinizin Kurumlar tarafından
          işlenme amaçları konusunda detaylı bilgilere, Amerikan Hastanesi için{' '}
          <a
            className="underline text-blue-500"
            href="www.amerikanhastanestorg/kisisel-verilerin-korunmasi"
          >
            www.amerikanhastanestorg/kisisel-verilerin-korunmasi
          </a>
          , Koç Üniversitesi Hastanesi için https://www. kuh. ku.edu.tr/kisisel-verilerin-korunmasi,
          Amerikan Tıp Merkezi için https://www.amerikanhastanesi.org/
          medamerikan-tip-merkezi/kisisel-verilerin-korunmasi, Bodrum Amerikan Hastanesi için{' '}
          <a
            href="https://www.amerikanhastanesi.org/bodrum-amerikan-hastanesi/kisisel-verilerin-korunmasi"
            className="text-blue-500 underline"
          >
            https://www.amerikanhastanesi.org/bodrum-amerikan-hastanesi/kisisel-verilerin-korunmasi
          </a>
          , Koç Sağlık Yanımda için https://www.kocsaglikyanimda.com/kisisel-verilerin-korunmasi
          linkinden erişilebilen Kişisel Verilerin Korunması ve işlenmesi Politikasından ("
          <b>Politika</b>") ulaşabilirsiniz.{' '}
        </p>
        <h2 className="text-3xl font-bold text-center mt-16">İletişim İzinleri</h2>

        <div className="flex items-center justify-center flex-col gap-6 mt-10">
          <div className="flex items-center gap-6">
            <ContactCheckbox
              isChecked={isTelChecked}
              text={'Telefon'}
              value={'535 555 55 55'}
              onChange={() => setIsTelChecked(!isTelChecked)}
            />
            <ContactCheckbox
              isChecked={isSmsChecked}
              text={'SMS'}
              value={'535 555 55 55'}
              onChange={() => setIsSmsChecked(!isSmsChecked)}
            />
          </div>
          <ContactCheckbox
            isChecked={isEmailChecked}
            text={'E-mail'}
            value={'ahmet_ornekadam@gmail.com'}
            onChange={() => setIsEmailChecked(!isEmailChecked)}
          />
        </div>

        <div className="flex items-center justify-center mt-10 gap-6">
          <button className="bg-primary text-white font-bold text-3xl w-[270px] py-4 rounded-xl shadow-xl">
            Onayla
          </button>
          <button
            onClick={handleBackdropClick}
            className="bg-[#D9D9D9] text-black border-black/20 shadow-xl border font-bold text-3xl w-[270px] py-4 rounded-xl"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  )
}

const ContactCheckbox = ({ isChecked, text, value, onChange }) => {
  return (
    <div className="flex items-center gap-8 bg-white shadow-xl rounded-2xl py-2 px-4">
      <input
        onChange={onChange}
        checked={isChecked}
        type="checkbox"
        className="w-16 h-16 appearance-none border-2 border-gray-300 rounded-2xl checked:bg-[#AA182C] checked:border-[#AA182C] focus:outline-none focus:ring-0 cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='3 3 10 10' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
          backgroundSize: '70%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <p className="text-2xl font-bold">
        {text}: {value}
      </p>
      <button>
        <img src={EditIcon} alt="editIcon" />
      </button>
    </div>
  )
}

export default EnlightmentTextModal
