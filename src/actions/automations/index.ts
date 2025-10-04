'use server'

import { onCurrentUser } from "../user";
import { getAutomations, findAutomation, createAutomation, updateAutomation } from "./queries";


export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser();

    try {
        const create = await createAutomation(user.id, id);
        if (create) return {
            status: 200,
            data: 'Automation Created'
        }
        return { status: 404, data: 'Not Created' }
    } catch (error) {
        return { status: 500, data: 'Server Error' }
    }
}


export const getAllAutomation = async () => {
    const user = await onCurrentUser();
    try {
        const automations = await getAutomations(user.id);
        if (automations) return { status: 200, data: automations.automations }
        return { status: 404, data: [] }
    } catch (error) {
        return { status: 500, data: [] }
    }

}

export const getAutomationInfo = async (id: string) => {
    await onCurrentUser();
    try {
        const automations = await findAutomation(id);
        if (automations) {
            return { status: 200, data: automations }
        }
        return { status: 404, data: null }
    } catch (error) {
        return { status: 500, data: null }
    }
}

export const updateAutomationName = async (automationId: string, data: {
    name?: string
    active?: boolean
    automation?: string
}) => {
    await onCurrentUser();
    try {
        const update = await updateAutomation(automationId, data);
        if (update) return { status: 200, data: 'Updated' }
        return { status: 404, data: 'Not Updated' }
    } catch (error) {
        return { status: 500, data: 'Server Error' }
    }
}