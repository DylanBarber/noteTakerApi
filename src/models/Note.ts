export interface Note {
    id?: number;
    subject: string;
    body: string;
    createdAt?: Date;
    lastModified?: Date;
}