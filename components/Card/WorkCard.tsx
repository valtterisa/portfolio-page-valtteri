import React from 'react'
import Link from 'next/link'

interface WorkCardProps {
  title: string
  description: string
  href: string
  image: string
}

function WorkCard({ title, description, href, image }: WorkCardProps) {
  return (
    <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight hover:underline">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-black">{description}</p>
      </div>
    </div>
  )
}

export default WorkCard
