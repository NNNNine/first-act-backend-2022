import { GenEdType } from "../common/types/gened";

export class CourseModel {
    courseNo!: string;
    abbrName!: string;
    courseNameTh!: string;
    courseNameEn!: string;
    department!: string;
    credit!: number;
    creditHours!: string;
    genEdType!: GenEdType;
    createdAt!: Date;
    updateAt!: Date;
    constructor(partial: Partial<CourseModel>) {
        Object.assign(this, partial);
    }
}