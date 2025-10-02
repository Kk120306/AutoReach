import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { onUserInfo } from "@/actions/user";
import { getAllAutomation } from "@/actions/automations/index";

const prefetch = async (
    client: QueryClient,
    action: () => Promise<any>,
    key: string,
) => {
    return await client.prefetchQuery({
        queryKey: [key],
        queryFn: () => action(),
        staleTime: 1000 * 60
    });
}

export const PrefetchUserProfile = async (client: QueryClient) => {
    return await prefetch(client, onUserInfo, 'user-profile')
}

export const PrefetchUserAutomations = async (client: QueryClient) => {
    return await prefetch(client, getAllAutomation
        , 'user-automations')
}
