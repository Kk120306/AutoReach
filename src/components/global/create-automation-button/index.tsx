import React from 'react'
import { Button } from '@/components/ui/button'

type CreateAutomationButtonProps = {

}

const CreateAutomationButton = (props: CreateAutomationButtonProps) => {
  return (
    <Button
        // onClick={}
        // disabled
        className="bg-gradient-to-br text-white rounded-lg text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100 lg:px-10 py-6"
    >
        Create Automation
    </Button>
  )
}

export default CreateAutomationButton
