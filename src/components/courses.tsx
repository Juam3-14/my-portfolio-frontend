// components/Courses.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { CourseItem } from "@/data/types"

interface CoursesProps {
    courses: CourseItem[]
}

const Courses: React.FC<CoursesProps> = ({ courses }) => (
    <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Courses & Certifications
            </CardTitle>
        </CardHeader>
        <CardContent>
            {courses.map((course, index) => (
                <div key={index} className="mb-4">
                    <h3 className="font-semibold">{course.name}</h3>
                    <p className="text-sm text-gray-500">{course.provider}, {course.completionDate}</p>
                </div>
            ))}
        </CardContent>
    </Card>
)

export default Courses
