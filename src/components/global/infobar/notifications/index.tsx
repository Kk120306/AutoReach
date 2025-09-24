import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"


export const Notifications = () => {
    return (
        <Button className="bg-white rounded-lg py-6">
            <Bell
                className="text-[#3352CC]"
            />
        </Button>
    )
}

