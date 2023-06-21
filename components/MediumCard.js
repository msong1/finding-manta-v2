import Image from "next/image"

function MediumCard({img, name}) {
  return (
    <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-60 w-80">
        <Image src={img} fill style={{objectFit: 'cover', objectPosition:'center'}} alt='scenary'
          className=" rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{name}</h3>
    </div>
  )
}

export default MediumCard