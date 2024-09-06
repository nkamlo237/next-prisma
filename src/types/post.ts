export type Post = {
    id: string;
    title: string;
    description: string;
    content: string;
    published: boolean | null;
    createdAt: Date;
    updatedAt: Date;
}