import React from 'react'
import { PAGE_ICON } from '@/constants/pages'

type MainBreadCrumbProps = {
    page : string
    slug? : string
}

const MainBreadCrumb = ({page, slug}: MainBreadCrumbProps) => {
  return (
    <div className="flex flex-col items-start">
       {page === "Home" && <div className="flex justify-center w-full">
            <div className="radial--gradient w-4/12 py-5 lg:py-10 flex flex-col items-center text-center">
                <p className="text-text-secondary text-lg">Welcome back</p>
                <h2 className="text-4xl capitalize font-medium">{slug}!</h2>
            </div>
        </div>}
        <span className="radial-gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center">
            {PAGE_ICON[page.toUpperCase()]}
            <h2 className="text-3xl capitalize font-semibold">{page}</h2>
        </span>
    </div>
  )
}

export default MainBreadCrumb
