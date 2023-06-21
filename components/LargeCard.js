import Image from "next/image"

function LargeCard({img, title, description, buttonText}) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} fill style={{objectFit: 'cover', objectPosition: 'center'}}
        className="rounded-2xl"
        alt="underwater diving" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
        <p className="text-white">{description}</p>

        <button className="text-sm bg-yellow-100 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
  )
}

export default LargeCard