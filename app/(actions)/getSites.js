import prisma from "@/app/(libs)/prismadb";

async function getSites(props) {
  try {
    const { where, orderBy } = props
    console.log(props,111)

    const diveSites = await prisma.diveSite.findMany({
      where: where,
      orderBy: orderBy,
      take: 10,
      skip: 0,
    })

    return diveSites
  } catch (err) {
    throw new Error(err)
  }
}

export default getSites