export type InstagramPostProps = {
    id: string;
    media_type : 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    caption?: string;
    timestamp: string;
}