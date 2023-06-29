'use client'

import { useRouter } from "next/navigation"

function EmptyState({
  title = 'No exact matches',
  subtitle = 'Try searching different places or animals',
  showReset }) {

    const router = useRouter();
  return (
    <div className="h-[60vh]">EmptyState</div>
  )
}

export default EmptyState