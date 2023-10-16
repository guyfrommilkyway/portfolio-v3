interface EducationCardProps {
  program: string;
  university: string;
  duration: string;
  certificate: string;
  description: string;
  skills: any;
}

interface EducationProps {
  data: any;
}

interface ContinuousLearningCourseProps {
  course: string;
  status: string;
}

interface ContinuousLearningCardProps {
  name: string;
  organization: string;
  duration: string;
  courses: any;
  link: string;
}

interface ContinuousLearningProps {
  data: any;
}
