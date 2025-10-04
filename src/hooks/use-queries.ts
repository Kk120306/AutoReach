import { getAllAutomation, getAutomationInfo } from '@/actions/automations';
import { useQuery } from '@tanstack/react-query';

export const useQueryAutomations = () => {
    return useQuery({
        queryKey: ['user-automations'],
        queryFn : getAllAutomation
    });
}

export const useQueryAutomation = (id: string) => {
    return useQuery({
        queryKey: ['automation-info'],
        queryFn : () => getAutomationInfo(id)
    });
}