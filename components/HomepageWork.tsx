import React from 'react'
import WorkCard from './Card/WorkCard'
import Link from 'next/link'

function HomepageWork() {
  return (
    <section className="p-5 bg-secondary-background flex justify-center text-black sm:p-10">
      <div className="container">
        <div className="mr-0 sm:mr-[30%] w-full">
          <h1 className="text-2xl p-3 font-bold sm:text-3xl">Our work</h1>
          <div className="flex flex-wrap justify-start">
            <WorkCard
              title="Lappeenrannan koneenrakennuskilta"
              description="Making easier website for new students to find information about the guild"
              href="/work/lprk"
              image="/hbo-dummy-pic.avif"
            />
            <WorkCard
              title="Lappeenrannan koneenrakennuskilta"
              description="Making easier website for new students to find information about the guild"
              href="/work/lprk"
              image="/hbo-dummy-pic.avif"
            />
            <WorkCard
              title="Lappeenrannan koneenrakennuskilta"
              description="Making easier website for new students to find information about the guild"
              href="/work/lprk"
              image="/hbo-dummy-pic.avif"
            />
          </div>
          <Link className="p-3 m-auto float-right hover:underline" href={'/'}>
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomepageWork
