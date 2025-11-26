const SelectDoctorCard = ({
  doctorName,
  availableSlots = [],
  allTimeSlots = [],
  selectedTime = null,
  onTimeSelect = () => {}
}) => {
  const isTimeAvailable = (time) => {
    return availableSlots.includes(time)
  }

  const isTimeSelected = (time) => {
    return selectedTime === time
  }

  return (
    <div className="bg-white max-w-[870px] rounded-2xl pt-6 px-8 pb-8 mb-6">
      <p className="text-2xl font-base text-black mb-4 text-center">{doctorName}</p>
      <div className="flex flex-row gap-4 flex-wrap">
        {allTimeSlots.map((time) => {
          const available = isTimeAvailable(time)
          const selected = isTimeSelected(time)

          return (
            <button
              key={time}
              onClick={() => available && onTimeSelect(time)}
              disabled={!available}
              className={`text-2xl font-base rounded-2xl p-4 min-w-[100px] ${
                selected
                  ? 'bg-[#aa182c] text-white'
                  : available
                    ? 'text-black border border-[#D9D9D9]'
                    : 'text-gray-400 border border-[#D9D9D9]'
              }`}
            >
              {time}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SelectDoctorCard
