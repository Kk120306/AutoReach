'use client'

import { useMutationData } from './use-mutation-data';
import { useState, useRef, useEffect } from 'react';
import { z } from 'zod';
import { saveListener } from '@/actions/automations/index';
import { useZodForm } from './use-zod-form';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { TRIGGER } from '@/redux/slices/automation';
import { saveTrigger, saveKeyword, updateAutomationName, createAutomations, deleteKeyword, savePosts } from '@/actions/automations';


export const useCreateAutomation = (id?: string) => {
    const { isPending, mutate } = useMutationData(
        ['create-automation'],
        () => createAutomations(id),
        "user-automations"
    );

    return { isPending, mutate }
}

export const useEditAutomation = (automationId: string) => {
    const [edit, setEdit] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const enableEdit = () => setEdit(true);
    const disableEdit = () => setEdit(false);

    const { isPending, mutate } = useMutationData(
        ['update-automation'],
        (data: { name: string }) => updateAutomationName(automationId, { name: data.name }),
        'automation-info',
        disableEdit);

    useEffect(() => {
        function handleClickOutside(this: Document, event: MouseEvent) {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                if (inputRef.current.value !== '') {
                    mutate({ name: inputRef.current.value });
                } else {
                    disableEdit();
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []
    )

    return (
        { edit, enableEdit, inputRef, isPending, disableEdit }
    )
}


export const useListener = (id: string) => {
    const [listener, setListener] = useState<'MESSAGE' | "SMARTAI" | null>(null);

    const promptSchema = z.object({
        prompt: z.string().min(1),
        reply: z.string(),
    });

    const { isPending, mutate } = useMutationData(['create-listener'],
        (data: { prompt: string, reply: string }) =>
            saveListener(id, listener || "MESSAGE", data.prompt, data.reply),
        'automation-info');

    const { errors, onFormSubmit, register, watch, reset } = useZodForm(
        promptSchema,
        mutate
    )

    const onSetListener = (type: 'MESSAGE' | "SMARTAI") => {
        setListener(type);
    }


    return { register, onSetListener, onFormSubmit, listener, isPending }
}


export const useTriggers = (id: string) => {
    const types = useAppSelector((state) => state.AutomationReducer.trigger?.types)

    const dispath: AppDispatch = useDispatch();

    const onSetTrigger = (type: "COMMENT" | "DM") => dispath(TRIGGER({ trigger: { type } }));
    const { isPending, mutate } = useMutationData(
        ['add-trigger'],
        (data: { types: string[] }) => saveTrigger(id, data.types),
        'automation-info'
    )

    const onSaveTrigger = () => mutate({ types })
    return { onSetTrigger, types, isPending, onSaveTrigger }

}


export const useKeywords = (id: string) => {
    const [keyword, setKeyword] = useState('');
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setKeyword(e.target.value);

    const { mutate } = useMutationData(
        ['add-keyword'],
        (data: { keyword: string }) => saveKeyword(id, data.keyword),
        'automation-info',
        () => setKeyword('')
    )

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            mutate({ keyword });
            setKeyword('');
        }
    }

    const { mutate: deleteMutation } = useMutationData(
        ['delete-keyword'],
        (data: { id: string }) => deleteKeyword(data.id),
        'automation-info',
    )

    return { keyword, onValueChange, onKeyPress, deleteMutation }

}

export const useAutomationPost = (id: string) => {
    const [posts, setPosts] = useState<{
        postId: string;
        capition?: string;
        media: string
        mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    }[]>([]);

    const onSelectPost = (post: {
        postId: string;
        capition?: string;
        media: string
        mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    }) => {
        setPosts((prevItems) => {
            if (prevItems.find((p) => p.postId === post.postId)) {
                return prevItems.filter((p) => p.postId !== post.postId);
            } else {
                return [...prevItems, post];
            }
        })
    }

    const { mutate, isPending} = useMutationData(
        ["attach-posts"],
        () => savePosts(id, posts),
        "automation-info",
        () => setPosts([])
    )

    return { posts, onSelectPost, mutate, isPending }
 
}