import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

function InfoCard({ data }) {
  const animals = ['Manta ray', 'Green Moray', 'Hammerhead shark']
  const { name, description1, description2, longitude, latitude, imageSrc, rating } = data;
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      {/* cover */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image className=" rounded-2xl" src={imageSrc} fill style={{ objectFit: 'cover', }} alt='beach' />
      </div>
      {/* right */}
      <div className="flex flex-col flex-grow pl-5">

        {/* NAME */}
        <div className="flex justify-between">
          <h4 className="text-xl">{name}</h4>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        {/* <div className="flex border-b pt-2 " /> */}

        {/* LOCATION */}
        <Link href='/' className=" underline">{`${latitude}, ${longitude}`}</Link>

        <p>{description1}</p>

        <div className="flex pt-2 flex-grow items-start">
          {animals.map((item, index) => (
            <span className="p-1 text-sm text-gray-500 m-1 border-2 rounded-xl" key={index}>{item}</span>
          ))}
        </div>

        <div className="flex justify-between items-end">
          <p className="flex items-center">
            {/*  need to add (${loggedDives} reviews) */}
            <StarIcon className="h-5 text-red-400" /> {`${rating}`}
          </p>
          <div>
            <p className="button bg-blue-400">Learn more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard;