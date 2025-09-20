interface LogoSmallProps {
    className?: string
    size?: number
}

export default function LogoSmall({ className = "", size = 32 }: LogoSmallProps) {
    return (
        <div className={`inline-flex items-center ${className}`}>
            <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
                AutoReach
            </span>
        </div>
    )
}
