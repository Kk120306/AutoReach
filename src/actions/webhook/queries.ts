import { client } from "@/lib/prisma"


export const matchKeyword = async (keyword: string) => {
    return await client.keyword.findFirst({
        where: {
            word: {
                equals: keyword,
                mode: 'insensitive'
            }
        }
    })
}

export const getKeywordAutomation = async (id: string, dm: boolean) => {
    return await client.automation.findUnique({
        where: {
            id: id
        },
        include: {
            dms: dm,
            trigger: {
                where: {
                    type: dm ? 'DM' : 'COMMENT'
                }
            },
            listener: true,
            User: {
                select: {
                    subscription: {
                        select: {
                            plan: true
                        }
                    },
                    integrations: {
                        select: {
                            token: true
                        }
                    }
                }
            }
        }
    })
}

export const trackResponses = async (id: string, type: 'COMMENT' | 'DM') => {
    if (type === "COMMENT") {
        return await client.listener.update({
            where: {
                automationId: id
            },
            data: {
                commentCount: {
                    increment: 1
                }
            }
        })
    }

    if (type === 'DM') {
        return await client.listener.update({
            where: {
                automationId: id
            },
            data: {
                dmCount: {
                    increment: 1
                }
            }
        })
    }

}

export const createChatHistory = (
    automationId: string,
    sender: string,
    reciever: string,
    message: string) => {
    return client.automation.update({
        where: {
            id: automationId
        },
        data: {
            dms: {
                create: {
                    reciever,
                    senderId: sender,
                    message
                }
            }
        }
    })
}

export const getKeywordPost = async (postId: string, automationId: string) => {
    return await client.post.findFirst({
        where: {
            AND: [{ postId }, { automationId }]
        },
        select: { automationId: true }
    })
}


export async function getChatHistory(
    reciever: string,
    senderId: string
) {
    const dms = await client.dms.findMany({
        where: {
            reciever,
            senderId
        },
        orderBy: {
            createdAt: 'asc'
        },
        include: {
            automation: true 
        }
    });

    return {
        history: dms.map(dm => ({
            role: 'assistant',
            content: dm.message 
        })),
        automationId: dms[0]?.automationId ?? null 
    };
}