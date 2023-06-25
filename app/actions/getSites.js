import prisma from "@/app/libs/prismadb";

async function getSites(props) {
  try {
    const { where, orderBy } = props

    const diveSites = await prisma.diveSite.findMany({
      where: where,
      orderBy: orderBy
    })

    return diveSites
  } catch (err) {
    throw new Error(err)
  }
}

export default getSites