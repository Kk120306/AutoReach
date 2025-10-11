
import { onIntegrate } from '@/actions/integrations'
import { redirect } from 'next/navigation'

type PageProps = {
    searchParams: {
        code: string
    }
}

const Page = async ({ searchParams: { code } }: PageProps) => {
    if (code) {
        console.log(code);
        const user = await onIntegrate(code.split("#_")[0])
        if (user.status === 200) {
            return redirect(`/dashboard/${user.data?.firstName}${user.data?.lastName}/integrations`)
        }
    }
    return redirect('/sign-up')
}

export default Page
