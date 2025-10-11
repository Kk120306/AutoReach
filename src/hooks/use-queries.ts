'use client'

import { getAllAutomation, getAutomationInfo, getProfilePosts } from '@/actions/automations';
import { useQuery } from '@tanstack/react-query';
import { onUserInfo } from '@/actions/user';

export const useQueryAutomations = () => {
    return useQuery({
        queryKey: ['user-automations'],
        queryFn: getAllAutomation
    });
}

export const useQueryAutomation = (id: string) => {
    return useQuery({
        queryKey: ['automation-info'],
        queryFn: () => getAutomationInfo(id)
    });
}


export const useQueryUser = () => {
    return useQuery({
        queryKey: ['user-profile'],
        queryFn: onUserInfo,
    });
}

export const useQueryAutomationPost = () => {
    const fetchPosts = async () => {
        return await getProfilePosts();
    }

    return useQuery({
        queryKey: ['instagram-media'],
        queryFn: fetchPosts,
    });
}
