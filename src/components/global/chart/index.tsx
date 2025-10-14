'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts'

type ChartProps = {

}

const chartData = [
    { month: 'January', desktop: 86 },
    { month: 'February', desktop: 98 },
    { month: 'March', desktop: 105 },
    { month: 'April', desktop: 115 },
    { month: 'May', desktop: 125 },
    { month: 'June', desktop: 132 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: 'hsl(var(--chart-1))',
    }
}


const Chart = (props: ChartProps) => {
    return (
        <Card className="border-none p-0">
            <CardContent className="p-0">
                <ResponsiveContainer height={300} width="100%">
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="var(--color-desktop)"
                                stroke="var(--color-desktop)"
                                fillOpacity={0.35}
                            />
                        </AreaChart>
                    </ChartContainer>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default Chart
