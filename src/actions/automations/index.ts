'use server'


import { onCurrentUser } from "../user";
import { findUser } from "../user/queries";
import {
    getAutomations, findAutomation, addListener, createAutomation,
    updateAutomation, addTrigger, addKeyword, deleteKeywordQuery, addPost
} from "./queries";


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

export const saveListener = async (automationId: string, listener: 'SMARTAI' | 'MESSAGE', prompt: string, reply?: string) => {
    await onCurrentUser();
    try {
        const create = await addListener(automationId, listener, prompt, reply);
        if (create) return { status: 200, data: 'Listener Added' }
        return { status: 404, data: 'Not Added' }
    } catch (error) {
        return { status: 500, data: 'Server Error' }
    }
}


export const saveTrigger = async (automationId: string, trigger: string[]) => {
    await onCurrentUser();
    try {
        const create = await addTrigger(automationId, trigger);
        if (create) return { status: 200, data: 'Trigger Added' }
        return { status: 404, data: 'Not Added' }
    }
    catch (error) {
        return { status: 500, data: 'Server Error' }
    }
}

export const saveKeyword = async (automationId: string, keyword: string) => {
    await onCurrentUser();
    try {
        const create = await addKeyword(automationId, keyword);
        if (create) return { status: 200, data: 'Keyword Added' }
        return { status: 404, data: 'Not Added' }
    }
    catch (error) {
        return { status: 500, data: 'Server Error' }
    }
}


export const deleteKeyword = async (automationId: string) => {
    await onCurrentUser();
    try {
        const deleted = await deleteKeywordQuery(automationId);
        if (deleted) return { status: 200, data: 'Keyword deleted' }
        return { status: 404, data: 'Not deleted' }
    }
    catch (error) {
        return { status: 500, data: 'Server Error' }
    }
}


export const getProfilePosts = async () => {
    const user = await onCurrentUser();
    try {
        const profile = await findUser(user.id);
        const posts = await fetch(
            `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`,
        )

        const parsed = await posts.json();
        if (parsed) {
            return {
                status: 200,
                data: parsed
            }
        }
        return {
            status: 404,
            data: null
        }
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}

export const savePosts = async (
    automationId: string,
    posts: {
        postId: string,
        caption?: string,
        media: string,
        mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
    }[]
) => {
    await onCurrentUser();
    try {
        const create = await addPost(automationId, posts);
        if (create) return { status: 200, data: 'Posts Attached' }
        return { status: 404, data: 'Not Attached' }
    } catch (error) {
        return { status: 500, data: 'Server Error' }
    }
}

export const activateAutomation = async (id: string, state: boolean) => {

    await onCurrentUser();
    try {
        const update = await updateAutomation(id, { active: state });
        if (update) return { status: 200, data: `Automation ${state ? 'Activated' : 'Disabled'}` }
        return { status: 404, data: 'Not Updated' }
    } catch (error) {
        return { status: 500, data: 'Server Error' }
    }

}