import { Request, Response } from "express";
import { courses } from "../common/mocks/course";
import { ErrorResponseDto } from "../dto/common";
import { CourseDto, CreateCourseDto, CoursesDto } from "../dto/course";
import courseRepo from "../repository/course";

const getCourses = (req: Request, res: Response) => {
  const coursesDto = CourseDto.fromModels(courseRepo.findCourses());
  const getCoursesDto = new CoursesDto(courses.length, coursesDto);
  res.status(200).json(getCoursesDto);
};

const getCourse = (req: Request, res: Response) => {
  const id = req.params.id;
  const course = courseRepo.findCourseByCourseNo(id);
  if (course === undefined) {
    const error = new ErrorResponseDto("Course not found", 404);
    res.status(404).json(error);
    return;
  }
  const courseDto = CourseDto.fromModel(course);
  res.status(200).json(courseDto);
};

const postCourse = (req: Request, res: Response) => {
  const course = new CreateCourseDto(req.body);
  const newCourse = courseRepo.createCourse(course);
  const newCourseDto = CourseDto.fromModel(newCourse);
  res.status(201).json(newCourseDto);
};

const patchCourse = (req: Request, res: Response) => {
  const id = req.params.id;
  const course = courseRepo.updateCourse(id, req.body);
  if (course === null) {
    const error = new ErrorResponseDto("Course not found", 404);
    res.status(404).json(error);
    return;
  }
  const courseDto = CourseDto.fromModel(course);
  res.status(200).json(courseDto);
};

const deleteCourse = (req: Request, res: Response) => {
  const id = req.params.id;
  const course = courseRepo.deleteCourseByCourseNo(id);
  if (course === null) {
    const error = new ErrorResponseDto("Course not found", 404);
    res.status(404).json(error);
    return;
  }
  const courseDto = CourseDto.fromModel(course);
  res.status(200).json(courseDto);
};

const courseController = {
  getCourse,
  getCourses,
  patchCourse,
  postCourse,
  deleteCourse,
};

export default courseController;