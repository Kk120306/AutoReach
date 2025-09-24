import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
type SearchProps = {

}

const SearchBar = (props: SearchProps) => {
    return (
        <div className="flex overflow-hidden gap-x-2 border-[1px]
    border-[#3352CC] rounded-lg px-4 py-1 items-center flex-1">
            <Search className="text-[#3352CC]"/>
            <Input
                placeholder="Search by name, email or status"
                className="border-none outline-none ring-0 focus:ring-0 flex-1"   
            />
        </div>
    )
}

export default SearchBar
